function checkData() {
    if (document.form1.treeChar.value.length == 3) {
    return true;
  }else {
    alert('Masukkan tiga karakter dengan tepat. ' + document.form1.treeChar.value.length + ' tidak valid');
    return false;
  }
}

// console.log(checkData());
