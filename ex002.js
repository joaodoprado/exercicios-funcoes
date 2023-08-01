const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if(this.ligado == true) {
            console.log("Este carro já está ligado.")
        } else if (this.ligado == false) {
            this.ligado = true
            imprimir()
        }
    },
    desligar: function () {
        if(this.ligado == false) {
            console.log("Este carro já está desligado.")
            velocidade = 0
        } else if (this.ligado == true) {
            this.ligado = false
            this.velocidade = 0
            imprimir()
        }
    },
    acelerar: function () {
        if(this.ligado == false) {
            console.log("Não é possível acelerar um carro desligado.")
        } else {
            this.velocidade += 10
            imprimir()
        }
    },
    desacelerar: function () {
        if(this.ligado == false) {
            console.log("Não é possível desacelerar um carro desligado.")
        } else {
            this.velocidade -= 10
            imprimir()
        }
    }
}

function imprimir(){
    if(carro.ligado == true) {
        console.log(`Carro ligado. Velocidade ${carro.velocidade}`)
    } else if (carro.ligado == false) {
        console.log(`Carro desligado. Velocidade ${carro.velocidade}`)
    } else if (carro.velocidade != 0) {
        console.log(`Carro ligado. Velocidade ${Velocidade}`)
    } else if (carro.velocidade > 0) {
        console.log(`Carro ligado. Velocidade ${Velocidade} `)
    }
}
carro.desligar(carro)
carro.ligar(carro)
carro.ligar(carro)
carro.acelerar(carro)
carro.acelerar(carro)
carro.desacelerar(carro)
carro.desligar(carro)
carro.acelerar(carro)
carro.desacelerar(carro)