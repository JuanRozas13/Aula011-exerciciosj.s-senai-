// 9. Verificando Propriedades: Escreva uma função que recebe um objeto e uma chave e retorna true se o objeto tem uma propriedade com essa chave e false caso contrário.

function Netty_or_not (objetivo, chave)
{
    return chave in objetivo
}

const anabolizante = {
    deca: "bomba",
    dura: "la ele",
    trembo: "seco"
}

// verificar se deca esta presente como chave no objeto anabolizante
console.log(Netty_or_not(anabolizante, "deca"))
console.log(Netty_or_not(anabolizante, "lentilha"))