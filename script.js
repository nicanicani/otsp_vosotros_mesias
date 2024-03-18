var n = prompt("Enter your name: ");
var d = new Date();

if (n != ""){
    document.getElementById("welcome").innerHTML = ("Welcome to the Simple Math Quiz, " + n + "!");
    document.getElementById("date").innerHTML = ("Today's Date and Time: " + d);

    function startQuiz() {
        var num1, num2, op, sum, diff, product, quotient, module, answer;
    
        num1 = Math.round((Math.random() * 10) + 1);
        num2 = Math.round((Math.random() * 10) + 1);
        op = Math.round((Math.random() * 5) + 1);
    
        switch (op) {
            case 1:
                op = "+";
                sum = num1 + num2;
                answer = prompt("Hi " + n + ", let's solve a math problem. \nWhat is " + num1 + " " + op + " " + num2 + "? \nEnter your answer:");
                if (isNaN(answer)){
                    alert("This is not a number.")
                }
                else {
                    if(sum == parseInt(answer)) {
                        result.innerHTML = ("Congratulations, " + n + ". That is correct");
                    }
                    else {
                        result.innerHTML = ("I'm sorry, " + n + ". That is incorrect, the answer is " + sum);
                    }
                }
                break;
            
            case 2:
                op = "-";
                diff = num1 - num2;
                answer = prompt("Hi " + n + ", let's solve a math problem. \nWhat is " + num1 + " " + op + " " + num2 + "? \nEnter your answer:");
                if (isNaN(answer)){
                    alert("This is not a number.")
                }
                else {
                    if(diff == parseInt(answer)) {
                        result.innerHTML = ("Congratulations, " + n + ". That is correct");
                    }
                    else {
                        result.innerHTML = ("I'm sorry, " + n + ". That is incorrect, the answer is " + diff);
                    }
                }
                break;
            
            case 3:
                op = "*";
                product = num1 * num2;
                answer = prompt("Hi " + n + ", let's solve a math problem. \nWhat is " + num1 + " " + op + " " + num2 + "? \nEnter your answer:");
                if (isNaN(answer)){
                    alert("This is not a number.")
                }
                else {
                    if(product == parseInt(answer)) {
                        result.innerHTML = ("Congratulations, " + n + ". That is correct");
                    }
                    else {
                        result.innerHTML = ("I'm sorry, " + n + ". That is incorrect, the answer is " + product);
                    }
                }
                break;
            
            case 4: 
                op = "/";
                quotient = num1 / num2;
                answer = prompt("Hi " + n + ", let's solve a math problem. \nWhat is " + num1 + " " + op + " " + num2 + "? \nEnter your answer:");
                if (isNaN(answer)){
                    alert("This is not a number.");
                }
                else {
                    if(quotient == parseInt(answer)) {
                        result.innerHTML = ("Congratulations, " + n + ". That is correct");
                    }
                    else {
                        result.innerHTML = ("I'm sorry, " + n + ". That is incorrect, the answer is " + quotient);
                    }
                }
                break;
    
            case 5:
                op = "%";
                module = (num1 % num2);
                answer = prompt("Hi " + n + ", let's solve a math problem. \nWhat is " + num1 + " " + op + " " + num2 + "? \nEnter your answer:");
                if (isNaN(answer)){
                    alert("This is not a number.");
                }
                else {
                    if(module == parseInt(answer)) {
                        result.innerHTML = ("Congratulations, " + n + ". That is correct");
                    }
                    else {
                        result.innerHTML = ("I'm sorry, " + n + ". That is incorrect, the answer is " + module);
                    }
                }
                break;
    
        }
    }
}
else {
    alert("Error")
}




