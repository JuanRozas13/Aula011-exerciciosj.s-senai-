//8. Modificando Objetos: Escreva uma função que recebe um objeto, uma chave e um valor. A função deve definir a propriedade do objeto com a chave dada para ter o valor dado.

const moto = {
    motor: "v8",
    scapamento: "metal",
}

const pessoa = {

}


function propriedade(objeto, chave, valor) {

    objeto [chave] = valor

}

propriedade(moto, "cor", "red")
propriedade(moto, "retrovisor", "vidro")
propriedade(pessoa, "idade", 22)

console.log(moto)
console.log (pessoa)