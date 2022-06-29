window.onload = function() {
    //1/p + 1/q = 1/f
    const radioF = document.getElementById('radio-f');
    const radioP = document.getElementById('radio-p');
    const radioQ = document.getElementById('radio-q');
    const inputF = document.getElementById('d-focal-f');
    const inputP = document.getElementById('d-objeto-p');
    const inputQ = document.getElementById('d-imagen-q');
    const mensaje = document.getElementById('mensaje');
    const btnCalcular = document.getElementById('calcular-btn');


    calcularAumento = () => {
        let M = -inputQ.value/inputP.value;
        return M.toFixed(2);
    }
    obtenerTipoImagen = () => {
        tipo = "Imagen: ";
        if(inputF.value == inputP.value) {
            return tipo = "Objeto sobre foco";
        }
        // -Si la distancia q es positiva -> imagen real
        // -Si la distancia q es negativa -> imagen virtual
        if(inputQ.value > 0){
            tipo+= "Real - ";
        } else {
            tipo+= "Virtual - ";
        }
        // -Si la distancia f > p Derecha
        // -Si la distancia f < p Invertida
        if(inputF.value > inputP.value){
            tipo+= "Derecha.";
        } else if (inputF.value < inputP.value){
            tipo+= "Invertida.";
        }
        return tipo;
    }
    esLenteConvergente = () => {
        if(inputF.value > 0){
            return true;
        }
        return false;
    }
    escribirMensaje = () => {
        vacios = 0;
        inputs = [inputF, inputP, inputQ];
        inputs.forEach(input => {
            if(input.value == ""){
                vacios++;
            }
        });        
        if (vacios > 1) {
            mensaje.innerHTML = "Por favor, verifique los datos";
            mensaje.classList.add("error");
        } else if (!esLenteConvergente()){
            mensaje.innerHTML = "Lente no convergente";
            mensaje.classList.add("error");
        } else {
            mensaje.innerHTML = "Aumento M = " + calcularAumento() + "<br>" + obtenerTipoImagen();
            mensaje.classList.remove("error");
        }
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
        if (radioF.checked && inputP.value!=="" && inputQ.value!=="") {
            calcularFoco();
        } else if (radioP.checked && inputF.value!=="" && inputQ.value!=="") {
            calcularDistanciaObjeto();
        } else if (radioQ.checked && inputF.value!=="" && inputP.value!=="") {
            calcularDistanciaImagen();
        }
        escribirMensaje();
    });
}