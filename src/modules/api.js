import format from "date-fns/format";
import * as Helpers from './helpers';
import { displayErrorMsg } from "./dom";


//const CURRENT_URL = 'http://api.weatherapi.com/v1/current.json?key=5b7362e8838e44bda91125324231710';
const FORECAST_URL = 'https://api.weatherapi.com/v1/forecast.json?key=5b7362e8838e44bda91125324231710&days=6';

// ^^ the forecast url call also includes the current weather
// so no need for two serperate calls

// so we always know current searched location
let lastLocation;

// store the most recent weather call so we don't
// have to make unnecessary calls
let lastForecast;


async function getForecast(location='kilcormac'){
    try{
        let response = await fetch(`${FORECAST_URL}&q=${location}`);
        // check that the response is fine
        if (response.status === 404) {
            displayErrorMsg("Sorry, we're having trouble...");
            throw new Error('Page not found');
          } else if (response.status === 500) {
            displayErrorMsg("Sorry, problems with the server...");
            throw new Error('Server error');
        } else if (response.status === 400) {
            displayErrorMsg("Sorry, can't find such a place...");
            throw new Error('Bad Request');
          } else if (!response.ok) {
            displayErrorMsg("Sorry, we're having trouble...");
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        let forecast = await response.json();

        lastLocation = location;
        lastForecast = forecast;

        console.log('forecast called ', forecast);

        return forecast

    }catch(error){
        console.error(error);
    }

}

/* async function getDate(){
    let weatherObj = await getForecast(lastLocation);

    let date = weatherObj.location.localtime;

    return format(new Date(date), "eeee dd MMM yy HH:mm");
} */

// for some reason, chance of rain is stored deep in
// forecast > forecastday > 0 > hour > ...hours > here
// but we need the current hour to match it up 
// so we make use of a helper function which returns 
// the current local hour
function getChanceOfRain(){
    let localHour =  Number(Helpers.getLocalHour(lastForecast)); 
    console.log('local hour ', localHour.length, localHour);
    console.log('local hour city', lastForecast);
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

    let hourToDisplay = Helpers.getHourToDisplay(hourObj);
    let status = hourObj.condition.text;
    let icon = hourObj.condition.icon;
    let altText = hourObj.condition.text;
    let tempC = hourObj.temp_c;
    let tempF = hourObj.temp_f;

    // round-off temps
    tempC = Math.round(tempC);
    tempF = Math.round(tempF);

    return{
        hourToDisplay, 
        status,
        icon,
        altText, 
        tempC, 
        tempF
    };
 
}

function getDailyStats(index){
    let dailyObj = lastForecast.forecast.forecastday[index];

    // helper to get nice date
    let dayToDisplay;
    if(index === 0){
        dayToDisplay = 'Today';
    }else{
        dayToDisplay = Helpers.formatDate(dailyObj.date, 'day', true);
    }
    let status = dailyObj.day.condition.text;
    let icon = dailyObj.day.condition.icon;
    let altText = dailyObj.day.condition.text;
    let hiTempC = dailyObj.day.maxtemp_c;
    let lowTempC = dailyObj.day.lowtemp_c;
    let hiTempF = dailyObj.day.maxtemp_f;
    let lowTempF = dailyObj.day.lowtemp_f;

    return{
        dayToDisplay,
        status,
        icon,
        altText,
        hiTempC,
        lowTempC,
        hiTempF,
        lowTempF,
    }
}

function getLatestWeatherObj(){
    return lastForecast;
}

export {
    getForecast,
    getChanceOfRain, 
    getLatestWeatherObj,
    getHourlyStats,
    getDailyStats,
};