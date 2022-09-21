// Condições (Parte 2) - Curso JavaScript #12 • https://youtu.be/EEStcIe8rAM

// Condições multiplas

var dia = new Date().getDay();

switch (dia) {
    case 0: // aceita valores number e strings 
        console.log('Domingo')
        break
    case 1:
        console.log('Seg')
        break
    case 2:
        console.log('Ter')
        break
    case 3:
        console.log('Qua')
        break
    case 4:
        console.log('Qui')
        break
    case 5:
        console.log('Sex')
        break
    case 6:
        console.log('Sab')
        break
    default:
        console.log('Dia inválido')
        break // último break é opcional
}
