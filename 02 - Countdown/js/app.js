const items = document.querySelectorAll(".countdown-item > h4");
const countdownElement = document.querySelector(".countdown");
// Assigning a reporting point
let countdownDate = new Date(2025, 1,28, 16, 6, 0).getTime();

function getCountDownTime() {
    // get current time
    const now = new Date().getTime();
    
    // find the time difference
    const distance = countdownDate - now

    // 1s = 1000ms
    // 1m = 60s
    // 1h = 60m
    // 1d = 24h

    // create variables in ms
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000
    
    // count for days, hours, minutes and seconds
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);
    
    // Creating massive with variables
    const values = [days, hours, minutes, seconds]


    // adding variable values ​​to the page
    items.forEach(function(item,index){
        item.textContent = (values[index])
    })

    if(distance <0) {
        clearInterval(countdown);
        countdownElement.innerHTML = "<h4 class ='expired'>time's up</h4>";
    }
}

// counter updates every second
let countdown = setInterval(getCountDownTime, 1000);

// initialization of current time
getCountDownTime();