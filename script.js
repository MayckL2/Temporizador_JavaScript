let hora = document.querySelector("#hora");
let minuto = document.querySelector("#minuto");
let segundo = document.querySelector("#segundo");
let comeca = false;

// começa contagem regressiva
function start() {
  if (comeca == true) {
    document.querySelector("#btnZera").removeAttribute("disabled");

    document.querySelector("audio").pause();

    if (minuto.value == "") {
      minuto.value = 0;
    }
    if (hora.value == "") {
      hora.value = 0;
    }
    if (segundo.value == "") {
      segundo.value = 0;
    }

    if (minuto.value == 0 && hora.value != 0) {
      minuto.value = 60;
      hora.value -= 1;
    }
    if (segundo.value == 0 && minuto.value != 0) {
      segundo.value = 60;
      minuto.value -= 1;
    }

    if(segundo.value >= 0){
      segundo.value -= 1;
    }else{
      alert("insira valores acima de zero")
    }

    // verifica quantidade de digitos para permanecer dois digitos cara contador

    if (segundo.value.toString().length > 1) {
      segundo.value = segundo.value;
    } else {
      segundo.value = 0 + segundo.value.toString();
    }

    if (minuto.value.toString().length > 1) {
      minuto.value = minuto.value;
    } else {
      minuto.value = 0 + minuto.value.toString();
    }

    if (hora.value.toString().length > 1) {
      hora.value = hora.value;
    } else {
      hora.value = 0 + hora.value.toString();
    }

    document.title = `Temporizador ${hora.value}:${minuto.value}:${segundo.value}`;

    if (segundo.value == 0 && minuto.value == 0 && hora.value == 0) {
      document.querySelector("audio").play();
      troca();
    }
  }
}

// liga e desliga o contador
function troca() {
  m = h = 0;

  if (comeca == true) {
    comeca = false;
    document.querySelector("#start").innerHTML = "Start";
  } else {
    if (hora.value == "" && minuto.value == "" && segundo.value == "") {
      alert("insira algum valor numerico");
    } else if (hora.value == 0 && minuto.value == 0 && segundo.value == 0) {
      alert("insira algum valor numerico diferente de zero");
    } else if (
      isNaN(hora.value) ||
      isNaN(minuto.value) ||
      isNaN(segundo.value)
    ) {
      alert("insira somente valores numericos");
    } else {
      comeca = true;
      document.querySelector("#start").innerHTML = "Pause";
    }
  }
}

// aciona funçao pela tecla precionada
const enter = (event) => {
  if (event.which == 13 || event.which == 32) {
    troca();
  }
};

// zera o contador
function zera() {
  troca();
  hora.value = 0;
  minuto.value = 0;
  segundo.value = 0;

  document.querySelector("#btnZera").setAttribute("disabled", true);
}

// adicona tempo por botoes
let h = (m = 0);
function adiciona(t) {
  if (t == 1) {
    m++;
    minuto.value = m;
  } else if (t == 10) {
    m += 10;
    minuto.value = m;
  } else {
    h++;
    hora.value = h;
  }
}

setInterval(start, 1000);
