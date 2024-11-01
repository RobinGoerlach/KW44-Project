`# Caesar Cipher Script Documentation  
## Overview 
This script performs a Caesar Cipher encryption on a given text. A Caesar Cipher shifts each letter in a string by a specified number of positions within the alphabet, while non-alphabetical characters remain unaffected.  

## Usage

To run the script, use the following syntax:  
```bash 
node caesarCipher.js <phrase> <shift>
```

- `<phrase>`: The phrase you want to encrypt.
- `<shift>`: The number of positions by which each letter in the phrase will be shifted.

### Example

```bash
node caesarCipher.js "Hello World" 3
```

This command will output an encrypted phrase with each letter shifted three positions forward in the alphabet.

## Code Explanation

### Input Validation

The script expects at least three command-line arguments:

- The first argument is the script file name.
- The second argument is the `phrase`.
- The third argument is the `shift` value.

If the `shift` value is not provided or is invalid, the script outputs an error and stops.

```javascript
if (process.argv.length <= 3) {
   console.log("Usage: node caesarCipher.js <phrase> <shift>");      
   return;
}
```

### Parsing and Normalizing the Shift Value

The `shift` value is parsed as an integer and then normalized within the 26-letter alphabet range:

```javascript
let shift = parseInt(process.argv[3], 10);
if (isNaN(shift)) {
  console.log("Please provide a valid number for shift.");
  return;
}  // Normalize shift value to handle large shifts shift = shift % 26;
```

### `caesarCipher` Function

The `caesarCipher` function encrypts the phrase using the specified `shift`. Each character in the `text` is evaluated:

- If it’s an alphabet character (upper or lower case), it’s shifted.
- Non-alphabet characters remain the same.

1. **Upper or Lower Case Check**: Determines the ASCII code base (`A` = 65 or `a` = 97).
2. **New Character Calculation**: Shifts the character code within the alphabet range.
3. **Character Transformation**: Converts the shifted code back to a character.

```javascript
function caesarCipher(text, shift) {
  return text
    .split("")
    .map((char) => {
       if (/[a-zA-Z]/.test(char)) {
         const isUpperCase = char === char.toUpperCase();
         const baseCode = isUpperCase ? 65 : 97; 
         // ASCII code for 'A' or 'a'
         // Calculate new character code
         const newCharCode =
           ((char.charCodeAt(0) - baseCode + shift + 26) % 26) + baseCode;
         return String.fromCharCode(newCharCode);
       }
       return char; // Non-alphabetical characters remain the same
    })
    .join(""); 
}
```

### Execution

After defining the function, the script encrypts the input `phrase` with the normalized `shift` and outputs the result:

```javascript
const encryptedPhrase = caesarCipher(phrase, shift); console.log(encryptedPhrase);
```

### Edge Cases

1. **Large Shift Values**: Normalizes shift values larger than 26 by using `shift % 26`.
2. **Non-Alphabet Characters**: Leaves non-alphabet characters unchanged.

## Additional Notes

- The Caesar Cipher is a simple substitution cipher that is primarily used for educational purposes and is not suitable for secure encryption in practice.

## License

This project is available under the MIT License. See the LICENSE file for more details.