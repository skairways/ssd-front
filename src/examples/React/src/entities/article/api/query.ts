import { useQuery } from "@tanstack/react-query"

import { QueryKeys } from "@/shared/constants/query-keys"

import { getArticleById } from "."

export const useArticleQuery = (id: string) => {
	return useQuery([QueryKeys.article, id], () => getArticleById(id!), {
		enabled: Boolean(id),
		keepPreviousData: true,
	})
}
