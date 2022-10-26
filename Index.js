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
 //combining arrays with the help of spread operator
  
 let arr1  = ['data1','data2'];
 let arr2  = ['data3','data4'];
 let arr3 = [...arr1,...arr2];
 console.log(arr3);

 //combining objects

 let obj1 ={name:'Teja',age:25,skills:'salesforce'}
 let obj2 = {name:'Nagendra',age:29,Experience:4}
 let obj3 = {...obj1,...obj2}
 console.log(obj3);

 //shallow copy

  let arr10 = ['x','y','z'];
  arr10.push(20);
  console.log(arr10);               
  var arr11 = arr10;
  arr11.push('Nag');
  console.log(arr10);
  console.log(arr11);

  let arr4 = ['a','b','c'];
  let arr5 = [...arr4];
  console.log(arr5);
  arr5.push('d','e');
  console.log(arr4);
  console.log(arr5)
  //de-structuring 

  let erarr = ['Thor','thunder']
  let[name,power]=erarr;
  console.log(name);
  console.log(power);

  let age = prompt('what is your age?',[""]);
  let resvariable = age>18? true:false;
  alert(resvariable);
  
  let empId = prompt('do you have your emp Id?','')
  let res = empId == 'yes'?true:false;
  alert(res);
