// 4. Métodos em Objetos: Adicione um método ao objeto pessoa chamado cumprimentar que retorna a string "Olá, meu nome é [nome]".

const pessoa ={
    nome: prompt("digite seu nome") ,
    idade: parseInt(prompt("digite sua idade")),
    email: prompt("digite email"),
    cumprimentar:()=> "olá meu nome é " + pessoa.nome
    
}

pessoa.endereco = prompt("digite seu endereço")

document.write(pessoa.cumprimentar() + "<br>" +pessoa.idade +"<br>"+ pessoa.email + "<br>" + pessoa.endereco)


