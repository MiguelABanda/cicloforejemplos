const boton = document.getElementById("boton");
const salida = document.getElementById("salida"); 

boton.addEventListener("click" , e =>{

    // imprimir los numeros del 1 al 10
    for(let contador = 1; contador <= 10; contador++){
        console.log(contador);
    }

    // imprimir los numeros del 1 al 100 de 3 en 3
    for(let contador=1; contador <= 100; contador+=3){
        console.log(contador);
    } 

    // imprimir los numeros de 100 a 1 con decremento de 5 
    for (let i=100; i >=1; i -=5) {
        console.log(i);
    }

    // mostrar en el div 5 veces hola usando un for
    salida.innerText = ""; // limpiar antes
    for (let i = 1; i<=5; i++){
        salida.innerText += "hola ";
    }

    // segunda forma con concatenación
    let info = "";
    for (let i = 1; i<=5; i++){
        info += "hola ";
    }
    salida.innerText = info; 

    // creación de código HTML dinámico
    // primera forma 
    const contenedor1 = document.getElementById("contenedor1"); 
    let titulo = "Titulo generado dinamicamente";
    let facultad = "facpya";
    let htmlDinamico = `<h3>${titulo}</h3>
                        <p>${facultad}</p>`; 
    contenedor1.innerHTML = htmlDinamico;  

    // generar 10 párrafos en el contenedor 2
    const contenedor2 = document.getElementById("contenedor2");
    contenedor2.innerHTML = ""; // limpiar antes
    for (let i = 1; i<=10; i++) {
        let htmlDinamico = `<p>Parrafo número ${i}</p>`; 
        contenedor2.innerHTML += htmlDinamico; 
    }

    // segunda forma con createElement
    const contenedor3 = document.getElementById("contenedor3"); 

    const tituloo = document.createElement("h3"); 
    tituloo.innerText = "Titulo generado con createElement"; 
    
    const miparrafo = document.createElement("p"); 
    miparrafo.innerText = "Soy un parrafo con createElement";
    miparrafo.setAttribute("id", "parrafo-info")
    miparrafo.setAttribute("class", "info");

    contenedor3.appendChild(tituloo); 
    contenedor3.appendChild(miparrafo);

    //crear una tabla de multiplicar del 8 
    //que salga la tabla en una lista de viñetas 

    const contenedor4 = document.getElementById("contenedor4"); 
    const lista  = document.createElement("ul")

    for (let i=1; i<=10; i++ ){
        const elemento = document.createElement("li")
        elemento.innerText = ` 8 x ${i} = ${8 * i}`;
        lista.appendChild(elemento); 
    }
    contenedor4.appendChild(lista)

    //crear una tabla de multiplicar del 93 usando un fragmento 
    const contenedor5 = document.getElementById("contenedor5"); 
    const fragmento = document.createDocumentFragment(); 

    for (i = 1; i <=10; i++){
        const resultado = document.createElement("p"); 
        resultado.innerText = `93 x ${i} = ${93*i}`; 
        fragmento.appendChild(resultado); 
        
    }
    contenedor5.appendChild(fragmento); 

    //otra forma de agregar nuevo codigo
    contenedor5.insertAdjacentHTML("beforebegin", "<article> Hola soy articulo creado con adjacenthtml </article> ")


});
