export interface IResponseData<T> {
	data: T
	message: string
	statusCode: number
	show: boolean
}
