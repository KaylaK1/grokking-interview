/**
 * input: lowercase English-alphabet letters
 * output: returns the index of the strings first non-repeating character
 * or -1
 */
 function firstNonRepeatingCharacter(string) {
	const hashBoi = {};

	// for (const character of string) {
	// 	if (!(character in hashBoi)) hashBoi[character] = 0;
	// 	hashBoi[character]++;
	// }
	for (const character of string) {
		if (!(character in hashBoi)) {
			hashBoi[character] = 0;
		} else {
			hashBoi[character]++;
		}
	}

	for (let idx = 0; idx < string.length; idx++) {
		const character = string[idx];
		if (hashBoi[character] === 0) return idx;
	}

  return -1;
}

console.log(firstNonRepeatingCharacter("aabc"));
