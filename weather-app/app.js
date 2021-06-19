const request = require('postman-request')
const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address){
    console.log('Please provide Address!')
}else{
    geoCode(address, (error, {latitude, longitude, location}) =>{
        if(error){
            return console.log(error)
        }
        
        forecast(latitude, longitude,(error, forecastData)=>{
            if(error){
                return console.log(error)
            }
            console.log(location)
            console.log('Weather: ', forecastData)
        })
    })
}

