var salesTax = .06;

//example of a pure function
function add(a, b){
    return a+b;
}

//Why is this impure?
function calculateFinalBill(items){
    let totalSum = 0;

    for(let i = 0; i < items.length; i++){
        totalSum += items[i].price;
    }

    return totalSum * (1 + salesTax);
}

//Is this a pure function?
function processPayment(payment, cart){
    let totalAmount = calculateFinalBill(cart.items);

    if(payment < totalAmount){
        console.log('Payment is insufficient')
    }
    else{
        console.log(`Your change is ${payment - totalAmount}`);
    }
}
