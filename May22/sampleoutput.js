//whats is output.

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
   console.log(i);
  }
  setTimeout(log, 100);
}

//3,3,3  why?