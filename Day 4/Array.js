 const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];

    // Array.prototype.filter()
    // 1. Filtre a lista de inventores para aqueles que nasceram nos anos 1500
    const old  = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
   console.table(old);
   // Nessa primeira linha (29) criei uma const "old" que vai retornar somente os inventors nascidos entre 1500 até 1600.
   // "old" recebe um Array Funcition com os valores dos inventores.
   // Logo depois de receber esse valores, eu utilizei um filter.
   // Depois dei um console.table na const "old" para retornar os valores desejados:
   // A posição dos inventors em relação com o Array, the first and Last name, year born and year death.
   // De acordo com o que foi pedido na condiçao criada (Linha 31);

   // Array.prototype.map()
   // 2. Dê-nos uma série de nomes e sobrenomes dos inventores
   const fullNames = inventors.map(inventor => (`${inventor.first} ${inventor.last}`)) // Pesquisar mais sobre
   console.log(fullNames);
   // Nessa primeira linha (38) criei uma const "fullNames" que vai retornar o nome completo de todos os inventors
   // "fullNames" recebe um Array Function com os valores dos inventores.
   // Logo depois de receber os valores, eu utilizei uma map para retornar os dados dos inventores.
   // E utilizando o Array dei um push somente no First name and Last name.
   // Depois dei um console.log na const "fullNames" para retornar os valores desejados:
   // The First and Last name de todos os inventors.

   // Array.prototype.sort()
   // 3. Classifique os inventores por data de nascimento, do mais antigo para o mais novo
   const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
   console.table(ordered);
   // Nessas primeira linha (45) criei uma const "ordered", que vai retornar os inventors em ordem de idade.
   // "ordered" tem "a,b" como parámetros e uma Array Function.
   // E utilizando o método sort que ordena os elementos do próprio array e retorna o array, vai retornar:
   // A posição de cada inventor em relação com o Array, the First and Last name, year born and year death de todos os inventores.
   // Depois dei um console.table na const "ordered" para retornar os valores de dentro da const. 

   // Array.prototype.reduce()
   // 4. Por quantos anos todos os inventores viveram juntos?
   const totalYears = inventors.reduce((total, inventor) => {
       return total + (inventor.passed - inventor.year);
   },0);
   console.log(totalYears);
   // Nessa primeira linha (57) criei uma const "totalYears" que vai retornar a soma da idade de todos os invetors juntos.
   // "totalYears" tem "total, inventor" como parámetros e uma Array Funciotion.
   // O método reduce executa uma função reducer para cada elemento do array, resultando num único valor de retorno.
   // Para calcular a soma de todos os inventors dei um return total e dentro de () mandei os JS fazer a conta dos anos vividos de todos os invents menos o ano de nascimento
   // Depois dei um console.log na const "totalYears" para retornar os valores de dentro da const.

   // 5. Classifique os inventores por anos vividos
   const oldest = inventors.sort(function(a, b) {
       const lastGuy = a.passed - a.year;
       const nextGuy = b.passed - b.year;
       return lastGuy > nextGuy ? -1 : 1;
   });
   console.table(oldest);
   // Na linha (69) criei uma const "oldest" que vai retornar os anos vividos de todos os inventores.
   // "oldest" tem uma função como parámentro que receber outros dois parámetros "a, b".
   // Nas linhas (70-71) criei as const que vai receber os dados dos "passed" and "year" de people
   // No returt na linha (72) eu dei um return com a condição de lastGuy > nextGuy
   // Só não entendi o (? -1 : 1)

   // 6. sort Exercise
   // Classifique as pessoas em ordem alfabética pelo sobrenome
   const alpha = people.sort((lastOne, NextOne) => {
       const [aLast] = lastOne.split(',');
       const [bLast] = NextOne.split(',');
       return aLast > bLast ? 1 : -1;
   });
   // Na linha (80) criei uma const "alpha" que vai retornar em ordem alfabética pelo sobrenome de todos os people.
   // E utilizando o método sort que ordena os elementos do próprio array e retorna o array, vai retornar:
   // "alpha" tem "LastOne, NextOne" como parámetros e uma Array Function.
   // Nas linhas (82,83) criei as cont que vai receber os parámemetros junto com outro método Array...
   // O split é conhecido que especifica o método que divide uma string nos índices correspondentes a uma expressão regular.
   // Já na linha (83) dei um return que cria a condição que a const "alpha" posso se realizar. Só não sei oq (? 1 : -1) faz...

   console.log(alpha);

   // 7 Reduce Exercise
   // Resuma as instâncias de cada um desses
   const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

   const transportation = data.reduce(function(obj,item){
       if(!obj[item]) {
        obj[item] = 0;
       }
       obj[item]++;
       return obj;

   }, {});
   console.log(transportation);
   // Esse aqui eu não dei conta de ler não
   