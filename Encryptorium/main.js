#!/usr/bin/node
/* ******************************************************** *
 * Simple Caesar Cipher clone by Robin Goerlach             *
 * ******************************************************** */

const path = require("path");
const appPath = process.argv[1]; // Assuming argv[1] contains the full path
const appName = path.basename(appPath);
const argNo = process.argv.length;

/* Caesar Cipher function */
function caesarCipher(text, charShift) {
  return text
    .split("")
    .map((char) => {
      if (/[a-zA-Z]/.test(char)) {
        const isUpperCase = char === char.toUpperCase();
        const baseCode = isUpperCase ? 65 : 97; // ASCII code for 'A' or 'a'
        /* Calculate new character code */
        const newCharCode =
          ((char.charCodeAt(0) - baseCode + charShift + 26) % 26) + baseCode;
        return String.fromCharCode(newCharCode);
      }
      return char; /* Non-alphabetical characters remain the same */
    })
    .join("");
}

/* Main programm */
/* Do we have enough aruments to start? */
/* TODO: remove magic no */
if (argNo <= 3) {
  console.log(
    "You need to run ",
    appName,
    " with an arguments '<phrase>' <shift>\ne.g. ",
    appName,
    "'Hallo Welt' 3"
  );
  return;
}

/* Extract phrase and shift from command line arguments */
const phrase = process.argv[2];
let charShift = parseInt(process.argv[3], 10);

/* Do we have a number to shift characters */
if (isNaN(charShift)) {
  console.log("Please provide a valid number for shift.");
  return;
}

/* Normalize shift value to handle large shifts */
charShift = charShift % 26;

/* Encrypt and output the phrase */
const encryptedPhrase = caesarCipher(phrase, charShift);
console.log(encryptedPhrase);
