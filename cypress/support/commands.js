Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Wilson')
    cy.get('#lastName').type('Barboza Silva Santos')
    cy.get('#email').type('willssan04@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button','Enviar').click()
    cy.get('.success').should('be.visible')
})