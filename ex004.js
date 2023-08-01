const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo = valor + this.saldo
        this.historicos.unshift(`tipo: 'Deposito', valor ${valor/100} `)
        
        console.log(`Deposito de R$${valor/100} realizado para o(a) cliente: ${this.nome}`)
        
    },
    sacar: function (valor) {
        if (this.saldo < valor) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`)
        } else if (this.saldo > valor){
            this.saldo = (this.saldo - valor) / 100
            this.historicos.unshift(`tipo: "Saque", valor: ${valor/100}`)
            console.log(`Saque de R$${valor/100} realizado para o cliente: ${this.nome}`)
        }
    },
        extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$${this.saldo}`)
        console.log(`Historico:${this.historicos}`)
        console.log(`Depósito de $100`)
        console.log(`Saque de $50`)
    }

}


console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());