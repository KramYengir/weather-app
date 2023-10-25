import * as API from './api';
import * as Helper from './helpers';
import feelsLikeImg from '../assets/feels-like.png';
import rainImg from '../assets/rain-drops.png';
import humidityImg from '../assets/humidity.png';
import windImg from '../assets/wind.png';
import cloudIcon from '../assets/cloud-icon.png';

const favicon = document.querySelector('link');

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
    let weatherObj = await API.getForecast();
    console.log(weatherObj);
    setAllValues(weatherObj);

}

async function setAllValues(weatherObj){
    // main info
    location.textContent = weatherObj.location.name;
    weatherImg.src = weatherObj.current.condition.icon;
    date.textContent = Helper.formatDate(weatherObj.location.localtime);
    temp.textContent = isCelsius ? 
        weatherObj.current.temp_c+'°C'
        :weatherObj.current.temp_f+'°F';

    status.textContent = weatherObj.current.condition.text;

    feelsLike.textContent = isCelsius ? 
        weatherObj.current.feelslike_c+'°C'
        :weatherObj.current.feelslike_f+'°F';

    chanceOfRain.textContent = API.getChanceOfRain()+'%';
    humidity.textContent = weatherObj.current.temp_c+'%';
    wind.textContent = isMph ? 
        weatherObj.current.gust_mph+' mph'
        :weatherObj.current.gust_kph+' kph';

    // hourly
    setHourlyValues();
    
    // week
    setDailyValues();
}

function setHourlyValues(){
    hourDivs.forEach((div, i) =>{
        let {hourToDisplay, status, icon, tempC, tempF} = API.getHourlyStats(i);

        div.children[0].textContent = hourToDisplay;
        div.children[1].src = icon;
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
            hiTempC, 
            lowTempC,
            hiTempF,
            lowTempF
            } = API.getDailyStats(i);
        
        div.children[0].textContent = dayToDisplay;
        div.children[1].src = icon;
        div.children[2].textContent = status;
        div.children[3].textContent = isCelsius ? 
        hiTempC+'°C' :
        hiTempF+'°F';
    })

}

function setIsCelsius(value){
    isCelsius = value;
}

function setIsMph(value){
    isMph = value;
}


export {
    setAllValues, 
    init, 
    setIsCelsius, 
    setIsMph,
    };