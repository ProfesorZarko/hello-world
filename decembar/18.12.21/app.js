// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const listItemGenerator=text=>"<li>" + text + "</li>" ;
const form = document.querySelector('form');
form.addEventListener("submit",function(e){
    e.preventDefault();
    const quantity = document.querySelector('#qty').value;
    const product=document.querySelector('#product').value;
    const list = document.querySelector("#list");
    const newListItem = document.createElement("LI");
    newListItem.innerText=quantity + product ;
    list.append(newListItem);
    //list.innerHTML +=listItemGenerator(quantity + product);
    document.querySelector('#qty').value="";
    document.querySelector('#product').value="";
});