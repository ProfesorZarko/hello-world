names = ["Mick", "Ann", "John", "Lily", "Pit"];
numbers =[1,5,9,11,55,69];
colors=["red", "green","blue", "orange", "yellow"];
const rundom = Math.floor(Math.random()*5);
console.log(names[rundom]);
console.log(numbers[rundom]);
console.log("provera ispisa");
const button=document.querySelector("#firstButton");
button.addEventListener("click",()=>{
    const newColor=colors[Math.floor(Math.random()*5)];
    const newText = names[Math.floor(Math.random()*5)]
    document.querySelector("#firstDiv").style.backgroundColor=newColor;
    document.querySelector("#firstDiv").innerHTML=newText;
})
var myVar;
function startChange(){
    myVar = setInterval(ChangeColorSecondDiv,500);
}
function stopChange(){
    clearInterval(myVar);
    document.querySelector("#secondDiv").style.backgroundColor="pink";
}
function ChangeColorSecondDiv(){
    const newColor = colors[Math.floor(Math.random()*5)];
    document.querySelector("#secondDiv").style.backgroundColor=newColor;
}
function startStop(){
    console.log(data)
    if(data.status===true){
        startChange()
        data.status=false;
    }else{
        stopChange();
        data.status=true;
    }
}
const data = {
    "status": false
  }
const buttonToogle=document.querySelector("#toogle");
buttonToogle.addEventListener("click",startStop);
const button2=document.querySelector("#secondButton");
button2.addEventListener("click", startChange);
const button3=document.querySelector("#thirdButton");
button3.addEventListener("click", stopChange);

