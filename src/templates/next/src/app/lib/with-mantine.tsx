import { createTheme, MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import { ComponentType } from "react"

const theme = createTheme({
	/** Your theme override here */
})

export const WithMantine =
	<T extends object>(Component: ComponentType<T>) =>
	(props: T) => (
		<MantineProvider theme={theme}>
			<Component {...props} />
		</MantineProvider>
	)
