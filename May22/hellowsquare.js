// write a programm to print hellow square pattern

let n = 5;
let output = "";

for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {
        if (col == 1 || col == n || row == 1 || row == n) {
            output += "* ";

        } else { output += "  "; }

    }
    output += "\n";
}
console.log(output);