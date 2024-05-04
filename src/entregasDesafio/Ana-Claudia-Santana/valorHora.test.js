//describe, nome da função ou classe que estamos testando

//test -> função que realiza o nosso teste

const modulo = require("../../dominio/calculadora/Hora/valorHora")

// 1 parametro O que? 
describe('calcularValorPorHora', () =>{
    test('Deve retornar dado o salario 1412 rtorna 9 por hora', () =>{
        const rendaMensal = 1412 // cenario
        // pula
        const resultado = modulo.calcularValorPorHora(rendaMensal) // comportamento
        // pula
        expect(resultado).toEqual(9) // validação
    })
})