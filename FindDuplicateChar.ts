let Str: string = "Archana Mohini".toLowerCase();

let duplicatechar = new Map<string, number>();

for (let ch of Str) {
    if (/[a-z]/.test(ch)) {
        duplicatechar.set(ch, (duplicatechar.get(ch) ?? 0) + 1);
    }
}
for (let [key, value] of duplicatechar) {
    if (value > 1) {
        console.log(key + "  : " + value);
    }
}

