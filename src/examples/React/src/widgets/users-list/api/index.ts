import clientApi from "@/shared/api/base-api"
import { apiKeys } from "@/shared/constants/api-keys"
import { IUser } from "@/shared/types/example-user"

export const getUsersApi = async (): Promise<IUser[]> => {
	const response = await clientApi.get(apiKeys.users)
	return response.data
}
