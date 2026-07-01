let str = "Archana Mohini";

let words = str.split(" ");

let result = "";

for (let word of words) {

    let reverse = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reverse += word[i];
    }

    result += reverse + " ";
}

console.log(result.trim());