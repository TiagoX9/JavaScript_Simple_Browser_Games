<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>Document</title>
</head>
<body>
<script>
    var userChoice = prompt("Voce escolhe pedra, papel ou tesoura?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "pedra";
} else if(computerChoice <= 0.67) {
	computerChoice = "papel";
} else {
	computerChoice = "tesoura";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2){
    if(choice1 === choice2){
     return "O resultado é um empate!";  
    }else if(choice1 === "papel"){
        if(choice2 === "pedra"){
         return "papel vence";   
        }else{
            return "tesoura vence";
        }
    }else if(choice1 === "tesoura"){
        if (choice2 === "pedra"){
            return "pedra vence";
        }else if(choice2 === "papel"){
            return "tesoura vence";
        }
    }else if (choice2 === "tesoura"){
       return "pedra vence";    
    } else {
        return "papel vence";
    }
  
        
    
};

compare(userChoice, computerChoice);

console.log(compare);
</script>
</body>
</html>
