const input = document.querySelector("#input-field")
const searchBtn = document.querySelector("#searchBtn")
const name = document.querySelector("#city-name")
const weatherIcon = document.querySelector("#weather-icon")
const weatherName = document.querySelector("#weather-name")

searchBtn.addEventListener("click",()=>{

const cityName = input.value.trim()



weatherApp(cityName)

})






async function weatherApp(cityName){

const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5a20814a8c807aa4513aa3951649afb8`)

const responseJson = await response.json()


console.log(responseJson)

const iconCode = responseJson.weather[0].icon
console.log(iconCode)

const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`

weatherIcon.src = iconUrl


weatherName.textContent = responseJson.weather[0].main
name.textContent=responseJson.name

}


    
