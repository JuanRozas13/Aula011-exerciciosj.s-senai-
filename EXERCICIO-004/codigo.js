// 4. Métodos em Objetos: Adicione um método ao objeto pessoa chamado cumprimentar que retorna a string "Olá, meu nome é [nome]".

const pessoa ={
    nome: prompt("digite seu nome") ,
    idade: parseInt(prompt("digite sua idade")),
    email: prompt("digite email"),
    
}

pessoa.endereco = prompt("digite seu endereço")

document.write(pessoa.nome + "<br>" +pessoa.idade +"<br>"+ pessoa.email + "<br>" + pessoa.endereco)