let firstDivElement = document.querySelector('div');
firstDivElement.style.color='Blue';

let allDivElements=document.querySelectorAll('div');
console.log(allDivElements);

//to change the elements color from the above static node list 
//we have to convert them to the array
Array.from(allDivElements).forEach(function(item){
    item.style.color='red';
})

//creating msg variable to show message when button is clicked
let msg='Hello Team'
function firstfunction(){
   alert(msg);
}

function handler(){
    document.addEventListener("mousemove",fun);
}
function fun(){
    document.querySelector(".demo").innerHTML = Math.random();
}
function removeHandler(){
    document.removeEventListener("mousemove",fun);
}
function bn(){
let firstName = document.getElementById('fname');
 firstName.value=firstName.value.toUpperCase();
}