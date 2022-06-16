window.onload = function() {
    //1/p + 1/q = 1/f
    //calcular aumento
    const radioF = document.getElementById('radio-f');
    const radioP = document.getElementById('radio-p');
    const radioQ = document.getElementById('radio-q');
    const inputF = document.getElementById('d-focal-f');
    const inputP = document.getElementById('d-objeto-p');
    const inputQ = document.getElementById('d-imagen-q');
    const btnCalcular = document.getElementById('calcular-btn');


    calcularAumento = () => {
        let M = -inputQ.value/inputP.value;
        console.log(M.toFixed(2));
    }
    calcularFoco = () => {
        let p = inputP.value;
        let q = inputQ.value;
        let f = 1 / (1 / p + 1 / q);
        inputF.value = f.toFixed(2);
    }
    calcularDistanciaObjeto = () => {
        let f = inputF.value;
        let q = inputQ.value;
        let p = 1 / (1 / f - 1 / q);
        inputP.value = p.toFixed(2);
    }
    calcularDistanciaImagen = () => {
        let f = inputF.value;
        let p = inputP.value;
        let q = 1 / (1 / f - 1 / p);
        inputQ.value = q.toFixed(2);
    }
    radioF.onclick = () => {
        inputF.value = '';
        inputF.classList.add('deshabilitado');
        inputF.disabled = true;
        inputP.disabled = false;
        inputP.classList.remove('deshabilitado');
        inputQ.disabled = false;
        inputQ.classList.remove('deshabilitado');
    };
    radioP.onclick = () => {
        inputP.value = '';
        inputP.classList.add('deshabilitado');
        inputP.disabled = true;
        inputF.disabled = false;
        inputF.classList.remove('deshabilitado');
        inputQ.disabled = false;
        inputQ.classList.remove('deshabilitado');
        
    };
    radioQ.onclick = () => {
        inputQ.value = '';
        inputQ.classList.add('deshabilitado');
        inputQ.disabled = true;
        inputF.disabled = false;
        inputF.classList.remove('deshabilitado');
        inputP.disabled = false;
        inputP.classList.remove('deshabilitado');
    };
    btnCalcular.addEventListener('click', function(e) {
        e.preventDefault();
        if (radioF.checked) {
            calcularFoco();
        } else if (radioP.checked) {
            calcularDistanciaObjeto();
        } else if (radioQ.checked) {
            calcularDistanciaImagen();
        }
        calcularAumento();
    });
}