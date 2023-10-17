import { useQuery } from "@tanstack/react-query"

import { QueryKeys } from "@/shared/constants/query-keys"

import { getUsersApi } from "."

export const useUsersListQuery = () => {
	return useQuery([QueryKeys.usersList], getUsersApi, {
		refetchInterval: 10000,
	})
}
