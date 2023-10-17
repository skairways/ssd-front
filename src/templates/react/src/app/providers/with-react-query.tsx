import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { FC } from "react"

import { queryClient } from "./libs"

export const WithReactquery = (Component: FC) => () => (
	<QueryClientProvider client={queryClient}>
		<Component />
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>
)
