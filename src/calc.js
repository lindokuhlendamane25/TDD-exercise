
//ADDING 2 OR MORE NUMBERS
function addMore(num1 , num2, num3){
    
    var sum = 0;
    
    for(a = 0; a< arguments.length; a++){
        
        sum+= arguments[a];
    }
    return sum;
}

//MULTIPLYING 2 OR MORE NUMBERS
function multiplyUnlimited(num1, num2, num3){
    var product = 1;
    
    for(var a = 0; a< arguments.length; a++){
        product*= arguments[a];
    }
    return product;
}
