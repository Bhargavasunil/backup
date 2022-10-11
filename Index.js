let x = 1;
x= -x;
//alert(x);

/*let question = prompt("In which year was ECMAScript-2015 specification published?",[""]);
let cond = (question==2015);
if(cond){
    alert('You guessed it right');
}
else{
    alert('Try again');
}
let question2 = prompt('Are you a Javascript developer?');
let result = 'question2 == yes'? 'welcome developer': 'welcome Admin';
alert(result);*/
//let age =prompt('what is your age?',[""]);
//let accessAllowed = age>18 ? true:false;
//alert(accessAllowed);

let arr=['data1','data2','data3'];
console.log(arr);
console.log(arr[0]);

//object
let obj = {
    'name' : 'Sunil',
    'age'  : 27,
    'full name' :'Bhargava naga pavan sunil'
}

console.log(obj["full name"]);
console.log(obj.name);

//adding  a new property to the obj
obj.company = 'Antra info pvt ltd';
console.log(obj);

//expanding string by using spread operator
 
 let varString = "Avengers";
 let varStringList = [...varString];
 console.log(varStringList);
 