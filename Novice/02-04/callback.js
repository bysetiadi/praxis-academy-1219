function main(params1,params2,calback) {
    console.log(params1, params2);
    calback()    
}

function myCallback() {
    console.log('hello callback')    
}

main(1,2,myCallback)