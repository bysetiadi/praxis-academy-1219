function f() {
    try {
      console.log('start');
      throw new Error("an error");
    } catch (e) {
      // ...
      if("can't handle the error") {
        throw e;
      }
  
    } finally {
      console.log('cleanup!')
    }
  }
  
  f();