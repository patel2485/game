// first Fizz buzz game
console.log("Welcome to the Fizz Buzz Game!");
let  num = 1;
let  result = "";
while (num <= 100) {
    if(num % 3 ===  0 && num % 5 === 0){
        result = "FizzBuzz";
    } else if (num % 3 === 0 ) {
         result= "Fizz" ;
    }else if (num % 5 === 0 ){
          result= "Buzz" ;
     }else{
           result = num;
      }
 console.log(result + " : " + num); 
 num++;
}
// second Fizz buzz game with user input
function fizzbuzztwostrings() {
    let strNum1 = prompt('Enter a number for Fizz: ');
    let strNum2 = prompt('Enter a number for Buzz: ');
    let isNum1ANumber = !isNaN(strNum1) && strNum1.trim().length > 0;
    let isNum2ANumber = !isNaN(strNum2) && strNum2.trim().length > 0;
    if (!isNum1ANumber || !isNum2ANumber) {
       alert('Please enter valid numbers only'); 
       return;
    }
    let num1 = parseInt(strNum1);
    let num2 = parseInt(strNum2); 
    let message = document.getElementById('message').value;
    document.getElementById('message').value='';
    let i = 1;
    while (i <= 100) {
        let result = '';
        if (i % num1 ===  0) result += message.replace('%1',`${i}`).replace('%2',`${num1}`);
        if (i % num2 ===    0) result += message.replace('%1',`${num2}`).replace('%2',`${i}`);
        document.write(`<p> ${i} : ${result}</p>`);
        i++
    } 
}