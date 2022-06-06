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
    const dataSet = {
      name: name,
      data: [
        {
          id: 1,
          title: 'apparent magnitude',
          value: data.apparent_magnitude
        },
        {
          id: 2,
          title: 'absolute magnitude',
          value: data.absolute_magnitude
        },
        {
          id: 3,
          title: 'distance in LY',
          value: data.distance_light_year
        },
        {
          id: 4,
          title: 'spectral class',
          value: data.spectral_class
        },
        {
          id: 5,
          title: 'constellation',
          value: data.constellation
        }
      ]
    }

    return {
      data: dataSet,
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
