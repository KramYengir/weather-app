function getLocalHour(weatherObj){
  // how I cut out the hour is causing problems
  // when it's a single-digit hour
  // so i default it to a date format
  // and cut the hour from that

  let date = new Date(weatherObj.location.localtime);
  let hour = String(date).substring(16, 18);

  return hour;
}

function getHourToDisplay(hourObj){
    let time = hourObj.time;
    let hour = time.substring(time.length-5, time.length);

    return hour;
}

// helpful for slicing...
//012345678901234567890123
//Thu Oct 26 2023 13:16:00 GMT+0100

// excellent piece of helper code I borrowed & modified from
// 'https://github.com/bscottnz/weather-app/blob/main/src/js/utils.js'
function formatDate(date, dateFormat = 'full', wantShortDay = false) {
    const dateString = new Date(date).toString();
    const month = dateString.slice(4, 8);
    const year = dateString.slice(13, 15);
    let hour = dateString.slice(16,18);
    let dayOfWeek = dateString.slice(0, 3);
    let dayOfMonth = dateString.slice(8, 10);
    let time = dateString.slice(16,21);
    let daySuffix;
    let timeSuffix;

    //console.log('date string ', dateString);
  
    // change 01 to 1 etc
    if (dayOfMonth < 10) {
      dayOfMonth = dayOfMonth.slice(1);
    }
  
    // generate corect date daySuffix
    if (dayOfMonth.slice(-1) === '1') {
      daySuffix = 'st';
    } else if (dayOfMonth.slice(-1) === '2') {
      daySuffix = 'nd';
    } else if (dayOfMonth.slice(-1) === '3') {
      daySuffix = 'rd';
    } else {
      daySuffix = 'th';
    }

    // generate correct time suffix
    if(hour <= 12){
      timeSuffix = 'am';
    }else{
      timeSuffix = 'pm';
    }
    // and 12hr format
    if(hour > 12 || hour < 10){
      time = hour.slice(1,2)+time.slice(3,5);
    }
  
    // those pesky 11, 12, 13 ths
    if (dayOfMonth > 3 && dayOfMonth < 21) {
      daySuffix = 'th';
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
    return `${time}${timeSuffix}, ${dayOfWeek}, ${dayOfMonth}${daySuffix} ${month} '${year}`;
  }

export {
    getLocalHour,
    getHourToDisplay,
    formatDate    
};