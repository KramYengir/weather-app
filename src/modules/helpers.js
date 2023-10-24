function getLocalHour(weatherObj){
    let hour = weatherObj.location.localtime.substring(11, 13);

    return hour;
}

function getHourToDisplay(hourObj){
    let time = hourObj.time;
    let hour = time.substring(time.length-5, time.length);

    return hour;
}

export {
    getLocalHour,
    getHourToDisplay,    
};