import { PropsWithChildren } from "react"

import { MantineProvider } from "./mantine-provider"

export const Providers = ({ children }: PropsWithChildren) => {
	return <MantineProvider>{children}</MantineProvider>
}
