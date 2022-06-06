// React
import { useState } from 'react'
// Lib
import fetchData from '../../lib/fetchData'

const SearchForm = ({ setData, setError }) => {
  const [input, setInput] = useState('sun')

  const handleChange = e => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { data, error } = await fetchData(input)
    setData(data)
    setError(error)
  }

  return (
    <div className="py-12">
      <form
        className="border-b border-accents-4 focus-within:border-b-success flex items-center justify-between"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={input}
          id="input"
          name="input"
          className="appearance-none outline-none border-none block w-full bg-light dark:bg-dark py-4"
          onChange={handleChange}
        />
        <button type="submit" className="block hover:text-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default SearchForm
