/** fizzBuzz
 * Write a program that prints the numbers from 1 to 100.
 * For multiples of 3 print Fizz
 * For multiples of 5 print Buzz
 * For multiples of 3 and 5 print FizzBuzz
 */

function bruteFizz(n: number): void {
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
bruteFizz(100);
