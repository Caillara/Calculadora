class Calculadora {
    constructor(mostrarValorActual, mostrarValorAnterior){
        this.mostrarValorActual = mostrarValorActual;
        this.mostrarValorAnterior = mostrarValorAnterior;
        this.valorActual = "";
        this.valorAnterior = "";
        this.operacion = undefined
    }

    agregarNumero(numero){
        if(numero === "." && this.valorActual.includes(".")) return

        this.valorActual = this.valorActual + numero
    }

    imprimir(){
        this.mostrarValorActual.innerText = this.valorActual
        this.mostrarValorAnterior.innerText = this.valorAnterior
    }

    borrar(){
        this.valorActual = this.valorActual.slice(0, -1)
    }

    borrarTodo(){
        this.valorActual = ""
        this.valorAnterior = ""

    }

    elegirOperacion(operador){
        if(this.valorActual === "") return
        if(this.valorAnterior != ""){
            this.resolverCalculo()
        }
        this.operacion = operador
        this.valorAnterior = this.valorActual
        this.valorActual = ""
    }

    resolverCalculo(){
        let resultado
        let conversionValorActual = parseFloat(this.valorActual)
        let conversionValorAnterior = parseFloat(this.valorAnterior)
        
        switch (this.operacion) {
            case "+":
                resultado = conversionValorAnterior + conversionValorActual
                break;
            case "-":
                resultado = conversionValorAnterior - conversionValorActual
                break;
            case "x":
                resultado = conversionValorAnterior * conversionValorActual
                break;
            case "÷":
                resultado = conversionValorAnterior / conversionValorActual
                break;

            default: return
        }

        this.valorActual = resultado
        this.valorAnterior = ""
        this.operacion = undefined
    }
}