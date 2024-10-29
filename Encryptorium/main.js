#!/usr/bin/node

// Check for correct input
if (process.argv.length <= 3) {
  console.log("Usage: node caesarCipher.js <phrase> <shift>");
  return;
}

// Extract phrase and shift from command line arguments
const phrase = process.argv[2];
let shift = parseInt(process.argv[3], 10);

if (isNaN(shift)) {
  console.log("Please provide a valid number for shift.");
  return;
}

// Normalize shift value to handle large shifts
shift = shift % 26;

// Caesar Cipher function
function caesarCipher(text, shift) {
  return text
    .split("")
    .map((char) => {
      if (/[a-zA-Z]/.test(char)) {
        const isUpperCase = char === char.toUpperCase();
        const baseCode = isUpperCase ? 65 : 97; // ASCII code for 'A' or 'a'
        // Calculate new character code
        const newCharCode =
          ((char.charCodeAt(0) - baseCode + shift + 26) % 26) + baseCode;
        return String.fromCharCode(newCharCode);
      }
      return char; // Non-alphabetical characters remain the same
    })
    .join("");
}

// Encrypt and output the phrase
const encryptedPhrase = caesarCipher(phrase, shift);
console.log(encryptedPhrase);

