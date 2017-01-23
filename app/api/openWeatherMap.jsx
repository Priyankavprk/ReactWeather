let axios = require('axios')

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f814d0e4585b1589c7589c972e5e1cb7&units=celcius'
//f814d0e4585b1589c7589c972e5e1cb7

module.exports = {
  getTemp: function (location) {
    let encodedLocation = encodeURIComponent(location)
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        return res.data.main.temp
      }
    }, function (res) {
      throw new Error(res.data.message)
    })
  }
}
