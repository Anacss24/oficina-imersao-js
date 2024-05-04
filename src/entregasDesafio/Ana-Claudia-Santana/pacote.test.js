const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")

describe('pacote', () =>{
    // test("Deve retornar pacote pacote_basico, quando o totalDeHorasPorProjeto for menor que 50", () => {
    //     const totalDeHorasPorProjeto = 49

    //     const result = calcularPacote(totalDeHorasPorProjeto)

    //     expect(result).toEqual("pacote_basico")
    // });
    test("Deve retornar pacote pacote_basico, quando o totalDeHorasPorProjeto seja igual a 50", () => {
        const totalDeHorasPorProjeto = 50

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual("pacote_basico")
    });


})