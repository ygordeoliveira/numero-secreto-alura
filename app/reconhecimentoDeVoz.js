/*o elementochute vai ser a caixa do valor que eu falar,para isso preciso pegar o ID chute*/
const elementoChute = document.getElementById('chute')

/*Assim que a nossa aplicacao comecar a funcionar, eu ja quero ter essa configuracao de reconhecimento de voz ativa*/
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

/* O reconhecimento vai ser em portugues, e liguei o microfone para o reconhecimento*/
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

/* evento que assim que falamos, vamos exibir a nossa mensagem no console*/
recognition.addEventListener('result', onSpeak)

/*A funcao onspeak vai mostrar o numero que vai estar no trancript e exibir na tela e verificar se e um valor valido*/
function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

/*Vai exibir o chute na tela e no elemento chute pegar a mensagem que esta na div com o chute dele e mostrar na tela*/
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
     `
}

/*Evento pra quando acabar, continuar o reconhecimento de voz ate acertar*/
recognition.addEventListener('end', () => recognition.start())