export function multiplesOf3and5() {
  let arr1 = [];
  for (let i = 3; i < 1000; i += 3) {
    arr1.push(i);
  }
  for (let i = 5; i < 1000; i += 5) {
    if (!arr1.includes(i)) {
      arr1.push(i);
    }
  }
  let x = 0;
  arr1.forEach(element => {
    x += element;
  });
  return x;
}

export function fibSequenceBelow4Mil() {
  let fibArray = [1, 2, 3];
  let fibSum = 0;
  while (fibArray[fibArray.length - 1] < 4000000) {
    let x = fibArray.length;
    if (fibArray[x - 2] + fibArray[x - 1] >= 4000000) {
      break;
    } else {
      fibArray.push(fibArray[x - 2] + fibArray[x - 1]);
    }
  }
  fibArray.forEach(element => {
    if (Number.isInteger(element / 2))
      fibSum += element;
  });
  return fibSum;
}


export function multiplyAllNumbers() {
  let arrayForMultiply = [];
  let x = 100;
  let killMeArray = [];
  let palinDromeArray = [];
  for (let i = 100; i <= 999; i++) {
    arrayForMultiply.push(i);
  }
  for (let i = 100; i <= 999; i++) {
    let arrayMap = arrayForMultiply.map(element => element * x);
    x++;
    killMeArray.push(...arrayMap);
  }

  killMeArray.forEach(element => {
    if (palindromicNumbers(element)){
      palinDromeArray.push(element);
    }
  });
  console.log(palinDromeArray);
  palinDromeArray.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
});
  let values = Math.max(...palinDromeArray);
  console.log('values = ' + values);
  return palinDromeArray[palinDromeArray.length-1];
}




export function palindromicNumbers(someNum) {
  let numArray = someNum.toString().split('');
  let x = numArray.length;
  if (x === 5 && numArray[0] === numArray[x - 1] && numArray[1] === numArray[x - 2]) {
    return true;
  } else if (numArray.length === 6 && numArray[0] === numArray[x - 1] && numArray[1] === numArray[x - 2] && numArray[2] === numArray[x - 3]) {
    return true;
  }
}

