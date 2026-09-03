//funcion quiz

let resCorrecta = 0;
let opcionesActuales = [];

window.onload = () => {
    StarTimer();
    GenerarEcuation();
};

const nR = () => Math.floor(Math.random() * 20) + 1;

const GenerarEcuation = () => {
    let numberEcuation = Math.floor(Math.random() * 3);
    let ecuationText = "";

    switch (numberEcuation) {
        case 0: {
            let a = nR(), b = nR(), c = nR();
            ecuationText = `${a}X + ${b} = ${c}`;
            resCorrecta = (c - b) / a;
            break;
        }
        case 1: {
            let a = nR(), b = nR(), c = nR(), d = nR();

            ecuationText = `${a} + ${b}x = ${c} + ${d}x`;
            resCorrecta = (c - a) / (b - d);
            break;
        }
        case 2: {
            let a = nR(), b = nR(), c = nR(), d = nR();

            ecuationText = `${a} - ${b}X + ${c} = ${d} - X`;
            resCorrecta = (a + c - d) / (b - 1);    
            break;
        }
    }

    document.getElementById("ecuation").innerHTML = ecuationText;
    resCorrecta = Number(resCorrecta.toFixed(2));
    CargarOpciones(resCorrecta);
};

const CargarOpciones = (correcta) => {
    let falsa1 = Number((correcta + nR()).toFixed(2));
    let falsa2 = Number((correcta - nR()).toFixed(2));

    opcionesActuales = [correcta, falsa1, falsa2];
    opcionesActuales.sort(() => Math.random() - 0.5);
 
    let elementosNumero = document.querySelectorAll(".options-container .number");
    elementosNumero.forEach((span, index) => {
        span.innerText = opcionesActuales[index];
    });
};
  
const ValidarRespuesta = (indiceSeleccionado) => {
    let seleccion = opcionesActuales[indiceSeleccionado];

    if (seleccion === resCorrecta) {
        alert("¡Correcto!");
        GenerarEcuation();
    } else {
        alert("Incorrecto, intenta de nuevo");
    }
};

const StarTimer = () => {
    let seg = 0;
    let min = 0;

    setInterval(() => {
        seg++;
        if (seg === 60) {
            min++;
            seg = 0;
        }

        let segFormat = seg.toString().padStart(2, "0");
        document.getElementById("timer").innerHTML = `${min}:${segFormat}`;
    }, 1000);
};

//funcion fracciones

let deno1 = "";
let deno2 = "";
let divi1 = "";
let divi2 = "";

function calculate() {

    deno1 = Number(document.getElementById("deno1").value);
    deno2 = Number(document.getElementById("deno2").value);
    divi1 = Number(document.getElementById("divi1").value);
    divi2 = Number(document.getElementById("divi2").value);

    if (document.getElementById("deno1").value === "" ||
        document.getElementById("deno2").value === "" ||
        document.getElementById("divi1").value === "" ||
        document.getElementById("divi2").value === "") {
        alert("Por favor ingrese los datos completos");
        return;
}

if (document.getElementById("operators").value === "sum") {

        const resultado = (divi1 * deno2) + (deno1 * divi2);
        const divisor = divi1 * divi2;

        document.getElementById("res").innerHTML = resultado;
        document.getElementById("res2").innerHTML = divisor;
}

if (document.getElementById("operators").value === "res") {

        const resultado = (divi1 * deno2) - (deno1 * divi2);
        const divisor = divi1 * divi2;

        document.getElementById("res").innerHTML = resultado;
        document.getElementById("res2").innerHTML = divisor;
}

if (document.getElementById("operators").value === "mul") {

        const resultado = deno1 * deno2;
        const divisor = divi1 * divi2;

        document.getElementById("res").innerHTML = resultado;
        document.getElementById("res2").innerHTML = divisor;
}

if (document.getElementById("operators").value === "div") {

        const resultado = divi1 * deno2;
        const divisor = deno1 * divi2;
 
        document.getElementById("res").innerHTML = resultado;
        document.getElementById("res2").innerHTML = divisor;
}
}