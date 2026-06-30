"use strict";
let Str = "Archana Mohini";
Str = Str.toLowerCase();
let duplicateChar = new Set();
for (let ch of Str) {
    if (/[a-z]/.test(ch)) {
        duplicateChar.add(ch);
    }
}
let result = "";
for (let ch of duplicateChar) {
    result += ch;
}
console.log(result);
