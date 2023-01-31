import { multiplesOf3and5, fibSequenceBelow4Mil, palindromicNumbers, multiplyAllNumbers} from "./../src/eulerProblems";


describe('multiplesOf3and5', () => {

  test('should return an array containing 3, 6 and 9', () => {
    multiplesOf3and5();
    expect(multiplesOf3and5()).toEqual(233168);
  });
});

describe('fibSequenceBelow4Mil', () => {

  test('should return and array of Fibonacci numbers 1 to 3', () => {
    fibSequenceBelow4Mil();
    expect(fibSequenceBelow4Mil()).toEqual(4613732);
  });
});

describe('palindromicNumbers', () => {

  test('should return a value of true or false depending on if a provided is a palindrome', () => {
    expect(palindromicNumbers(900009)).toBeTruthy();
  });
});

describe('multiplyAllNumbers', () => {

  test('should return an array of the product of 100 and every number from 100 - 110', () => {
    expect(multiplyAllNumbers()).toEqual([10000, 10100, 10200, 10300, 10400, 10500, 10600, 10700, 10800, 10900, 11000]);
  });
});