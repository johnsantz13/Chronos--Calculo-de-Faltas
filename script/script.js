function Calc() {
    modulo = document.getElementById("md").value
    ch = document.getElementById("hr").value
    horas = document.getElementById("resch")
    dias = document.getElementById("resdias")
    form = (modulo * 0.25)
    days = (form / ch)
    horas.innerHTML = `Você terá ${form.toFixed(0)} Horas Livres para Faltar`
    dias.innerHTML = `ou seja você terá ${days.toFixed(0)} dias disponiveis `

    if (modulo == 0 || horas == 0) {
        horas.innerHTML = "Insira os dados para o calculo"
        dias.innerHTML = ""
    }
}
function next() {
    window.location.href = 'start.html'
}
function nxt() {
    window.location.href = 'calculos.html'
}
function nex() {
    window.location.href = 'gerencia.html'
}
function Cal() {
    md = document.getElementById("md2").value
    perda = document.getElementById("prd").value
    hrs = document.getElementById("hrs").value
    form = (md * 0.25)
    calc = (form - perda)
    resto = (calc / perda)
    resthr=(resto - hrs)
    horario = document.getElementById("rescarg")
    resprd = document.getElementById("resprd")
    horario.innerHTML = `Carga Horaria disponivel é de ${form.toFixed(0)} Horas`
    resprd.innerHTML = `você tem ${calc.toFixed(0)} horas disponiveis de ausensia ou seja apenas ${resthr.toFixed(0)} dias livre`

    if (md == 0 || perda == 0 || hrs == 0) {
        horario.innerHTML = "Insira os dados para o calculo"
        resprd.innerHTML = ""
    }
}

function reset() {
    location.href = "calculos.html"
}
function resett() {
    location.href = "gerencia.html"
}