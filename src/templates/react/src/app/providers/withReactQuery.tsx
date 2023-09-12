import { FC } from "react"
import { QueryClientProvider } from "react-query"
import { queryClient } from "./libs"

const withReactquery = (Component: FC) => () => (
	<QueryClientProvider client={queryClient}>
		<Component />
	</QueryClientProvider>
)

export default withReactquery
