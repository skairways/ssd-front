import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { QueryKeys } from "@/shared/constants/query-keys"

import { createUserApi } from "."

export const useCreateUserQuery = () => {
	const queryClient = useQueryClient()

	return useMutation(createUserApi, {
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: [QueryKeys.usersList] })
			toast.success("user created successfully")
		},
		onError() {
			toast.error("creating user failed")
		},
	})
}
