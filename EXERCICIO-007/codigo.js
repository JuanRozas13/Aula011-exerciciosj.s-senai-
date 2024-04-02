// 7. Acessando Objetos Aninhados: Escreva código para acessar a idade do proprietario do carro criado no exercício 6.


const carro = {  
    marca: "volkswagen",
    modelo: "gol",
    proprietario:{
        nome: "juan",
        idade: 18
    }
    }

    document.write(carro.proprietario.idade)
