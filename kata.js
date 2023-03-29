function digitalRoot(n) {
  let numberLength = 0;
  let tempString = n;
  let count = 0;
  while (numberLength === 0){
    count = 0;
    tempString = tempString.toString().split("")
    for (const num of tempString){
      count += Number(num);
    }
    if (count >= 10){
      tempString = Number(count)
      numberLength = 0;

    }else{
      numberLength = 1;
    }
  }
  return count
}

console.log(digitalRoot(45887))