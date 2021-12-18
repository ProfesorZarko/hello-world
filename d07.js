

const fetchTemperatureBeograd = async()=>{
    try{
        const res=await axios.get("https://api.openweathermap.org/data/2.5/weather?q=belgrade&appid=9b705d81d466fb9de5d522e2bd265ebb");
        console.log(res.data.main.temp);
        console.log(res.data.wind.speed);
        console.log(res.data.main.humidity);
        const showValue = document.querySelector("#firstDiv");
        showValue.innerHTML = "U Beogradu temperatura je : " + res.data.main.temp + " brzina vetra : " + res.data.wind.speed + " a vlažnost je : " + res.data.main.humidity;
    } catch(e){
        console.log("ERROR",e)
    }
}
const fetchTemperatureNis = async()=>{
    try{
        const res=await axios.get("https://api.openweathermap.org/data/2.5/weather?q=nis&appid=9b705d81d466fb9de5d522e2bd265ebb");
        console.log(res.data.main.temp);
        console.log(res.data.wind.speed);
        console.log(res.data.main.humidity);
        const showValue = document.querySelector("#firstDiv");
        showValue.innerHTML = "U Nišu temperatura je : " + res.data.main.temp + " brzina vetra : " + res.data.wind.speed + " a vlažnost je : " + res.data.main.humidity;
    } catch(e){
        console.log("ERROR",e)
    }
}
const fetchTemperatureSubotica = async()=>{
    try{
        const res=await axios.get("https://api.openweathermap.org/data/2.5/weather?q=subotica&appid=9b705d81d466fb9de5d522e2bd265ebb");
        console.log(res.data.main.temp);
        console.log(res.data.wind.speed);
        console.log(res.data.main.humidity);
        const showValue = document.querySelector("#firstDiv");
        showValue.innerHTML = "U Subotici temperatura je : " + res.data.main.temp + " brzina vetra : " + res.data.wind.speed + " a vlažnost je : " + res.data.main.humidity;
        //showValue.background-color = "orange";
    } catch(e){
        console.log("ERROR",e)
    }
}

const buttonBeograd = document.querySelector("#firstButton");
buttonBeograd.addEventListener("click", fetchTemperatureBeograd);

const buttonSubotica = document.querySelector("#secondButton");
buttonSubotica.addEventListener("click", fetchTemperatureSubotica);

const buttonNis = document.querySelector("#thirdButton");
buttonNis.addEventListener("click", fetchTemperatureNis)