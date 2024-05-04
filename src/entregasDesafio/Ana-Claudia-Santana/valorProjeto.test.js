const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")
const moduloPacote = require("../../dominio/calculadora/Projeto/pacote")

jest.mock("../../dominio/calculadora/Projeto/pacote.js") // fake,falso, simulacao
describe("valorProjeto", () => {
    beforeAll(() =>{
        moduloPacote.calcularPacote.mockReturnValue('pacote_basico')
    })
    
    test("Valor total das funcionalidades com o da valor Hora e a taxa contratual do pacote basico", () => {
     
        const funcionalidades = [
          "setup",
          "formulario",
          "integracao_api_propria",
          "construcao_1_pagina",
          "construcao_1_pagina",
          "responsividade"
        ];
    
        const valorHora = 30;
       
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);
    
        expect(result).toEqual(2376);
      });
      test("Valor total das funcionalidades com o da valor Hora e a taxa contratual do pacote basico", () => {
     
        const funcionalidades = [
          "setup",
          "formulario",
          "integracao_api_propria",
          "construcao_1_pagina",
          "construcao_1_pagina",
          "responsividade"
        ];
    
        const valorHora = 45;
       
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);
    
        expect(result).toEqual(3564);
      });
    });