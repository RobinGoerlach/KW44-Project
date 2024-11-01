## Pig Latin Translator Script

### Overview

This Node.js script translates an English phrase into Pig Latin based on a set of defined linguistic rules. Each word in the phrase is transformed following traditional Pig Latin conventions. The script handles phrases provided via command-line arguments and returns the Pig Latin equivalent.

### Requirements

- **Node.js**: Ensure Node.js is installed to execute this script. ([Download Node.js](https://nodejs.org/))
- **Usage**: Run the script from a terminal, providing the phrase to translate as arguments.

### Usage Example

```bash
node pig_latin_translator.js "Hello world"
```

### Input and Output

1. **Input**: An English phrase passed via command-line arguments.
2. **Output**: A translated phrase in Pig Latin format.

**Example**:

```bash
node pig_latin_translator.js "Hello world" # Output: "ellohay orldway"
```

### Code Structure

#### 1. Argument Validation

The script first checks if arguments are provided:

```javascript
if (process.argv.length <= 2) {
   console.log("Please provide an English phrase to translate.");   
   return;
}
```

If no phrase is provided, the script exits with a prompt.

#### 2. Constants and Setup

- **inputPhrase**: Retrieves and joins command-line arguments into a single string.
- **Vowels and Consonants**: Defined for rule application in the translation function.

```javascript
const vowels = "aeiou"; 
const consonants = "bcdfghjklmnpqrstvwxyz";
```

#### 3. `translateToPigLatin` Function

This core function translates a word based on the following rules:

- **Starts with a Vowel**: Add "way" to the end of the word.
    
```javascript
if (vowels.includes(word[0])) {
  return word + "way"; 
}
```
    
- **Starts with One Consonant Followed by a Vowel**: Move the initial consonant to the end and add "ay".
    
```javascript
else if (consonants.includes(word[0]) && vowels.includes(word[1])) {   
  return word.slice(1) + word[0] + "ay"; 
}
```
    
- **Starts with Two Consonants**: Move the first two consonants to the end and add "ay".
    
```javascript
else if (consonants.includes(word[0]) 
		 && consonants.includes(word[1])) {
   return word.slice(2) + word.slice(0, 2) + "ay"; 
}
```
    
- **Default Case**: If a word doesn’t fit any rule, return it unchanged.
    

#### 4. Phrase Translation and Output

Each word is processed through `translateToPigLatin`, and the transformed phrase is output:

```javascript
const translatedPhrase = inputPhrase.split(" ")
  .map(translateToPigLatin)
  .join(" "); 
console.log(translatedPhrase);
```

---

### Error Handling

- **No Input Provided**: The script checks if the command-line argument count is adequate and prompts the user if not.
- **Edge Cases**: Words that do not match any defined rule return unchanged.

### Potential Improvements

1. **Extended Vowel Handling**: Enhance with support for additional vowel variations.
2. **Complex Consonant Blends**: Add rules for common English consonant clusters.
3. **Punctuation**: Adapt logic to handle punctuation marks within or at the end of words.

### Author Notes

This script is designed for educational purposes, focusing on language transformation logic. It can be further customized based on the specific Pig Latin rules required.

## License

This project is available under the MIT License. See the LICENSE file for more details.