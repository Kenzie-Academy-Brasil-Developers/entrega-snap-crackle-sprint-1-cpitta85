/* SnapCrackle

- Escreva uma função chamada snapCrackle que leva um parâmetro: maxValue.
- Esta função deve fazer um loop de 1 até maxValue (inclusive) e montar uma string com as seguintes condições para cada número:
1. Se o número for ímpar, no lugar dele, concatenar "Snap" no final da string.
2. Se o número for múltiplo de 5, no lugar dele, concatenar "Crackle" no final da string.
3. Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, concatenar "SnapCrackle" no final da string.
4. Se número não for nem ímpar nem múltiplo de 5, concatenar o próprio número no final da string.
5. Seus itens devem ser separados sempre por vírgula e espaço (veja o exemplo).
6. Esta função deve retornar a string obtida. */


function snapCrackle(maxValue)
{

    let string=""

    for (let contar=1; contar<=maxValue; ++contar)
    
    {

        if (contar%2 !== 0 && contar%5 === 0) {string+="SnapCrackle, "; continue}
        if (contar%2 !== 0) {string+="Snap, "; continue}
        if (contar%5 === 0) {string+="Crackle, "}        
        
        string += contar + ", "

    }

    console.log(string)
}

snapCrackle(15)