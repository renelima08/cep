// Link API: https://viacep.com.br/ws/CEP_AQUI/json/

// Ex: https://viacep.com.br/ws/04470185/json/

async function buscarCEP() {
    let cepDigitado = document.getElementById('cep').value
    let url = `https://viacep.com.br/ws/${cepDigitado}/json/`

    let resposta = await fetch(url)

    let dadosCEP = await resposta.json()

    let inputLogradouro = document.getElementById('logradouro')
    let inputBairro = document.getElementById('bairro')
    let inputCidade = document.getElementById('cidade')
    let inputUF = document.getElementById('uf')

    inputLogradouro.value = dadosCEP.logradouro
    inputBairro.value = dadosCEP.bairro
    inputCidade.value = dadosCEP.localidade
    inputUF.value = dadosCEP.uf
    
}
