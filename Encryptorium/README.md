`# Caesar Cipher CLI Script

This is a command-line Node.js script that performs a Caesar Cipher encryption on a given text by shifting each letter by a specified number of positions within the alphabet.   
## Table of Contents
- [Overview](#overview) 
- [Requirements](#requirements) 
- [Installation](#installation) 
- [Usage](#usage) 
- [Examples](#examples) 
- [How It Works](#how-it-works) 
- [License](#license)  

 ## Overview
The Caesar Cipher is a simple substitution cipher that shifts each letter in the text by a fixed number of positions. This script is designed for educational purposes and demonstrates basic text manipulation in JavaScript.  
## Requirements

- [Node.js](https://nodejs.org/) (version 10 or higher)  
## Installation
1. **Clone or download this repository**:    ```bash    git clone https://github.com/your-username/caesar-cipher.git    cd caesar-cipher`

2. **Navigate to the directory** where the script is located:
    
```bash
    cd path/to/caesar-cipher
```
    
3. **Make the script executable** (optional, for Unix-based systems):
    
```bash
chmod +x caesarCipher.js
```
    

## Usage

To run the Caesar Cipher script, use the following command:

```bash
node caesarCipher.js <phrase> <shift>
```

- `<phrase>`: The phrase you want to encrypt (required).
- `<shift>`: The number of positions to shift each letter in the phrase (required).

### Command-Line Arguments

- **Phrase**: Any string of text, which can include letters, spaces, and punctuation. Only alphabetic characters are shifted; all other characters remain the same.
- **Shift**: A positive or negative integer to specify the number of shifts in the alphabet (e.g., `3` shifts letters forward by three positions).

## Examples

Encrypt a simple phrase with a positive shift:

```bash
node caesarCipher.js "Hello World" 3 # Output: Khoor Zruog
```

Encrypt with a negative shift (shifts letters backward):

```bash
node caesarCipher.js "Khoor Zruog" -3 # Output: Hello World
```

Use a large shift that wraps around the alphabet:

```bash
node caesarCipher.js "abc XYZ" 29 # Output: def ABC
```

## How It Works

The script:

1. **Validates Input**: Checks if both the `phrase` and `shift` values are provided.
2. **Normalizes Shift**: Handles shifts larger than the 26-letter alphabet by using `shift % 26`.
3. **Encrypts Text**: For each letter:
    - Shifts letters within their respective case (upper or lowercase).
    - Leaves non-alphabet characters unchanged.
4. **Outputs the Result**: The encrypted phrase is printed to the console.

## License

This script is released under the MIT License. Feel free to use, modify, and distribute for educational purposes.

This README provides a comprehensive guide on setup, usage, and examples for your Caesar Cipher