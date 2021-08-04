  // ## Array Cardio Day 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

     // Array.prototype.some() // is at least one person 19?
    const isAdult = people.some(person => ((new Date()).getUTCFullYear()) - person.year >= 19);

    console.log({isAdult});

    // Criei uma const "isAdult" recebe um método Array chamado "Some". (O método testa se pelo menos um elemento da matriz passa no teste implementado pela função fornecida. 
    // Ele retorna verdadeiro se, na matriz, encontrar um elemento para o qual a função fornecida retorna verdadeiro; caso contrário, retorna falso.)
    // Logo depois, criamos um Array que basicamente vai pegar o new Data juntamente com um  getUTCFullYear() - person.year >=19
    // O método getUTCFullYear() retorna o ano na data indicada de acordo com o horário universal.
    // Ou linha de código basicamente resolver o seguinte problema. Verificar se alguma das pessoas tem ao menos 19 anos de idade.


    // Array.prototype.every() // is everyone 19?
    const allAdults = people.every(person => ((new Date()).getUTCFullYear()) - person.year >= 19);

    console.log({isAdult});

    // Criei uma const "isAdult" recebe um método Array chamado every.
    // O every()método testa se todos os elementos da matriz passam no teste implementado pela função fornecida. Ele retorna um valor booleano.
    // Logo depois, criamos um Array que basicamente vai pegar o new Data juntamente com um  getUTCFullYear() - person.year >=19
    // O método getUTCFullYear() retorna o ano na data indicada de acordo com o horário universal.
    // Ou linha de código basicamente resolver o seguinte problema. Verificar se todas as pessoas tem 19 anos de idade.


  // Array.prototype.find()
  const comment = comments.find(comment => comment.id === 123523);

  console.log(comment);

  // Criei uma const "comment" que recebe um método Array chamado "Find".
  // O find()método retorna o valor do primeiro elemento na matriz fornecida que satisfaça a função de teste fornecida.
  // Logo depois criamos uma Array Function que vai o id espécifico e pedir para retornar o que tem no "text" no console.log

  // Array.prototype.findIndex()
  const index = comments.findIndex(comment => comment.id === 123523);
  console.log(index);

  
  // Criei uma const "comment" que recebe um método Array chamado "findIndex".
  // O findIndex() método retorna o índice do primeiro elemento na matriz que satisfaz a função de teste fornecida.
  // Logo depois criamos uma Array Function que vai o id espécifico e pedir para retornar a posição que satifaz a função no console.log

