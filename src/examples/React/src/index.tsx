import React from "react"
import ReactDOM from "react-dom/client"

import App from "./app"
import { ErrorBoundary } from "react-error-boundary";
import {CodeErrorComponent} from "@/shared/ui/errors";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ErrorBoundary FallbackComponent={CodeErrorComponent}>
			<App />
		</ErrorBoundary>
	</React.StrictMode>,
)
