describe('First test', () => {
  it('Find button on app', () => {
    cy.visit('/');
    cy.contains('Access');
    cy.get('.button').click();

    cy.contains('Create note');
    cy.get('form > div:nth-child(1) > input[type="text"]')
      .type('note').should('have.value', 'note');
    cy.get('form > div:nth-child(2) > input[type="text"]')
      .type('description').should('have.value', 'description');

    cy.get('.button').click();
    cy.get('.ui.cards')
      .contains('note');
  });
});