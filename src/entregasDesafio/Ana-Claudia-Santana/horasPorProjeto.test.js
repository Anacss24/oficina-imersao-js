const { calcularHorasDeProjeto} = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("horasPorProjeto", () => {
    test("Deve retornar 72 a partir de uma listaDeFuncionalidades", () => {
        const listaDeFuncionalidades = [
            "setup", // hospedagem e repositorio (git, github)
            "responsividade", // mobile e deskotp
            "construcao_1_pagina", // pagina inicial
            "construcao_1_pagina", // pagina institucional 
            "construcao_1_pagina", // pagina de servicos 
            "formulario", // pagina de cadastro
            "ssr",
        ];

        const resultado = calcularHorasDeProjeto(listaDeFuncionalidades)

        expect(resultado).toEqual(72)
    })
})