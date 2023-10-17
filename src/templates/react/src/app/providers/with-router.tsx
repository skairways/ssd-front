import { FC } from "react"
import { BrowserRouter } from "react-router-dom"

export const WithRouter = (Component: FC) => () => (
	<BrowserRouter>
		<Component />
	</BrowserRouter>
)
