const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const btnEl = document.querySelector('.btn')


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

btnEl.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
    } else {
        html.classList.add('dark')
    }
})

function setTime() {
    const today = new Date();

    const hour = today.getHours() % 12

    const twentyFourHours = today.getHours() % 24

    const minute = today.getMinutes()
    const second = today.getSeconds()
    const ampm = twentyFourHours >= 12 ? 'PM' : 'AM'

    const month = today.getMonth()
    const day = today.getDay()
    const date = today.getDate()


    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale((hour * 60) + minute, 0, 720, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 60, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 60, 0, 360)}deg)`;


    hourEl.style.transition = `${hour === 0 ? "none" : "all 0.5s ease-in"}`;
    minuteEl.style.transition = `${minute === 0 ? "none" : "all 0.5s ease-in"}`;
    secondEl.style.transition = `${second === 0 ? "none" : "all 0.5s ease-in"}`;


    timeEl.innerHTML = `${hour}:${minute < 10 ? `0${minute}` : minute} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}


// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}



setTime()

setInterval(setTime, 1000)