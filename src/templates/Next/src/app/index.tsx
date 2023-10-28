import type { AppProps } from 'next/app'

export const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
}