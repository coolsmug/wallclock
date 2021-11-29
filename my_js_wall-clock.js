setInterval(setClock, 1000)

const secondsHand = document.querySelector("[data-second-hand]")
const minutesHand = document.querySelector("[data-minute-hand]")
const hoursHand = document.querySelector("[data-hour-hand]")

function setClock(){
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds()/60
    const minuteRatio = (secondRatio + currentDate.getMinutes())/60
    const hourRatio = (minuteRatio + currentDate.getHours())/ 12

    setRotationRatio(secondsHand, secondRatio)
    setRotationRatio(minutesHand, minuteRatio)
    setRotationRatio(hoursHand, hourRatio)
}

function setRotationRatio(elements, rotationRatio){
    elements.style.setProperty("--rotation", rotationRatio * 360)
}

setClock()

