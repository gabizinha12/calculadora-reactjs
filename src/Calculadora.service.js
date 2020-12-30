function CalculadoraService() {
  const SOMA = "+";
  const SUBTRACAO = "-";
  const MULTIPLICACAO = "*";
  const DIVISAO = "/";
  function calcular(numero1, numero2, operacao) {
    let resultado;
    switch (operacao) {
      case SOMA:
        resultado = numero1 + numero2;
        break;
      case SUBTRACAO:
        resultado = numero1 - numero2;
        break;
      case MULTIPLICACAO:
        resultado = numero1 * numero2;
        break;
      case DIVISAO:
        resultado = numero1 / numero2;
        break;
      default:
        return 0;
    }
    return resultado;
  }
  function concatenarNumero(numAtual, numConcat) {
    if (numAtual === "0" || numAtual === null) {
      numAtual = "";
    }
    if (numConcat === "." && numAtual === "") {
      return "0.";
    }
    if (numConcat === "." && numAtual.indexOf(".") > -1) {
      return numAtual;
    }
    return numAtual + numConcat;
  }

  return [calcular, concatenarNumero, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO];
}

export default CalculadoraService;
