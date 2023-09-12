import { Component } from "react"
import { BrowserRouter } from "react-router-dom"

const withRouter = (component: Component) => () => (
	<BrowserRouter>
		{/* @ts-ignore */}
		{component()}
	</BrowserRouter>
)

export default withRouter
