console.log("here goes MAP");
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("mapDiv"), {
    center: { lat: 44.425792, lng: 20.684307957678218 },
    zoom: 8,
  });
}
const form = document.querySelector("#userForm");
const input = document.querySelector("#userName");
const nameList = document.querySelector("#userList")

form.addEventListener("submit", function(e){
    e.preventDefault();
    const newLI = document.createElement("LI");
    newLI.innerText = input.value;
    nameList.append(newLI);
    input.value = "";
}) 

