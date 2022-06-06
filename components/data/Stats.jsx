import PropTypes from 'prop-types'

const Title = ({ title }) => (
  <h2 className="text-xl font-bold tracking-tight text-center mb-8 uppercase">
    {title}
  </h2>
)

const Box = ({ title, value }) => (
  <div className="pb-6 flex items-center justify-between border-b border-b-accents-3">
    <h3 className="text-sm text-accents-3">{title}</h3>
    <p className="text-xl">{value}</p>
  </div>
)

const Stats = ({ header, data }) => {
  console.log(data)
  return (
    <div className="py-8">
      <Title title={header} />
      <div className="flex flex-col gap-8">
        {data.map(item => {
          if (!item.value) return
          return <Box title={item.title} value={item.value} key={item.id} />
        })}
      </div>
    </div>
  )
}

Stats.propTypes = {
  name: PropTypes.string,
  apparent_magnitude: PropTypes.string,
  absolute_magnitude: PropTypes.string,
  spectral_class: PropTypes.string
}

Stats.Title = Title

export default Stats
