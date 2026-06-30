let Name: string = "Archana Mohini";

let name1 = Name.toLowerCase();
// console.log(name1);
let charCount = new Map<string, number>();

for (let ch of name1) {
  if (/[a-z]/.test(ch)) {
    charCount.set(ch, (charCount.get(ch) || 0) + 1);
  }
}

for(let[key,value] of charCount){

if(value>1){
console.log(key + "  : " + value);

}

}
