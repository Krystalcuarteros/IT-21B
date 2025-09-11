
const readline=require("readline");
const { fileURLToPathBuffer } = require("url");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Factorial Application");
console.log("------------------------------");
console.log("1. Say Hello");
console.log("2. Factorial");
console.log("3. Exit Application");
console.log("------------------------------");

r1.question("enter your choice (1-3): ", choice =>{
    console.log(choice);

if (choice === "1"){
    console.log("Hello");
} else if (choice === "2"){
    console.log("Factorial");
} else if (choice === "3"){
    console.log("Exiting Application");
} else {
    console.log("Invalid Choice. Please Try Again");
}

})
 
function sayHello() {
 console.log("Hello");
}

function ComputeFactorial(){
    console.log("Factoria");
}

function exitProgram(){
    console.log("Exiting Application");
    r1.close();
    console.clear();
}

function Backtomenu(){
    console.log("----------");
    console.log("1. Back to menu");
    console.log("2. Exit");

r1.question("What would you like to do", (backtomenu))
   if (BacktomenuChoice === "1") {
    console.clear();
    Mainmenu(); 
   } else if (backtomenuChoice === "2") {
       exitProgram();
   } else { 
    console.log("Inivalid choice, please try Agian!");
    Backtomenu();

}
  }


