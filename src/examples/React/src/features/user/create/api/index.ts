import clientApi from "@/shared/api/base-api"
import { apiKeys } from "@/shared/constants/api-keys"
import { IUser } from "@/shared/types/example-user"

export const createUserApi = async (user: Partial<IUser>): Promise<IUser> => {
	const response = await clientApi.post(apiKeys.postUser, user)
	console.log(response.data)
	return response.data
}
