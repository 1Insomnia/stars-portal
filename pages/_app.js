import '../styles/globals.css'
import 'inter-ui/inter.css'
import { ThemeProvider } from 'next-themes'
// Components
import Main from '../components/layouts/Main'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Main>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  )
}

export default MyApp
