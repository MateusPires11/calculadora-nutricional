const sex = document.getElementById('sexo')
const idade = document.getElementById('idade')
const peso = document.getElementById('peso')
const altura = document.getElementById('altura')
const objetivo = document.getElementById('objetivo')
const botao = document.getElementById('botaoo')


function tdee() {
    const atividade = document.getElementById('atividade')
    let TBM = tbm()
    let TDEE = 0

    if (atividade.value == 1.2) {
        TDEE = TBM * 1.2
    } else if (atividade.value == 1.375) {
        TDEE = TBM * 1.375
    } else if (atividade.value == 1.55) {
        TDEE = TBM * 1.55
    } else if (atividade.value == 1.725) {
        TDEE = TBM * 1.725
    } else {
        TDEE = TBM * 1.9
    }

    return (TDEE)
}


function tbm() {
    let tmb = 0

    if (sex.value == 'masculino') {
        tmb = 10 * peso.value + 6.25 * altura.value - 5 * idade.value + 5
    } else {
        tmb = 10 * peso.value + 6.25 * altura.value - 5 * idade.value - 161
    }

    return (tmb)

}

function calorasFinal(tdee) {

    if (objetivo.value == 'perder') {
        return tdee * 0.8
    } else if (objetivo.value == 'ganhar') {
        return tdee * 1.15
    } else {
        return tdee
    }

}


function macros(caloriasFinais) {

    const pesoKg = parseFloat(peso.value)

    const proteinaG = pesoKg * 2
    const proteinaKcal = proteinaG * 4

    const gorduraKcal = caloriasFinais * 0.25
    const gorduraG = gorduraKcal / 9

    const carboKcal = caloriasFinais - proteinaKcal - gorduraKcal
    const carboG = carboKcal / 4

    return {
        proteina: proteinaG,
        carbo: carboG,
        gordura: gorduraG
    }
}


function styles() {
    const form = document.getElementById('formCalculadora')
    const resultado = document.getElementById('resultado')

    form.style.borderRadius = '20px 20px 0px 0px';
    resultado.style.borderRadius = '0px 0px 20px 20px';

    form.style.boxShadow = '0 -2px 8px rgba(0, 0, 0, 0.08)';
    resultado.style.boxShadow = '0 8px 8px -4px rgba(0, 0, 0, 0.08)';

}




document.addEventListener('DOMContentLoaded', () => {

    botao.addEventListener('click', (evento) => {
        evento.preventDefault()

        const form = document.getElementById('formCalculadora')

        if (!form.reportValidity()) {
            return
        }

        const TBM = tbm()
        const TDEE = tdee(TBM)
        const caloriasFinais = calorasFinal(TDEE)
        const resultadoMacros = macros(caloriasFinais)

        document.getElementById('tmbResultado').textContent = TBM.toFixed(0)
        document.getElementById('tdeeResultado').textContent = caloriasFinais.toFixed(0)
        document.getElementById('protResultado').textContent = resultadoMacros.proteina.toFixed(0)
        document.getElementById('carboResultado').textContent = resultadoMacros.carbo.toFixed(0)
        document.getElementById('gordResultado').textContent = resultadoMacros.gordura.toFixed(0)

        document.getElementById('resultado').style.display = 'block'
        styles()
    })


})
