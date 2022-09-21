// Condições (Parte 2) - Curso JavaScript #12 • https://youtu.be/EEStcIe8rAM

// Condições aninhadas

var idade = 30;
var hora = new Date().getHours();

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

console.log(`Sua idade é ${idade}.`)

if (idade < 16) {
    console.log('Não vota.')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional.')
} else {
    console.log('Voto obrigatório.')
}