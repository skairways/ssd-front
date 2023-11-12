import type { AppProps } from "next/app"

import { withHocs } from "@/app/with-hocs"

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default withHocs(App)
