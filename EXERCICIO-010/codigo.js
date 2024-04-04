// 10. Objetos e Arrays: Crie uma função que recebe um array de objetos. Cada objeto tem propriedades para nome e idade. A função deve retornar o nome da pessoa mais velha no array.

function AcesseOmaisVelho(pessoa) {
    if (!Array.isArray(pessoa) || pessoa.length === 0) {
      throw new Error("A entrada deve ser uma matriz não vazi");
    }
  
    let idadeMaisAntiga = pessoa[0].idade;
    let nomeMaisvelho = pessoa[0].nome;
  
    for (const personagen of pessoa) {
      if (personagen.idade > idadeMaisAntiga) {
        idadeMaisAntiga = personagen.idade;
        nomeMaisvelho = personagen.nome;
      }
    }
  
    return nomeMaisvelho;
  }
  
  
  const pessoa = [
    { nome: 'cariane', idade: 30 },
    { nome: 'balestrin', idade: 35 },
    { nome: 'dino', idade: 32 },
  ];
  
  document.write(AcesseOmaisVelho(pessoa)); 