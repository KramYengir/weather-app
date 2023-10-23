import format from "date-fns/format";
import * as Helpers from './helpers';


//const CURRENT_URL = 'http://api.weatherapi.com/v1/current.json?key=5b7362e8838e44bda91125324231710';
const FORECAST_URL = 'http://api.weatherapi.com/v1/forecast.json?key=5b7362e8838e44bda91125324231710&days=6';

// ^^ the forecast url call also includes the current weather
// so no need for two serperate calls

// this gets a weather object which we will use 
// to get all our other bits of info in our 
// functions below

// so we always know current searched location
let lastLocation;

let lastForecast;


async function getForecast(location='kilcormac'){
    try{
        let response = await fetch(`${FORECAST_URL}&q=${location}`);
        let forecast = await response.json();

        lastLocation = location;
        lastForecast = forecast;

        return forecast

    }catch(error){
        console.log(error);
    }

}

async function getDate(){
    let weatherObj = await getForecast(lastLocation);

    let date = weatherObj.location.localtime;

    return format(new Date(date), "eeee dd MMM yy HH:mm");
}

// for some reason, chance of rain is stored deep in
// forecast > forecastday > 0 > hour > ...hours > here
// but we need the current hour to match it up 
// so we make use of a helper function which returns 
// the current local hour
function getChanceOfRain(){
    let localHour =  Helpers.getLocalHour(lastForecast); //returns 11
    let chanceOfRain = lastForecast.forecast.forecastday[0].hour[localHour].chance_of_rain;

    return chanceOfRain;
}

export {getForecast, getDate, getChanceOfRain};