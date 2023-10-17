import { useQuery } from "@tanstack/react-query"

import { QueryKeys } from "@/shared/constants/query-keys"

import { getArticles } from "."

export const useArticlesQuery = () => {
	return useQuery([QueryKeys.articlesList], getArticles)
}
