import { useTheme } from 'next-themes'
import useIsMounted from '../../hooks/useIsMounted'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const { isMounted } = useIsMounted()

  const handleClick = e => {
    e.preventDefault()
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  if (!isMounted) return null

  return (
    <div>
      <button
        type="button"
        aria-label="toggle night mode"
        onClick={handleClick}
        className="flex justify-center items-center h-12 w-12"
      >
        {theme === 'dark' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>
    </div>
  )
}

export default ThemeToggle
