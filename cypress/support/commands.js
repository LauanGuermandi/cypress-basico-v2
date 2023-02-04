Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
  cy.get('#firstName')
      .type('Lauan')

    cy.get('#lastName')
      .type('Guermandi')

    cy.get('#email')
      .type('lauanguermandi@gmail.com')

    cy.get('#open-text-area')
      .type('teste')
})
