// Callback sebagai Injeksi sebuah function
function calculate(x, y) {
    result = x + y
    return result    
}

console.log(calculate(3, 2));

// next level
a = calculate(2000,4000, function (x,y) {return "$ " + (x + y)})
b = calculate(7000,2000, function (x,y) {return "Rp " + (x * y)})
console.log(a);
console.log(b);

// Callback sebagai Event Listener
