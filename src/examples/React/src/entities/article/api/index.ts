import { IArticle } from "@/entities/article/types"

import clientApi from "@/shared/api/base-api"
import { apiKeys } from "@/shared/constants/api-keys"

export const getArticleById = async (id: string): Promise<IArticle> => {
	const response = await clientApi.get(`${apiKeys.articles}/${id}`)
	return response.data
}
