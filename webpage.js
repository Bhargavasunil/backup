/*document.body.style.backgroundColor='orange';
setInterval(()=>document.body.style.backgroundcolor='Red',3000);

//creating object
let varObject = new Object();
varObject = {
     Maths : 90,
     Telugu:91,
     Social:97,
     Science:99,
     Hindi:89,
     English:73,
}

let ques = prompt("Which subject marks you would like to know?","English");
alert(varObject[ques]);

//duplicate the above object
//step-1 
          //create a new object
              let varObjectClone = new Object();
              for(let key in varObject){
                     varObjectClone[key] = varObject[key];
                     console.log(varObjectClone); 
              }

let user = {
       name:'Komaram',
       movieName : {
           nameofMovie:'RRR',
           Actor:'NTR',
       }
}
 const courses = new object();
courses = {
       java:10,
       javascript:55,
       nodejs:5,
       php:15,
}

const keys = object.keys(courses);
console.log(keys)*/
const animals = {
       tiger: 1,
   
       cat: 2,
   
       monkey: 3,
   
       elephant: 4
   };
   
   // iterate over object values
   
   Object.values(animals).forEach(val => console.log(val));


   const user = {
       name : 'sunil',
       company : 'CF',
       domain: 'salesforce',
   };
   Object.values(user).forEach(val=>console.log(val));

   const items ={
       'first' : new Date(),
       'second':2,
       'third':'test'
   };
   
   let array = [1,10,20];
   let mapreturnarray=array.map(function(currentItem,index,array){
        return currentItem*2;
   });
   console.log(array);
   console.log(mapreturnarray);

   let varArray = [1,2,3,4];
   let varResult=varArray.find(function(currentItem,index,array){
       return currentItem>2;
   })
   console.log('find'+varArray);
   console.log(varResult);

   let undef = varArray.find(function(currentItem,index,array){
           return currentItem>5;
           console.log()
   })
   console.log(undef);
//every() -- array method

 let array2=[33,32,18,5];
 let varOutput = array2.every(function(currentItem,index,array){
       return currentItem>18;
 })
   console.log(varOutput);

   var names=['nikhil','Ajay','zen'];
   console.log(names.sort());

   let element = document.querySelector('h1');
   console.log(element)
   
   let element2 = document.querySelector('div');
   console.log(element2.innerText);