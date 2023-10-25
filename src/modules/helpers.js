function getLocalHour(weatherObj){
    let hour = weatherObj.location.localtime.substring(11, 13);

    return hour;
}

function getHourToDisplay(hourObj){
    let time = hourObj.time;
    let hour = time.substring(time.length-5, time.length);

    return hour;
}

// excellent piece of helper code I borrowed from
// 'https://github.com/bscottnz/weather-app/blob/main/src/js/utils.js'
function formatDate(date, dateFormat = 'full', wantShortDay = false) {
    const dateString = new Date(date).toUTCString();
    let dayOfWeek = dateString.slice(0, 3);
    let dayOfMonth = dateString.slice(5, 7);
    const month = dateString.slice(8, 11);
    const year = dateString.slice(14, 16);
    let suffix;
  
    // change 01 to 1 etc
    if (dayOfMonth < 10) {
      dayOfMonth = dayOfMonth.slice(1);
    }
  
    // generate corect date suffix
    if (dayOfMonth.slice(-1) === '1') {
      suffix = 'st';
    } else if (dayOfMonth.slice(-1) === '2') {
      suffix = 'nd';
    } else if (dayOfMonth.slice(-1) === '3') {
      suffix = 'rd';
    } else {
      suffix = 'th';
    }
  
    // those pesky 11, 12, 13 ths
    if (dayOfMonth > 3 && dayOfMonth < 21) {
      suffix = 'th';
    }
  
    // convert short day name to full day name
    if(!wantShortDay){    
        if (dayOfWeek === 'Mon') {
        dayOfWeek = 'Monday';
        } else if (dayOfWeek === 'Tue') {
        dayOfWeek = 'Tuesday';
        } else if (dayOfWeek === 'Wed') {
        dayOfWeek = 'Wednesday';
        } else if (dayOfWeek === 'Thu') {
        dayOfWeek = 'Thursday';
        } else if (dayOfWeek === 'Fri') {
        dayOfWeek = 'Friday';
        } else if (dayOfWeek === 'Sat') {
        dayOfWeek = 'Saturday';
        } else if (dayOfWeek === 'Sun') {
        dayOfWeek = 'Sunday';
        }
    }
  
    // return only the day of week
    if (dateFormat === 'day') {
      return dayOfWeek;
    }
  
    // return full date string
    return `${dayOfWeek}, ${dayOfMonth}${suffix} ${month} '${year}`;
  }

export {
    getLocalHour,
    getHourToDisplay,
    formatDate    
};