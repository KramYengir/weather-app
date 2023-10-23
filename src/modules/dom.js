import * as API from './api';
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

// default values are Celsius & Mph
container.classList.add('celsius');
container.classList.add('mph');

favicon.href = cloudIcon;

// set icons for the stat boxes 
feelsLikeImgEl.src = feelsLikeImg;
chanceOfRainImgEl.src = rainImg;
humidityImgEl.src = humidityImg;
windImgEl.src = windImg;


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
    date.textContent = await API.getDate();
    temp.textContent = weatherObj.current.temp_c;
    status.textContent = weatherObj.current.condition.text;
    feelsLike.textContent = weatherObj.current.feelslike_c;
    chanceOfRain.textContent = API.getChanceOfRain()+'%';
    humidity.textContent = weatherObj.current.temp_c+'%';
    wind.textContent = weatherObj.current.gust_mph;

    // hourly
    // week
}


export {setAllValues, init};