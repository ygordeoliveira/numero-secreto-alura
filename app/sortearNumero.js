const menorValor = 10
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

/*A funcao vai gerar um numero aleatorio e retornar um numero inteiro vezes o maior valor + 1 pra ter o valor entre 1 e 10*/
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número Secreto:', numeroSecreto)

/*Alterei o numero do menor valor que esta na const e exibe um novo valor */
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

/*Alterei o numero do maior valor que vai estar guardado na const e exibi um novo valor*/
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor