#!/usr/bin/node
/* ******************************************************** *
 * Simple pig latin clone by Robin Goerlach                 *
 * ******************************************************** */

const path = require("path");
const appPath = process.argv[1]; /* Assuming argv[1] contains the full path */
const appName = path.basename(appPath);
const argNo = process.argv.length;

const vowels = "aeiou"; /* Vowels to define Pig Latin rules */
const consonants = "bcdfghjklmnpqrstvwxyz"; /* consonants to define rules */

/* Translate a word to Pig Latin */
function translateToPigLatin(word) {
  word = word.toLowerCase(); // Convert lowercase for consistency
  if (vowels.includes(word[0])) {
    return word + "way"; // If the word starts with a vowel, add "way"
  } else if (consonants.includes(word[0]) && vowels.includes(word[1])) {
    return word.slice(1) + word[0] + "ay"; // If word starts with a consonant followed by a vowel
  } else if (consonants.includes(word[0]) && consonants.includes(word[1])) {
    return word.slice(2) + word.slice(0, 2) + "ay"; // If word starts with two consonants
  } else {
    return word; // Default case for any word not fitting the above rules
  }
}

/* Main Application translated phrase */
/* do we have enough aruments to start? */
/* TODO: remove magic no */
if (argNo <= 2) {
  console.log(
    "\nYou need to run ",
    appName,
    " with an argument \nPlease provide an English phrase to be translate.\n"
  );
  return 1;
}

/* Extract the phrase from process.argv */
const inputPhrase = process.argv.slice(2).join(" ");

/* Split the input phrase into words, translate each, and join back */
const translatedPhrase = inputPhrase
  .split(" ")
  .map(translateToPigLatin)
  .join(" ");

console.log(translatedPhrase);
return 0;
