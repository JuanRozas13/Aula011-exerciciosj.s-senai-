// 5. Iterando Propriedades: Escreva uma função que recebe um objeto e imprime todas as chaves e valores do objeto. Teste esta função com o objeto pessoa.

function imprimirPropriedades(objeto) {
    for (let chave in objeto) {
        if (objeto.hasOwnProperty(chave)) {
            console.log(`Chave: ${chave}, Valor: ${objeto[chave]}`);
        }
    }
}

// Definindo um objeto pessoa
const pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo',

};

// Testando a função com o objeto pessoa
imprimirPropriedades(pessoa);
