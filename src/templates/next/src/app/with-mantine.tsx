import { createTheme, MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import { FC } from "react"

const theme = createTheme({
	/** Your theme override here */
})
export const WithMantine = (Component: FC) => () => (
	<MantineProvider theme={theme}>
		<Component />
	</MantineProvider>
)
