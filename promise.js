let myPromise= new Promise((resolve,reject)=>{
    let a = 4
    let b = 5
      setTimeout(()=>{
             if(a===b){
                 resolve('a is equal to b')
             } else{
                reject('a is not equal to b')
             }
      },5000)
})

myPromise.then(function(result){
       //then and resolve both are related.
       //once the promise resolved it passes the data to then method
       //fullfillment state
       console.log(result)
 }).catch(function(error){
      //if promise is rejected then we deal with the CATCH method
      //Rejected state
      console.log(error)
 })

 //Your promise will get settled