import ThemeToggle from '../../components/layouts/ThemeToggle'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-dark text-light shadow-md">
      <div className="max-w-lg mx-auto px-5 md:px-0 h-16 flex items-center justify-between">
        <h2 className="font-bold uppercase tracking-tight">Stars Portal</h2>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
