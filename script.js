const myBirthday = '4 June 2023';

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');

function countdown() {
    const myB = new Date(myBirthday);
    const currentDate = new Date;

    totalSecond = (myB - currentDate) / 1000;
    
    const day = Math.floor(totalSecond / 3600 / 24);
    const hour = Math.floor(totalSecond / 3600) % 24;
    const min = Math.floor(totalSecond / 60) % 60;
    const second = Math.floor(totalSecond) % 60;

    daysElement.innerHTML = day;
    hoursElement.innerHTML = format(hour);
    minsElement.innerHTML = format(min);
    secondsElement.innerHTML = format(second);
}

function format(time) {
    return time < 10 ? `0${time}` : time;
}

// Initial Call
countdown();
setInterval(countdown, 1000);