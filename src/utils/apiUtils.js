export const messageFromErrorCode = code => {
    switch(code) {
        case 'S001':
            return 'A classe enviada não existe.';
        case 'S002':
            return 'Estudante com o nome inválido.';
        default:
            return 'Erro ao castrar estudante, tente novamente mais tarde.';
    }
}