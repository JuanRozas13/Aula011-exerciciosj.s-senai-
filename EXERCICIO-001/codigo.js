// 1. Objeto Simples: Crie um objeto chamado pessoa que tem propriedades para nome, idade e email.

// var id = prompt("digite seu nome")
// var num = parseInt(prompt("digite sua idade"))
// var gm = prompt("digite email")
const pessoa ={
    nome: prompt("digite seu nome") ,
    idade: parseInt(prompt("digite sua idade")),
    email: prompt("digite email")
}

document.write(pessoa.nome + "<br>" +pessoa.idade +"<br>"+ pessoa.email)