// Verifique se o usuario esta pronto para jogar!
confirm("Estou pronto para jogar!"); // cria caixa de confirmação

var age = prompt("Qual é a sua idade?"); // Pede ao user para introduzir a idade na variável

// Reflete mensagem de acordo com idade introduzida pelo user
if(age < 13){
    console.log("Não nos responsabilizamos");
}else{
    console.log("Jogue");
}

console.log("Você está em um show do Justin Bieber, e ouve a letra 'Lace my shoes off, start racing'.");
console.log("De repente, Bieber para e pergunta 'Quem quer correr comigo?'");

// Pergunta ao user 
var userAnswer = prompt("Voce quer correr com Bieber no palco?");

if(userAnswer === "sim"){
    console.log("Você e Bieber começam a correr. Estão cabeça a cabeça! Você vence por um nariz!");
}else{
    console.log("Oh não! Bieber balança a cabeça e canta 'I set a pace, so I can race without pacing.'");
}


// Avalia o jogo
var feedback = prompt("Avalie o jogo");

if(feedback > 8){
    console.log("Obrigado! Vamos correr de novo no próximo concerto!");
}else{
    console.log("Vou continuar a praticar corrida e programação.");
}


