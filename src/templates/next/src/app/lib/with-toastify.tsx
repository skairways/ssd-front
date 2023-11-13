import { ComponentType } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const WithToastify =
	<T extends object>(Component: ComponentType<T>) =>
	(props: T) => (
		<>
			<Component {...props} />
			<ToastContainer limit={2} position="bottom-right" />
		</>
	)
