

function corrigirProva(prova) {
    let contadorDeCorretas = 0
    let nota = 0
    

       
            for(questao of prova.questoes) {
                if (questao.resposta == questao.correta) {
                    contadorDeCorretas += 1
                }
            }
        
    
    nota = contadorDeCorretas * 2
    console.log(`O aluno(a) ${prova.aluno} acertou ${contadorDeCorretas} questões e obteve nota ${nota}`)
}


const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
}

corrigirProva(prova)