// 6. Objetos Aninhados: Crie um objeto chamado carro que tem propriedades para marca, modelo e proprietario. O proprietario deve ser outro objeto com propriedades para nome e idade.


    const carro = {  
    marca: "volkswagen",
    modelo: "gol",
    proprietario:{
        nome: "juan",
        idade: 18
    }
    }

    document.write(carro.marca + "<br>" +carro.modelo +"<br>"+ carro.proprietario.nome)
