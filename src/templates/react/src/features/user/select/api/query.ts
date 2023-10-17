import { useQuery } from "@tanstack/react-query"

import { QueryKeys } from "@/shared/constants/query-keys"

import { getUserByIdApi } from "."

export const useUserQuery = (id: string | undefined) => {
	return useQuery([QueryKeys.user, id], () => getUserByIdApi(id!), {
		enabled: Boolean(id),
		keepPreviousData: true,
	})
}
