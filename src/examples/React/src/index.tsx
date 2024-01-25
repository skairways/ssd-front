import React from "react"
import ReactDOM from "react-dom/client"

import App from "./app"
import { ErrorBoundary } from "./shared/ui/errors"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</React.StrictMode>,
)
