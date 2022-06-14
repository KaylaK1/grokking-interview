/**
 * input: lowercase English-alphabet letters
 * output: returns the index of the strings first non-repeating character
 * or -1
 */
 function firstNonRepeatingCharacter(string) {
	const hashMap = {};

	// for (const character of string) {
	// 	if (!(character in hashMap)) hashMap[character] = 0;
	// 	hashMap[character]++;
	// }
	for (const character of string) {
		if (!(character in hashMap)) {
			hashMap[character] = 0;
		} else {
			hashMap[character]++;
		}
	}

	for (let idx = 0; idx < string.length; idx++) {
		const character = string[idx];
		if (hashMap[character] === 0) return idx;
	}

  return -1;
}

console.log(firstNonRepeatingCharacter("aabc"));
