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