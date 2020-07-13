import React, { memo } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import 'normalize.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <html lang="pt-br" dir="ltr">
    <Head>
      <title>FunRetro Challenge</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://guiaviajarmelhor.com.br" />
      <meta name="description" content="FunRetro Challenge by @mathvaleriano" />
      <meta name="robots" content="noindex" />
    </Head>

    <body>
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
    </body>
  </html>
)

export default memo(App)
