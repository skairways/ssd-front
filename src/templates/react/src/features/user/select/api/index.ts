import clientApi from "@/shared/api/base-api"
import { ApiKeys } from "@/shared/constants/api-keys"
import { IUser } from "@/shared/types/example-user"

export const getUserByIdApi = async (id: string): Promise<IUser> => {
	const response = await clientApi.get(`${ApiKeys.users}/${id}`)
	return response.data
}
