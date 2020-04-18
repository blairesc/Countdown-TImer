let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');


function countDown(){
    let currentDate = new Date();
    const launchDate = new Date(2020, 8, 14, 8); //Septemeber 14 2020, 8 am 

    let currentTime = currentDate.getTime();
    let launchTime = launchDate.getTime();
    let dateDifference = launchTime - currentTime;

    let diffSeconds = Math.floor(dateDifference / 1000); //milliseconds to seconds
    let diffMinutes = Math.floor(diffSeconds / 60) ;
    let diffHours = Math.floor(diffMinutes / 60);
    let diffDays = Math.floor(diffHours / 24);

    diffSeconds = diffSeconds % 60;
    diffMinutes = diffMinutes % 60;
    diffHours = diffHours % 24;

    diffSeconds = (diffSeconds < 10) ? "0" + diffSeconds : diffSeconds;
    diffMinutes = (diffMinutes < 10) ? "0" + diffMinutes : diffMinutes;
    diffHours = (diffHours < 10) ? "0" + diffHours : diffHours;


    days.textContent = diffDays;
    hours.textContent = diffHours;
    minutes.textContent = diffMinutes;
    seconds.textContent = diffSeconds;

    setTimeout(countDown, 1000);
}

countDown();
