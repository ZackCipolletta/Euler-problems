// export function multiplesOf3and5() {
//   let arr1 = [];
//   for(let i = 3; i < 1000; i+=3) {
//     arr1.push(i);
//   }
//   for(let i = 5; i < 1000; i+=5) {
//     if(!arr1.includes(i)) {
//       arr1.push(i);
//     }

//   }
//   let x = 0;
//   arr1.forEach(element =>{
//     x += element;
//   });
//   console.log(arr1);
//   return x;

// }


export function fibSequenceBelow4Mil() {
  let fibArray = [1, 2, 3];
  let fibSum = 0;
  while (fibArray[fibArray.length-1] < 4000000) {
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
  console.log(fibArray);
  return fibSum;
}
