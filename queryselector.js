let element = document.querySelector('div');
console.log(element.innerText);
element.style.color='green';

let varDiv = document.querySelectorAll('div');
console.log(varDiv);
Array.from(varDiv).forEach(function(item){
    item.style.color='orange';
});
setInterval(() => {
    document.querySelector('div').style.color='green'
}, 3000);

let msg = 'firstfunction called by the click event';
function firstfunction(){
   console.log(`${msg}`);
};
//addEventLister
 //let eventcap = document.querySelector('button');
 //eventcap.addEventListener('click',firstfunction)

 function handler(){
    document.addEventListener("mousemove",fun);
 }
 function fun(){
    document.querySelector('.demo').innerHTML = Math.random();
 }
 function removeHandler(){
    document.removeEventListener("mousemove",fun);
 }

 function bn(){
    let x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
 }

 let user={
    name:'Durga rao',
    Role:'Developer',
 }

console.log(Object.keys(user));
Object.values(user).forEach(val=>console.log(val));