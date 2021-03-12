function fizzBuzz(value1,value2){
    let returnValue ="";
    for(let i =1;i<=100;i++){ //adds up until the number reaches 100
        if(i%value1==0 && i%value2==0){ //if the number is divisible by by both 3 and 5 return fizzbuzz
            returnValue += "fizzbuzz ";
        
        }
        else if (i%value1 == 0){ //if the number is divisble by 3 return fizz
            returnValue += "fizz ";
        }
        else if (i%value2 == 0){ //if the number is divisble by 5 return buzz
            returnValue += "buzz ";
        }
        else returnValue += i + " "; //if the number isn't divisble by 3 or 5 return just the number
    }
    return returnValue;

}
function buzzIt(){ //links the functions to the rest of the html page
    let output=" ";
    let value1 = document.getElementById("fizzValue").value;
    let value2 = document.getElementById("buzzValue").value;
    output= fizzBuzz(value1,value2);
    document.getElementById("results").innerHTML = output;
}


/*NOTE TO SELF: Work on figuring out how to make a grid in JS w/ 100 squares.
User clicks on each square and reveals the number (or fizz, buzz, fizzbuzz) 
beneath the square and then square flips back over. Maybe do some sort of 
animation when hit on fizzbuzz???*/