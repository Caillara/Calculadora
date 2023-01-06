const calculadora = new Calculadora(mostrarValorActual, mostrarValorAnterior)

for(const boton of botonNumeros){
    boton.addEventListener("click", () => {
        calculadora.agregarNumero(boton.innerText)
        calculadora.imprimir()
    })
}

botonBorrar.addEventListener("click", () => {
    calculadora.borrar()
    calculadora.imprimir()
})

botonBorrarTodo.addEventListener("click", () => {
    calculadora.borrarTodo()
    calculadora.imprimir()
})

for(const boton of botonOperadores){
    boton.addEventListener("click", () => {
        calculadora.elegirOperacion(boton.innerText)
        calculadora.imprimir()
    })
}