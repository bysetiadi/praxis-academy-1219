function* countAppleSales () {
    var saleList = [3, 7, 5];
    for (var i = 0; i < saleList.length; i++) {
      yield saleList[i];
    }
  }

var appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); 
console.log(appleStore.next()); 
console.log(appleStore.next()); 
console.log(appleStore.next()); 
