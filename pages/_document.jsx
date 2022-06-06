import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
      </Head>
      <body className="text-dark bg-light dark:text-light dark:bg-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
