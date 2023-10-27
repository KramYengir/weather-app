import * as API from './api';
import * as Helper from './helpers';
import feelsLikeImg from '../assets/feels-like.png';
import rainImg from '../assets/rain-drops.png';
import humidityImg from '../assets/humidity.png';
import windImg from '../assets/wind.png';
import cloudIcon from '../assets/cloud-icon.png';

const favicon = document.querySelector('link');
const errorMsg = document.querySelector('.error-msg');
const weatherImg = document.querySelector('.weather-img>img');
const location = document.querySelector('.city');
const date = document.querySelector('.date');
const temp = document.querySelector('.temperature');
const status = document.querySelector('.status');

const container = document.querySelector('.container');

const feelsLikeImgEl = document.querySelector('#feels-like-img');
const chanceOfRainImgEl = document.querySelector('#chance-of-rain-img');
const humidityImgEl = document.querySelector('#humidity-img');
const windImgEl = document.querySelector('#wind-img');
const feelsLike = document.querySelector('#feels-like');
const chanceOfRain = document.querySelector('#rain');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');

// hourly elements
const hourDivs = [...document.querySelectorAll('.hourly-forecast > div')];
// daily elements
const dayDivs = [...document.querySelectorAll('.daily-forecast > div')];

// default values are Celsius & Mph
container.classList.add('celsius');
container.classList.add('mph');

favicon.href = cloudIcon;

// set icons for the stat boxes 
feelsLikeImgEl.src = feelsLikeImg;
chanceOfRainImgEl.src = rainImg;
humidityImgEl.src = humidityImg;
windImgEl.src = windImg;

let isCelsius = true;
let isMph = true;


// initialize the page icons and default values
async function init(){
    // set favicon and some page icons 
    favicon.href = cloudIcon;
    feelsLikeImgEl.src = feelsLikeImg;
    chanceOfRainImgEl.src = rainImg;
    humidityImgEl.src = humidityImg;
    windImgEl.src = windImg;

    // load & set weather info from 'kilcormac'
    // as placeholder info
    let forecast = await API.getForecast();
    console.log(forecast);
    setAllValues(forecast);

}

async function setAllValues(forecast){
    // main info
    location.textContent = forecast.location.name;
    weatherImg.src = forecast.current.condition.icon;
    weatherImg.alt = forecast.current.condition.text;
    date.textContent = Helper.formatDate(forecast.location.localtime);
    temp.innerHTML = isCelsius ? 
        Math.round(forecast.current.temp_c)+`<span class='temp-unit'>°C</span>`
        :Math.round(forecast.current.temp_f)+`<span class='temp-unit'>°F</span>`;

    status.textContent = forecast.current.condition.text;

    feelsLike.innerHTML = isCelsius ? 
        Math.round(forecast.current.feelslike_c)+`<span class='feels-like-temp-unit'>°C</span>`
        :Math.round(forecast.current.feelslike_f)+`<span class='feels-like-temp-unit'>°F</span>`;

    chanceOfRain.textContent = API.getChanceOfRain()+'%';
    humidity.textContent = forecast.current.temp_c+'%';
    wind.innerHTML = isMph ? 
        Math.round(forecast.current.gust_mph)+`<span class='wind-unit'>mph</span>`
        :Math.round(forecast.current.gust_kph)+`<span class='wind-unit'>km/h</span>`

    // hourly
    setHourlyValues();
    
    // week
    setDailyValues();
}

function setHourlyValues(){
    hourDivs.forEach((div, i) =>{
        let {hourToDisplay, status, icon, altText, tempC, tempF} = API.getHourlyStats(i);

        div.children[0].textContent = hourToDisplay;
        div.children[1].src = icon;
        div.children[1].alt = altText;
        div.children[2].textContent = status;
        div.children[3].textContent = isCelsius ? 
            tempC+'°C' :
            tempF+'°F';
    })
}

function setDailyValues(){
    //create a method in API which returns the necessary data
    // for next 6 days
    // may need a date-to-day helper method
    // maybe use min/max temp
    // otherwise the same
    dayDivs.forEach((div, i)=>{
        let {
            dayToDisplay,
            status,
            icon,
            altText,
            hiTempC, 
            lowTempC,
            hiTempF,
            lowTempF
            } = API.getDailyStats(i);
        
        div.children[0].textContent = dayToDisplay;
        div.children[1].src = icon;
        div.children[1].alt = altText;
        div.children[2].textContent = status;
        div.children[3].textContent = isCelsius ? 
        '▼ '+Math.round(lowTempF)+'°F':
        '▼ '+Math.round(lowTempC)+'°C' ;
        div.children[4].textContent = isCelsius ? 
        '▲ '+Math.round(hiTempC)+'°C' :
        '▲ '+Math.round(hiTempF)+'°F';
    })

}

function setIsCelsius(value){
    isCelsius = value;
}

function setIsMph(value){
    isMph = value;
}

function displayErrorMsg(msg){
    errorMsg.textContent = msg;
}


export {
    setAllValues, 
    init, 
    setIsCelsius, 
    setIsMph,
    displayErrorMsg,
    };