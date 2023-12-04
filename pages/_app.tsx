import '@/styles/globals.scss'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout/layout'
import { store } from '@/store/store'
import { Provider } from 'react-redux'

function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
          <Layout>
              <Head>
                    <title>ITAL</title>
                    <meta name="description" content="Ital project" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
              </Head>
              <Component {...pageProps} />
            </Layout>
         </Provider>
}

export default appWithTranslation(App);