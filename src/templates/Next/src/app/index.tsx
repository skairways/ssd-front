import type { AppProps } from 'next/app'

import '@/shared/styles/index.scss'

export const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
}