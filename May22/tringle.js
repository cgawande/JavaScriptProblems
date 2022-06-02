// wright a program to draw pattern

let n = 4;
out = "";
for (let row = 1; row <= n; row++) {
    for (let col = row; col < n; col++) {
        out += " "; // for space 
    }
    for (let col = 1; col <= row; col++) {
        out += "*" //for half triangle
    }
    for (col = 1; col < row; col++) {
        out += "*" //for other haalf triangle
    }
    out += "\n";

}
console.log(out)