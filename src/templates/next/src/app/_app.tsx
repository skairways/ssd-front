import type { AppProps } from "next/app"

// import { MantineProvider } from '@mantine/core'
// import { Providers } from './providers'

export default function App({ Component, pageProps }: AppProps) {
	return (
		// <MantineProvider>
		<Component {...pageProps} />
		// </MantineProvider>
	)
}
