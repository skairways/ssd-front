import React from "react"
import ReactDOM from "react-dom/client"
import {ToastContainer} from 'react-toastify';

import { App } from "./app"
import "@styles/index.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
		<ToastContainer limit={2} />
	</React.StrictMode>,
)