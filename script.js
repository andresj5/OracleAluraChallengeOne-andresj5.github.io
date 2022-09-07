const entrada = document.querySelector(".texto-entrada");
const salida = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
btnCopy.style.display = "none"




function botonEncriptar() {
    const textoEncriptado = encriptar(entrada.value);
    salida.value = textoEncriptado;
    salida.style.backgroundImage="none";
    entrada.value = " ";
    btnCopy.style.display = "block"
    

}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }                
    }
    return stringEncriptada;

    
}


function botonDesencriptar() {
    const textoEncriptado = desencriptar(entrada.value)
    salida.value = textoEncriptado
    entrada.value = ""  
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}


//botón copiar

function copiar() {
    
    salida.select();
    navigator.clipboard.writeText(salida.value)
    salida.value = "";
    alert("Texto Copiado")
}