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

// store the most recent weather call so we don't
// have to make unnecessary calls
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

// HOURLY STATS
// this is the trickiest & busiest one, I need to get hourly stats
// and display them in 3hr increments from the current hour...
// this takes in the hour and gets necessary stats as an object

function getHourlyStats(incrementMagnitude=0){

    let hour = Number(Helpers.getLocalHour(lastForecast));
    hour += (3*incrementMagnitude);
    let day = 0;

    // change to next day when we pass midnight
    // and fix the hour i.e. 26 will be 26-24 = 2am
    if(hour > 23){
        hour -= 24;
        day = 1;
    }

    let hourObj = lastForecast.forecast.forecastday[day].hour[hour];
    // testing
    console.table('Hour Object', hourObj);

    let hourToDisplay = Helpers.getHourToDisplay(hourObj);
    let status = hourObj.condition.text;
    let icon = hourObj.condition.icon;
    let tempC = hourObj.temp_c;
    let tempF = hourObj.temp_f;

    return{
        hourToDisplay, 
        status,
        icon, 
        tempC, 
        tempF
    };
 
}

function getLatestWeatherObj(){
    return lastForecast;
}

export {
    getForecast,
    getDate, 
    getChanceOfRain, 
    getLatestWeatherObj,
    getHourlyStats,
};