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