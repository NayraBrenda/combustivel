function calcularQuadro1() {
    let resultado = alcool.value / gasolina.value
    if(alcool.value == '' && gasolina.value == ''){
        window.alert('Preencha os campos')
    } else {
    if (resultado < 0.7) {
        resultado1.innerHTML = `Abasteça com <b>Álcool</b>.`
    } else {
        resultado1.innerHTML = `Abasteça com <b>Gasolina</b>.`
    }
    }
}

function habilitarLimparQuadro1() {
    const desabilitar = alcool.value.length < 1 && gasolina.value.length < 1
    botaoLimpar1.disabled = desabilitar
        // botaoLimpar1.removeAttribute('disabled')
}

function limparCamposQuadro1() {
    alcool.value = ''
    gasolina.value = ''
    resultado1.innerHTML = ''
    botaoLimpar1.disabled = true
}

function calcularQuadro2() {
    let resultado = kmRodados.value / litrosAbastecidos.value
    if(kmRodados.value == '' && litrosAbastecidos.value == '') {
        window.alert('Preencha os campos')    
    } else {
        resultado2.innerHTML = `O veículo fará <b>${resultado.toFixed(2).replace('.', ',')}</b> km/l.`
    }
}

function habilitarLimparQuadro2() {
    const desabilitar = kmRodados.value.length < 1 && litrosAbastecidos.value.length < 1
    botaoLimpar2.disabled = desabilitar
}

function limparCamposQuadro2() {
    kmRodados.value = ''
    litrosAbastecidos.value = ''
    resultado2.innerHTML = ''
    botaoLimpar2.disabled = true
}

function calcularQuadro3() {
    let resultado = (percurso.value / consumoDoVeiculo.value) * precodoCombustivel.value
    if (percurso.value == '' && consumoDoVeiculo.value == '' && precoCombustivel.value == '') {
        window.alert('Preencha os campos')
    } else {
        resultado3.innerHTML = `O total é R$<b>${resultado.toFixed(2).replace(".", ",")}</b>.`
    }
}

function habilitarLimparQuadro3() {
    const desabilitar = percurso.value.length < 1 && consumoDoVeiculo.value.length < 1 && precodoCombustivel.value.length < 1 
    botaoLimpar3.disabled = desabilitar
}

function limparCamposQuadro3() {
    percurso.value = ''
    consumoDoVeiculo.value = ''
    precodoCombustivel.value = ''
    resultado3.innerHTML = ''
    botaoLimpar3.disabled = true
}

function calcularQuadro4() {
    let resultado = valorAbastecimento.value / precoCombustivel.value
    if(valorAbastecimento.value == '' && precoCombustivel.value == ''){
        window.alert('Preencha os campos')
    } else {
    return resultado4.innerHTML = `Você abastecerá <b>${resultado.toFixed(2).replace('.', ',')}</b> litros.`
    }
}

function habilitarLimparQuadro4() {
    const desabilitar = valorAbastecimento.value.length < 1 && litrosAbastecidos.value.length < 1
    botaoLimpar4.disabled = desabilitar
}

function limparCamposQuadro4() {
    valorAbastecimento.value = ''
    precoCombustivel.value = ''
    resultado4.innerHTML = ''
    botaoLimpar4.disabled = true
}