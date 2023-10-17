import clientApi from "@/shared/api/base-api"
import { ApiKeys } from "@/shared/constants/api-keys"
import { IUser } from "@/shared/types/example-user"

export const createUserApi = async (user: Partial<IUser>): Promise<IUser> => {
	const response = await clientApi.post(ApiKeys.postUser, user)
	console.log(response.data)
	return response.data
}
