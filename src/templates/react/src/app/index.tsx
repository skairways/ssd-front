import { withHocs } from "./providers"
import { AppRoutes } from "./services"

const App = () => {
	return (
		<>
			<AppRoutes />
		</>
	)
}

const WrappedApp = withHocs(App)

export default WrappedApp
