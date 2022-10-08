let msg = alert("You must be 18 years old to vote")
let age = prompt ("What is your age?");
let name = prompt("What's your name?","");
if(age>=18){
    alert(`Welcome ${name}`);
}
else{
    alert(`Sorry! ${name},you must be atleast 18 years old to Vote`);
}