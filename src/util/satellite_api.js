const axios = require('axios');

export const getSatellites = (i) => {
    return axios.get(`https://tle.ivanstanojevic.me/api/tle?page-size=100&page=${i}&api_key=zfCLNrBegtOnEVufO9WRFjfHAi0kM3QgImp0q9Fx`)
}


