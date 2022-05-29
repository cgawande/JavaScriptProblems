let n = 5;
let output = "";

for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
        output += "* ";
    }
    output += "\n";
}
console.log(output);