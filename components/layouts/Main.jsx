import Header from './Header'
import Footer from './Footer'

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen max-w-lg mx-auto px-5 md:px-0 pt-16">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Main
