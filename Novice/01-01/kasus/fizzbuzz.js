function fizzBuzz(){
    var res = "";
    for(var i = 1; i <= 100; i++){
        res = "";
        if(i % 3 === 0){
            res += "Fizz";
        }
        if(i % 5 === 0){
            res += "Buzz";
        }
        console.log(res || i); 
    }
}
fizzBuzz();