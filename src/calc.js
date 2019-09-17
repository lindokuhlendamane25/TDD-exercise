
//adds two numbers
function add(num1, num2){
    return num1 + num2;
}


//multiplies two numbers
function multiply(num1, num2){
    return num1 * num2;
}

//ADDING 2 OR MORE NUMBERS
function addMore(){
    
    var sum = 0;
    
    for(a = 0; a< arguments.length; a++){
        
        sum+= arguments[a];
    }
    return sum;
}

//MULTIPLYING 2 OR MORE NUMBERS
function multiplyUnlimited(){
    var product = 1;
    
    for(var a = 0; a< arguments.length; a++){
        product*= arguments[a];
    }
    return product;
}
