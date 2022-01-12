const form = document.querySelector("form");
const input = document.querySelector("#catName");
const list = document.querySelector("#catList");
const jokeButton = document.querySelector("#jokeButton");
const jokeList = document.querySelector("#jokeList");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    list.append(newLI);
    input.value = "";
    console.log(catName);
})
const getDedJoke= async () =>{
    const config = {headers:{Accept:"application/json"}};
    const res = await axios.get("https://icanhazdadjoke.com", config);
    const newJoke = res.data.joke;
    const newLiJoke = document.createElement("LI");
    newLiJoke.innerText = newJoke;
    jokeList.append(newLiJoke);
    console.log(res.data.joke);
}
jokeButton.addEventListener("click", getDedJoke);
function startTime () {
    const today = new Date ();
    let h  = today.getHours();
    let m  = today.getMinutes();
    let s  = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("txt").innerHTML= (h +":" + m + ":" + s) ;
    setTimeout(startTime, 1000);
};
function checkTime(i){
    if(i<10){i="0"+ i};
    return i;
}
startTime();
