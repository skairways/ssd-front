import { createTheme, MantineProvider as Provider } from "@mantine/core"
import { PropsWithChildren } from "react"

const theme = createTheme({
	/** Your theme override here */
})

export const MantineProvider = ({ children }: PropsWithChildren) => {
	return <Provider theme={theme}>{children}</Provider>
}
