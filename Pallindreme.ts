let str = "Archana";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
}

if (str === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}

console.log("Original String: " + str);
console.log("Reversed String: " + reversed);