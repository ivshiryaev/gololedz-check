document.addEventListener("DOMContentLoaded", function () {
    // Wroclaw coordinates
    const latitude = 51.1079
    const longitude = 17.0385
    const baseUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`

    const gololedzDiv = document.querySelector(".gololedz")
    const noGololedzDiv = document.querySelector(".no-gololedz")

    async function fetchWeather() {
        const response = await fetch(baseUrl)
        const data = await response.json()
        return data
    }

    fetchWeather().then((data) => {
        console.log(data)
        const temperature = data.current_weather.temperature
        const weather_code = data.current_weather.weather_code
        const isGololedz = checkIfGololedz(temperature, weather_code)

        isGololedz
            ? gololedzDiv.classList.remove("hide")
            : noGololedzDiv.classList.remove("hide")
    })

    function checkIfGololedz(temperature, weather_code) {
        if (temperature < 0 && weather_code === 600) {
            console.log("Gololedz")
        }
    }
})
