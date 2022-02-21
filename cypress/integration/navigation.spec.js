describe('navigation routes', () => {
  it('should render root', () => {
    cy.visit('localhost:3000');
    cy.get('.landing-actions').should('exist');
  });

  it('should render mnemonic', () => {
    cy.visit('localhost:3000/mnemonic');
    cy.get('.mnemonic').should('exist');
    cy.get('button.primary-button').should('exist');
  });

  it('should render hd segwit demo', () => {
    cy.visit('localhost:3000/hd-segwit');
    cy.get('.hd-segwit').should('exist');
    cy.get('button.primary-button').should('exist').contains('Generate').click();
  });

  it('should render ethereum connection demo', () => {
    cy.visit('localhost:3000/ethereum-connection');
    cy.get('.ethereum-connection').should('exist');
  });
});
