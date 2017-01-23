let React = require('react')

let WeatherMessage = ({temp, location}) => {
  return (
      <h1 className='text-center'>It is {temp} in {location}</h1>
    )
}

module.exports = WeatherMessage
