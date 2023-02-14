import type { AppProps } from 'next/app'

function ToneBucket({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default ToneBucket

// Components in this bucket need to imported and exported in order for NextJS hot reload to work properly.
export { }

