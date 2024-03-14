// Fibonacci code challenge
// fibonacci sequence 0,1,1,2,3,5,8,13,21,34,55,89,144...
//where every number is the sum of the two previos ones.

function fibonacciGenerator(n){
    let output = [];
    if(n == 1){
        output = [0];
    } else if(n == 2){
        output = [0,1];
    } else {
        output = [0,1];
        for (let i=2; i<n; i++){
        output.push(output[output.length-2] + output [output.length-1]); //1
        }
    }
    return output;
}

output = fibonacciGenerator(4);
console.log(output)