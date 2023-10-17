import { ToastContainer } from "react-toastify"

import { AppRoutes } from "@/pages"

import "@/shared/styles/app.scss"

import { withHocs } from "./providers"

const App = () => {
	return (
		<>
			<AppRoutes />
			<ToastContainer limit={2} position="bottom-right" />
		</>
	)
}

const WrappedApp = withHocs(App)

export default WrappedApp
