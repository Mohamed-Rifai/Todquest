const prompt = require('prompt-sync')()


const primeOrNot = () => {
let number = prompt("Enter your number: ");
let flag = 0;
for (i = 2; i < number; i++) {
  if (number % i == 0) {
    flag++;
    break;
  }
}
if (flag == 0) {
  console.log("its prime");
} else {
  console.log("not prime");
}
}
primeOrNot()
