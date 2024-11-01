# Pig Latin Translator

This Node.js command-line application translates an English phrase into Pig Latin. It uses specific rules to handle vowel and consonant patterns, making it an educational tool for language processing with a fun twist!

## Features

- Translates individual words within a phrase into Pig Latin.
- Handles basic rules for words starting with vowels, single consonants, and consonant clusters.
- Simple command-line interface for easy usage.

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your computer. You can download it [here](https://nodejs.org/).

## Installation

1. **Clone or Download** the repository.
2. Open a terminal and navigate to the folder where the script is located.

## Usage

Run the script by providing a phrase as a command-line argument:

```bash
node pig_latin_translator.js "Your English phrase here"
```

### Examples

```bash
node pig_latin_translator.js "Hello world" 
# Output: "ellohay orldway"  
node pig_latin_translator.js "I love programming" 
# Output: "iway ovelay ogrammingpray"
```

If no phrase is provided, the script will prompt you to enter one:

```bash
# Output: "Please provide an English phrase to translate."
```

## Pig Latin Rules Implemented

1. **Words beginning with a vowel**: Add "way" to the end of the word.
    
    - **Example**: `apple` becomes `appleway`
2. **Words starting with a single consonant followed by a vowel**: Move the initial consonant to the end and add "ay".
    
    - **Example**: `hello` becomes `ellohay`
3. **Words starting with two consonants**: Move the first two consonants to the end and add "ay".
    
    - **Example**: `glove` becomes `oveglay`
4. **Other cases**: If a word doesn’t match any rule, it remains unchanged.
    

## Code Structure

- **translateToPigLatin**: Core function handling the Pig Latin conversion.
- **Command-line Input**: The script uses command-line arguments for input and outputs the translated phrase to the console.

## Contributing

1. Fork this repository.
2. Create a new branch with a descriptive name (`feature/additional-rules`).
3. Commit changes and open a pull request.

## License

This project is open-source and available under the MIT License.