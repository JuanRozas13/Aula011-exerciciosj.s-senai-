// 10. Objetos e Arrays: Crie uma função que recebe um array de objetos. Cada objeto tem propriedades para nome e idade. A função deve retornar o nome da pessoa mais velha no array.

function getOldestPersonName(people) {
    if (!Array.isArray(people) || people.length === 0) {
      throw new Error('Input must be a non-empty array');
    }
  
    let oldestAge = people[0].idade;
    let oldestName = people[0].nome;
  
    for (const person of people) {
      if (person.idade > oldestAge) {
        oldestAge = person.idade;
        oldestName = person.nome;
      }
    }
  
    return oldestName;
  }
  
  // Example usage:
  const people = [
    { nome: 'Alice', idade: 30 },
    { nome: 'Bob', idade: 35 },
    { nome: 'Charlie', idade: 32 },
  ];
  
  document.write(getOldestPersonName(people)); 