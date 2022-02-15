// =================================================================================================== //
// =========================================    QUESTÃO 03   ========================================= //
// =================================================================================================== //

/* 
    Duas palavras podem ser consideradas anagramas de si mesmas se as letras de uma palavra podem ser
    realocadas para formar a outra palavra. Dada uma string qualquer, desenvolva um algoritmo que
    encontre o número de pares de substrings que são anagramas.
*/

//Digite uma senha entre as aspas.
let word = 'ifailuhkqq';                                                     

function searchAnagrams(word) {                                         //Função para verificação de anagrama.
    let objectWord = {};                                                //A variável objectWord recebe um objeto vazio.
    let repeats = 0;                                                    //A variável repeats é iniciada com o valor 0.
    
    for (let indexA = 0; indexA < word.length; indexA++) {              //Um loop for é iniciado com um indexA de comprimento máximo equivalente ao comprimento da palavra digitada.
        for (let indexB = indexA; indexB < word.length; indexB++) {     //Um segundo loop for é iniciado com um indexB de comprimento máximo equivalente ao comprimento da palavra digitada, assim fazendo um loop inverso.
            let rankWord = word.substring(indexA, indexB+1).split('');  //Para cada loop há um corte na palavra usando a função substring com o inicio definido pelo indexA, o fim pelo indexB mais uma posição. Após cria-se um array com o resultado do processo.
            rankWord.sort();                                            //Ordena em ordem alfabética os elementos do array rankWord.
            rankWord = rankWord.join('');                               //Junta os elementos do array em uma unica palavra criando as combinações.
            objectWord[rankWord] = (objectWord[rankWord] || 0) + 1;     //O objeto ObjectWord recebe as combinações com suas respectivas atribuições.
   
            if (objectWord[rankWord] > 1) {                             //Validação caso a combinação aparece duas vezes o mais ela é contada.
                repeats = repeats + objectWord[rankWord]-1;             //A variável repeat recebe o numero de anagramas existentes.
            }
        } 
    }

    console.log(`Anagramas existentes: ${repeats}`);                    //Exibição da quantidade de anagramas encontrados

    Object.keys(objectWord).forEach(function(item) {                    //Utilizando o forEach para ler o objeto objectWord
        if (objectWord[item] > 1) {                                     //Todos os itens que possuirem o valor maior que 1, são anagramas
            console.log(`Anagrama ${item}: ${objectWord[item]} `);      //Exibi-los no console
        }
    })

    return objectWord;                                                  //Retorno da função
}

//Execução da aplicação.
searchAnagrams(word);