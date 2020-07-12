import React, { memo } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import 'normalize.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>FunRetro Challenge</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Component {...pageProps} />

    <style jsx global>
      {`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: calc(0.75em + 1vmin);
        }

        * {
          box-sizing: border-box;
        }

        main {
          padding-top: 12vh;
        }
      `}
    </style>
  </>
)

export default memo(App)
