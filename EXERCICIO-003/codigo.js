// 3. Adicionando Propriedades: Para o objeto pessoa criado no exercício 1, adicione uma nova propriedade chamada endereco que é uma string.

const pessoa ={
    nome: prompt("digite seu nome") ,
    idade: parseInt(prompt("digite sua idade")),
    email: prompt("digite email"),
    
}

pessoa.endereco = prompt("digite seu endereço")

document.write(pessoa.nome + "<br>" +pessoa.idade +"<br>"+ pessoa.email + "<br>" + pessoa.endereco)