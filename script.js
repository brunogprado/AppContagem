function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.querySelector('#res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contagem: <hr>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO = 1.')
            p = 1
        }
        if (i < f) {
            // CONTAGEM CRESCENTE
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            //CONTAGEM DECRESCENTE
            for (let c = i; c >= f; c -= p)
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `\u{1f3c1}`
    }
}