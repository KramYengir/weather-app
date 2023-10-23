function getLocalHour(weatherObj){
    let hour = weatherObj.location.localtime.substring(11, 13);

    return hour;
}

export {getLocalHour};