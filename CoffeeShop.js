var foodItems=['coffee','tea','sandwich','Coke'];
var lastItem = foodItems.slice(-1);
console.log(lastItem)
function placeOrder(item){
     return new Promise(function(resolve,reject){
           if(foodItems.includes(item)){
                 resolve('Your order is accepted and your order number is');
           }
           else{
               reject('Sorry! we cannot place your order');
           }
     });
}
function toGenerateOrderNumber(order){
    return new Promise((resolve)=>{
        resolve(
            randomNumber() 
        ) 
    })
 }
 var n=0;
function randomNumber(){
    n=n+1;
    return n;
}

//order-1
placeOrder('coffee').then(function(result){
    console.log('order-1')
    let orderProcessed= toGenerateOrderNumber(result)
    return orderProcessed;
}).then(function(orderNumber){
    window.setTimeout(function() {console.log(orderNumber)}, 5000);
    
      return orderNumber
}).catch(function(itemRejected){
    console.log(itemRejected)
})

//order-2
placeOrder('tea').then(function(result){
    console.log('order-2')
    let orderProcessed= toGenerateOrderNumber(result)
    return orderProcessed;
}).then(function(orderNumber){
    console.log(orderNumber)
      return orderNumber
}).catch(function(itemRejected){
    console.log(itemRejected)
})


