
//solução um
/*
function verificaPalindromo(string) {
    if(!string) return 'String Inexistente'

    //split: serapa todas as letras - reverse: vai reverter os caracteres - join: junta os elementos do array
    return string.split('').reverse().join('') === string
}

console.log(verificaPalindromo('ovo'))
*/
//solução dois

function verificaPalindromo2(string) {
    if (!string) return 'String inexistente'

    for (let i = 0; i < string.length / 2; i++){
        if (string[i] !== string[string.length -1 -i]) {
            return false
        }
    }
    return true
}

console.log(verificaPalindromo2('abba'))