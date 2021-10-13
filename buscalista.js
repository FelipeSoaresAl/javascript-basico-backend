const alunos = ['João', 'Julia', 'Caio', 'Ana']
const mediaDosAlunos = [10,8,7.5,9]

let listaDeNotasEAlunos = [alunos,mediaDosAlunos]   


//includes - boleano
// indexOf - número do indice (Ana = 3)


const exibeNomeNota = (nomedoaluno) => {
    if (listaDeNotasEAlunos[0].includes(nomedoaluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomedoaluno)
                                //[0][3]                                  //[mediaDosAlunos][3]
        return listaDeNotasEAlunos[0][indice] + ', Sua média é ' + listaDeNotasEAlunos[1][indice] 
    } else {
        return 'Foi mal, este Aluno não está cadastrado'

    }
}

console.log(exibeNomeNota('Ana'))
console.log(exibeNomeNota('Julia'))
console.log(exibeNomeNota('João'))
console.log(exibeNomeNota('Caio'))
console.log(exibeNomeNota('Felipe'))