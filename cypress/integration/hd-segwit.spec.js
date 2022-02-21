describe('hd segwit', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/hd-segwit');
  });

  it('should have a clickable button', () => {
    cy.get('button.primary-button')
      .should('exist')
      .contains('Generate')
      .click();
  });
});
