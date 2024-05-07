let diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

diasDaSemana[6] = "Melhor dia"
console.log(diasDaSemana);

diasDaSemana.push("Feriado")
console.log("Acrescentando elemento:");
console.log(diasDaSemana);

diasDaSemana.unshift("Semana 01:")
console.log("Acrescentando elemento no início com unshift");
console.log(diasDaSemana);

diasDaSemana.pop()
console.log('Removendo elemento do final com pop');
console.log(diasDaSemana);

diasDaSemana.shift()
console.log('Removendo o primeiro com shift');
console.log(diasDaSemana);

// diasDaSemana.push("Carnaval", "Páscoa")
// console.log(diasDaSemana);

// diasDaSemana.concat(['Natal', 'Ano Novo'])

// diasDaSemana.push(...['Natal', 'Ano Novo'])

// indexOf
let i = diasDaSemana.indexOf('Terça')
console.log('Posição no array: '+i);
// console.log('Posição no array: '+diasDaSemana.indexOf('Terça'));

i = diasDaSemana.indexOf('Domingo')
console.log('Posição do domingo no array: '+i);

// splice
// remover um elemento
// diasDaSemana.splice(indiceInicio,quantidade)

// diasDaSemana.splice(2,1)
// console.log('Removendo um elemento com splice')
// console.log(diasDaSemana);


// indexOf + splice, um lindo caso de amor...

i = diasDaSemana.indexOf('Quarta') 
if(i != -1){
    diasDaSemana.splice(i, 1)
    console.log(diasDaSemana);
}

// concat
let amigos = ['Alice', 'Bob', 'Charlie']
let parentes = ['Dave', 'Eva', 'Frank']
let convidados = amigos.concat(parentes)

console.log("Convidados: ")
console.log(convidados);




// let numeros = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// let numeros = []
// for(i=2;i<=20;i++){
//     if(i % 2 == 0){
//         numeros.push(i)
//     }
//     console.log('Array agora: ' + numeros);
// }

// console.log(numeros);

let numeros = []
for(i=2;i<=20;i+=2){
    numeros.push(i)
    console.log('Array agora: ' + numeros);
}
console.log(numeros);

let soma = 0
for(i=0;i<numeros.length; i++){
    soma += numeros[i]
}
let media = soma/numeros.length

let sominha = numeros[0] + numeros[1]
