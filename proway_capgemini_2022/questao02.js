// =================================================================================================== //
// =========================================    QUESTÃO 02   ========================================= //
// =================================================================================================== //

/* 
    Débora se inscreveu em uma rede social para se manter em contato com seus amigos.
    A página de cadastro exigia o preenchimento dos campos de nome e senha, porém a senha precisa ser forte.
    O site considera uma senha forte quando ela satisfaz os seguintes critérios:
        * Possui no mínimo 6 caracteres.
        * Contém no mínimo 1 digito.
        * Contém no mínimo 1 letra em minúsculo.
        * Contém no mínimo 1 letra em maiúsculo.
        * Contém no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&*()-+
*/
//Digite uma senha entre as aspas
let password = 'aA!2AS'
                                            
const validate = (password) => {                                //Função para validação de senha
    console.log(`Senha digitada: ${password}`)

    // Possui no mínimo 6 caracteres.
    if(password.trim().length >= 6) {
        console.log('Possuir no mínimo 6 caractereres: OK')
    } else {
        let falta = 
        console.log(`Possuir no mínimo 6 caractereres: NÃO OK - Faltam ${6 - password.trim().length} caracteres.`)
    }
     
    // Contém no mínimo 1 digito.
        if(password.includes('1') || password.includes('2') || password.includes('3') || password.includes('4') || password.includes('5') ||
        password.includes('6') || password.includes('7') || password.includes('8') || password.includes('9') || password.includes('0')) {
            console.log('Contém no mínimo 1 digito: OK')
        } else {
            console.log('Contém no mínimo 1 digito: NÃO OK - Digite pelo menos 1 número.')
        }
     
    // Contém no mínimo 1 letra em minúsculo.
        if( password.includes('a') || password.includes('b') || password.includes('c') || password.includes('d') || password.includes('e') ||
        password.includes('f') || password.includes('g') || password.includes('h') || password.includes('i') || password.includes('j') ||
        password.includes('k') || password.includes('l') || password.includes('m') || password.includes('n') || password.includes('o') ||
        password.includes('p') || password.includes('q') || password.includes('r') || password.includes('s') || password.includes('t') ||
        password.includes('u') || password.includes('v') || password.includes('x') || password.includes('w') || password.includes('y') ||
        password.includes('z')) {
            console.log('Contém no mínimo 1 letra em minúsculo: OK')
        } else {
            console.log('Contém no mínimo 1 letra em minúsculo: NÃO OK - Digite pelo menos 1 letra minúscula.')
        }
    
  
    // Contém no mínimo 1 letra em maiúsculo.
    
        if( password.includes('A') || password.includes('B') || password.includes('C') || password.includes('D') || password.includes('E') ||
        password.includes('F') || password.includes('G') || password.includes('H') || password.includes('I') || password.includes('J') ||
        password.includes('K') || password.includes('L') || password.includes('M') || password.includes('N') || password.includes('O') ||
        password.includes('P') || password.includes('Q') || password.includes('R') || password.includes('S') || password.includes('T') ||
        password.includes('U') || password.includes('V') || password.includes('X') || password.includes('W') || password.includes('Y') ||
        password.includes('Z')) {
            console.log('Contém no mínimo 1 letra em maiúsculo: OK')
        } else {
            console.log('Contém no mínimo 1 letra em maiúsculo: NÃO OK - Digite pelo menos 1 letra maiúscula.')
        }
    
    // Contém no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&*()-+
    if(
        password.includes('!') || password.includes('@') || password.includes('#') || password.includes('$') || password.includes('%') ||
        password.includes('^') || password.includes('&') || password.includes('*') || password.includes('(') || password.includes(')') ||
        password.includes('-') || password.includes('+') ){
            console.log('Contém no mínimo 1 caractere especial: OK')
        } else {
            console.log('Contém no mínimo 1 caractere especial: NÃO OK - Os caracteres especiais suportados são: ! @ # $ % ^ & * ( ) - +')
        }
}

validate(password)  //Execução da função recebendo a senha digitada
    

