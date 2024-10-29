#!/usr/bin/node

// Check if a phrase is provided as input
if (process.argv.length <= 2) {
  console.log("Please provide an English phrase to translate.");
  return;
}

// Extract the phrase from process.argv
const inputPhrase = process.argv.slice(2).join(" ");

// Vowels and consonants to define Pig Latin rules
const vowels = "aeiou";
const consonants = "bcdfghjklmnpqrstvwxyz";

// Function to translate a word to Pig Latin
function translateToPigLatin(word) {
  word = word.toLowerCase(); // Convert word to lowercase for consistency
  if (vowels.includes(word[0])) {
    // If the word starts with a vowel, add "way"
    return word + "way";
  } else if (
    consonants.includes(word[0]) &&
    vowels.includes(word[1])
  ) {
    // If word starts with a consonant followed by a vowel
    return word.slice(1) + word[0] + "ay";
  } else if (
    consonants.includes(word[0]) &&
    consonants.includes(word[1])
  ) {
    // If word starts with two consonants
    return word.slice(2) + word.slice(0, 2) + "ay";
  } else {
    // Default case for any word not fitting the above rules
    return word;
  }
}

// Split the input phrase into words, translate each, and join back
const translatedPhrase = inputPhrase
  .split(" ")
  .map(translateToPigLatin)
  .join(" ");

// Output the translated phrase
console.log(translatedPhrase);

