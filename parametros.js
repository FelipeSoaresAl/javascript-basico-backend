// parametros de funções

function soma( numero1, numero2){
    return numero1 + numero2;
}

console.log(soma(2,2))
console.log(soma(10,2))
console.log(soma(-3,2))
console.log(soma(87,85))

// parametros x argumentos

// ordens dos parametros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e tenho ${idade} anos`
}
console.log(nomeIdade("Felipe", 30))

function multiplicar(numero1 = 1, numero2 = 1){
    return numero1 * numero2
}
console.log(multiplicar(soma(4,5)))
