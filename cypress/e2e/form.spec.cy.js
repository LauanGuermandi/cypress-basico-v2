/// <reference types="Cypress">

describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(function() {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', function() {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos e envia o formulário', function() {
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.button')
      .click()

    cy.get('.success')
      .should('be.visible')
  })

  it('deve exibir mensagem de erro ao inserir email inválido', function() {
    cy.get('#firstName')
      .type('Lauan')

    cy.get('#lastName')
      .type('Guermandi')

    cy.get('#product')
      .select('YouTube')

    cy.get('#email')
      .type('lauanguermandi.gmail.com')

    cy.get('#open-text-area')
      .type('teste')

    cy.get('.button')
      .click()

    cy.get('.error')
      .should('be.visible')
  })

  it('campo telefone deve continuar vazio após a inserção de um caracter não numerico', function() {
    cy.get('#phone')
      .type('ABC')
      .should('be.empty')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('#product')
      .select('YouTube')

    cy.get('#phone-checkbox')
      .click()

    cy.get('.button')
      .click()
    
    cy.get('.error')
      .should('be.visible')
  });

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.get('.button')
      .click()
    
    cy.get('.error')
      .should('be.visible')
  });
})
