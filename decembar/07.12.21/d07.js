setTimeout(axios.get("api.openweathermap.org/data/2.5/weather?q=belgrade&appid=9b705d81d466fb9de5d522e2bd265ebb")
.then(res => {
    console.log(res.data)
}), 5000);