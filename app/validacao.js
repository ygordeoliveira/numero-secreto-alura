/*Pegar esse chute transformar o chute que vem em string, em um numero inteiro, so de somar, ele ja vai tentar converter esse numero para inteiro*/
function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    /*Se o chute for invalido com numero que eu converti retorna o valor invalido*/
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    /*Se o numero for menor que 10 e maior que 1000 vai retornar a mensagem de valor invalido e insirir um numero entre 10 e 1000 na tela*/
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    /*Se o numero for igual ao numero secreto aparece a mensagem voce acertou em uma nova tela com o valor por isso uso document.body*/
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `

        /*Se o numero for maior que o numero secreto,quero exibir a mensagem o numero secreto e menor*/
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `                      
        /*senao for menor vai mostrar o numero secreto e maior*/
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

/*Faco a validacao do chute para True*/
function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

/*Pego o numero e vou verificar se ele for maior que o maior valor ou menor que menor valor vai ter a mensagem de erro*/
function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

/*Ao clicar o botao, se eu tiver um click no id que seja igual ao jogarnovamente quero reiniciar minha tela*/
document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})