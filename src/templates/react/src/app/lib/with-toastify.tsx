import { FC } from "react"
import { ToastContainer } from "react-toastify"

export const WithToastify = (Component: FC) => () => (
	<>
		<Component />
		<ToastContainer limit={2} position="bottom-right" />
	</>
)
