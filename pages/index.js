// React
import { useEffect, useState } from 'react'
// Lib
// Components
import Hero from '../components/layouts/Hero'
import SearchForm from '../components/forms/SearchForm'
import Stats from '../components/data/Stats'

const Home = () => {
  const [data, setData] = useState({})
  const [error, setError] = useState(undefined)

  return (
    <>
      <Hero />
      <SearchForm setData={setData} setError={setError} />
      {!error && Object.values(data).length > 0 && (
        <Stats header={data.name} data={data.data} />
      )}
    </>
  )
}

export default Home
