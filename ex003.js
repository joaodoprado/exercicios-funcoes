
let quantidade = 0;
let preco = 0;
let precoTotal = 0;

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        
        let i = 0; i < carrinho.produtos.length;

        for(item of carrinho.produtos) {
             
            quantidade += carrinho.produtos[i].qtd
            

            preco += (carrinho.produtos[i].precoUnit * carrinho.produtos[i].qtd) / 100
            
            i++
            
        }
        

        console.log(`Cliente: ${carrinho.nomeDoCliente}`)
        console.log(`Total de itens: ${quantidade}`)
        console.log(`Total a pagar: ${preco.toFixed(2)}`)
    },
    addProduto: function (carrinho, produto) {
        let i = 0; i < carrinho.produtos.length; 

        if (produto.id == carrinho.produtos[i].id) {
            quantidade += produto.qtd
        }else if (produto.id == carrinho.produtos[i]){
        quantidade += produto.qtd
        } else {
        carrinho.produtos.push(produto)
        }

        i++

    }, 
    imprimirDetalhes: function () {
        i = 1; i < carrinho.produtos.length; 
        for (item of carrinho.produtos) {
            console.log(`Item ${i} - ${item.nome} - ${item.qtd} und - R$ ${item.precoUnit * item.qtd / 100}`)
            i++
        }
    },

    
    
}

 
    const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

    const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}








carrinho.addProduto(carrinho, novoTenis);
carrinho.addProduto(carrinho, novaBermuda);
carrinho.imprimirDetalhes();
carrinho.imprimirResumo();
