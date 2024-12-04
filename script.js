// Event listener for the Encrypt button
document.getElementById("encrypt").addEventListener("click", () => {
    const text = document.getElementById("text").value.toUpperCase();
    const key = parseInt(document.getElementById("key").value);
    if (text && !isNaN(key)) {
        document.getElementById("output").textContent = caesarCipher(text, key);
    } else {
        document.getElementById("output").textContent = "Please enter valid input and key.";
    }
});

// Event listener for the Decrypt button
document.getElementById("decrypt").addEventListener("click", () => {
    const text = document.getElementById("text").value.toUpperCase();
    const key = parseInt(document.getElementById("key").value);
    if (text && !isNaN(key)) {
        document.getElementById("output").textContent = caesarCipher(text, -key);
    } else {
        document.getElementById("output").textContent = "Please enter valid input and key.";
    }
});

// Caesar Cipher function
function caesarCipher(text, shift) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return text
        .split("")
        .map((char) => {
            if (alphabet.includes(char)) {
                const oldIndex = alphabet.indexOf(char);
                const newIndex = (oldIndex + shift + 26) % 26; // Handle wrap-around
                return alphabet[newIndex];
            } else {
                return char; // Keep non-alphabet characters unchanged
            }
        })
        .join("");
}
