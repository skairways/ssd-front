import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios"

import { EnvKeys } from "@/shared/constants/env"
import { IResponseData } from "@/shared/types/response-data"

const clientApi = axios.create({
	//* use .env file for safety purposes, constant is used as an example
	baseURL: EnvKeys.NEXT_HOST,
})

clientApi.interceptors.request.use(
	<T>(config: InternalAxiosRequestConfig<IResponseData<T>>) => {
		// Do something before request is sent
		return config
	},
)

clientApi.interceptors.response.use(
	<T>(response: AxiosResponse<IResponseData<T>>) => {
		// Do something with response data
		return response
	},
)

export default clientApi
