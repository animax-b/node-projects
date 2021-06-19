const request = require('postman-request')

const foreCast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=de6093b5b04bf90a23a74d9c893e3a6e&query='+latitude+','+longitude+'&units=m'
    request({url, json: true},(error, {body})=>{
        if(error){
            callback('Unable to connect to weather service! Please check your Internet Connectivity', undefined)
        }else if(body.error){
            callback('Unable to find Location', undefined)
        }else{
            const data = "It is currently "+body.current.temperature+" degrees celcius out. There is "+body.current.precip+"% chance of rain"
            callback(undefined, data)
        }
    })
}

module.exports = foreCast