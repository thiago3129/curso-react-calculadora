function CalculadoraService() {

    const SOMA = '+';
    const SUBTRACAO = '-';
    const DIVISAO = '/';
    const MULTIPLICACAO = '*';

    function calcular (numero1, numero2, operacao) {
        let resultado;

        switch (operacao) {
            case SOMA:
                resultado = numero1 + numero2;
                break;
            case SUBTRACAO:
                resultado = numero1 - numero2;
                break;
            case DIVISAO: 
                resultado = numero1 / numero2;
                break;
            case MULTIPLICACAO:
                resultado = numero1 * numero2;
                break;
            default:
                return 0;
          
        }
        return resultado;
    }

    function concatenarNumero (numAtual, numConcat) {
        //caso tenha zero ou null reinicia o valor
        if (numAtual === '0' || numAtual === null) {
            numAtual = '';
        }
        //primeiro digito for '.' , concate '0', antes do ponto
        if (numConcat === '.' && numAtual === '') {
            return '0.';
        }
        //caso '.' digitado já contenha ',' apenas retornar
        if (numConcat === '.' && numAtual.indexOf('.') > -1) {
            return numAtual;
        }
        return numAtual + numConcat;
    }

    return [
        calcular,
        concatenarNumero,
        SOMA,
        SUBTRACAO,
        DIVISAO,
        MULTIPLICACAO
    ];
}

export default CalculadoraService;