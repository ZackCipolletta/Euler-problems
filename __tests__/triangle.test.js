import { multiplesOf3and5, fibSequenceBelow4Mil } from "./../src/eulerProblems";


// describe('multiplesOf3and5', () => {

//     test('should return an array containing 3, 6 and 9', () => {
//         multiplesOf3and5();
//         expect(multiplesOf3and5()).toEqual(233168);
//     });
//   });

describe('fibSequenceBelow4Mil', () => {

  test('should return and array of Fibonacci numbers 1 to 3', () => {
    fibSequenceBelow4Mil();
    expect(fibSequenceBelow4Mil()).toEqual(44);
  });

});