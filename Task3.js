
const [biggerNumber , numberSquares] = require(`./Task1and2`)
const fs = require('fs');//file system
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('You will enter data for two functions. Please press ENTER:\n', userInput => {
rl.question('Please input first number to compare ', function(A) { 
    rl.question('Please input second number to compare ', function(B) {
        rl.question('Thank you. Next function shows how many squares can fit in a N * N square grid. Please input N:\n', function(N) {
 let result = biggerNumber(parseInt(A), parseInt(B));
 console.log(`Biggest number is: ${result}`);
 fs.writeFile(`./results.txt`, `biggerNumber between ${A} and ${B} is ${result}`,()=>{
    console.log('file was made');});
result = numberSquares(parseInt(N));
console.log(`Amount of squares is: ${result}`);
fs.appendFile(`./results.txt`, `\nAmount of squares in ${N} x ${N} grid is ${result}`,()=>{
    console.log('file was made2');});
     rl.close();
   })});
});
});

