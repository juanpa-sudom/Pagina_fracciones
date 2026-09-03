let RandomEcuation = 0;

window.onload = () => {
    StarTimer();
    GenerarEcuation();
}

const GenerarEcuation = () => {
    let numberEcuation = Math.floor(Math.random() * 3);
    let ecuation = "";

    switch (numberEcuation) {
        case 0:
            ecuation = `${nR()}x + ${nR()} = ${nR()}`;
            document.getElementById("ecuation").innerHTML = ecuation;
            break;
        
        case 1:
            ecuation = `${nR()} + ${nR()}x = ${nR()} + ${nR()}x`;
            document.getElementById("ecuation").innerHTML = ecuation;
            break;

        case 2:
            ecuation = `${nR()} - ${nR()}x + ${nR()} = ${nR()} - x`;
            document.getElementById("ecuation").innerHTML = ecuation;
            break;            
        }
    
    let resTrue = EvalFunction(ecuation, numberEcuation);
    alert(resTrue)
}

const EvalFunction = (dataFunction,numberFunction) => {
    alert(dataFunction);
    let result = eval(dataFunction);
    return result;
}

const nR = () => {
}

const StarTimer = () => {
    let seg = 0;
    let min = 0;

    setInterval(() => {
        seg++;
        if(seg == 59){
            min++
            seg = 0;
        }

    document.getElementById("timer").innerHTML = `${min}:${seg}`;
    }, 1000);
}