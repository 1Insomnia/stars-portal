const BASE_URL = `https://api.api-ninjas.com/v1/stars?name=`

const fetchData = async name => {
  try {
    const res = await fetch(`${BASE_URL}${name}`, {
      headers: {
        'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY
      }
    })
    if (!res.ok) throw new Error()
    const [data] = await res.json()

    return {
      data: data,
      error: null
    }
  } catch (error) {
    return {
      data: null,
      error: error
    }
  }
}

export default fetchData
