let hora = document.querySelector("#hora")
let minuto = document.querySelector("#minuto")
let segundo = document.querySelector("#segundo")
let x = 0
let comeca = false

// começa contagem regressiva
function start(){

    if(comeca == true){
        document.querySelector("audio").pause()

        if(minuto.value == ""){
            minuto.value = 0
        }
        if(hora.value == ""){
            hora.value = 0
        }
        if(segundo.value == ""){
            segundo.value = 0
        }

        if(minuto.value == 0 && hora.value != 0){
            minuto.value = 60
            hora.value -= 1

        }
        if(segundo.value == 0 && minuto.value != 0){
            segundo.value = 60
            minuto.value -= 1

        }

        segundo.value -= 1

        if(segundo.value == 0 && minuto.value == 0 && hora.value == 0){
            document.querySelector("audio").play()
            troca()
        }
    }
}

// liga e desliga o contador
function troca(){
    if(comeca == true){
        comeca = false
        document.querySelector("button").innerHTML= 'Start'
    }else{

        if(hora.value == "" && minuto.value == "" && segundo.value == ""){
            alert("insira algum valor numerico")
        }else if(hora.value == 0 && minuto.value == 0 && segundo.value == 0){
            alert("insira algum valor numerico diferente de zero")
        }else if(isNaN(hora.value) || isNaN(minuto.value) || isNaN(segundo.value)){
            alert("insira somente valores numericos")
        }else{
            comeca = true
            document.querySelector("button").innerHTML= 'Pause'
        }
    }
}

// aciona funçao pela tecla precionada
const enter = (event) =>{

    if(event.which == 13 || event.which == 32){
        troca()
    }
}

setInterval(start, 1000)
