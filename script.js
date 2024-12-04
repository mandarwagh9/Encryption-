// Event listener for the Encrypt button
document.getElementById("encrypt").addEventListener("click", () => {
    const text = document.getElementById("text").value.toUpperCase(); // Convert to uppercase
    const key = parseInt(document.getElementById("key").value); // Parse the key as an integer
    if (text && !isNaN(key)) {
        document.getElementById("output").textContent = caesarCipher(text, key);
    } else {
        document.getElementById("output").textContent = "Please enter valid input and key.";
    }
});

// Event listener for the Decrypt button
document.getElementById("decrypt").addEventListener("click", () => {
    const text = document.getElementById("text").value.toUpperCase(); // Convert to uppercase
    const key = parseInt(document.getElementById("key").value); // Parse the key as an integer
    if (text && !isNaN(key)) {
        document.getElementById("output").textContent = caesarCipher(text, -key); // Use negative key for decryption
    } else {
        document.getElementById("output").textContent = "Please enter valid input and key.";
    }
});

// Caesar Cipher function
function caesarCipher(text, shift) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return text
        .split("") // Split text into characters
        .map((char) => {
            if (alphabet.includes(char)) {
                const oldIndex = alphabet.indexOf(char); // Get current letter's index
                const newIndex = (oldIndex + shift + 26) % 26; // Shift the index with wrap-around
                return alphabet[newIndex]; // Get the new letter
            } else {
                return char; // Return non-alphabetic characters unchanged
            }
        })
        .join(""); // Join the array back into a string
}
