/**
 * Given n names and phone numbers, assemble a phone book that maps
 * friends' names to their respective phone numbers.
 *
 * Given q number of names to query, print the associated entry from your phone book
 * on a new line in form: name=phoneNumber, if name not found print: Not found
 *
 * Input:
 * parameters: (input)
 * phone numbers are 8 digits?
 * 3 <- first line always denotes the number of entries in phone book
 * sam 99912222
 * tom 11122222
 * harry 11122298
 * sam <-- what follows after n entries are q queries to lookup
 * edward
 *
 * Output:
 * New line for each query
 * Not found
 * name=phoneNumber
 * phoneBook = {(sam, 12345678),}
 */

function processData(input) {
  const inputArray = input.split('\n');
  const numEntries = inputArray[0];
  const phoneBook = new Map();
  let index = 1; // keep track of index outside to use later

  // add numEntries to phoneBook
  while (index <= numEntries) {
    let [name, number] = inputArray[index].split(' ');
    phoneBook.set(name, number)
    index += 1;
  }

  // iterate until the end of the inputArray searching for names
  while (index < inputArray.length) {
    let name = inputArray[index];
    if (phoneBook.has(name)) {
      let number = phoneBook.get(name);
      console.log(name + '=' + number);
    } else {
    console.log('Not found');

    }
    index += 1;
  }
}

let text = "3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry";

processData(text);
