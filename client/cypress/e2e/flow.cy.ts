const getIframeDocument = () => {
  return (
    cy
      .get('iframe')
      // Cypress yields jQuery element, which has the real
      // DOM element under property "0".
      // From the real DOM iframe element we can get
      // the "document" element, it is stored in "contentDocument" property
      // Cypress "its" command can access deep properties using dot notation
      // https://on.cypress.io/its
      .its('0.contentDocument')
      .should('exist')
  );
};

const getIframeBody = () => {
  // get the document
  return (
    getIframeDocument()
      // automatically retries until body is loaded
      .its('body')
      .should('not.be.undefined')
      // wraps "body" DOM element to allow
      // chaining more Cypress commands, like ".find(...)"
      .then(cy.wrap)
  );
};

const logout = () => {
  cy.get('#signOut').click();
  cy.get('h1').should('contain.text', 'Login');
};

describe('app flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('signs in and buys', () => {
    cy.get('h1').should('contain.text', 'Login');
    cy.get('a').should('contain.text', 'Create an Account').click();
    cy.get('#username').type('johndoe');
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get("[type='email']").type('example@example.com');
    cy.get('#password').type('example');
    cy.get('#confirmPassword').type('example');
    cy.get("[type='submit']").click();
    logout();
    cy.get("[type='email']").type('example@example.com');
    cy.get("[type='password']").type('example');
    cy.get("[type='submit']").click();
    cy.get('h5').should('contain.text', 'SOLID CENTER');
    cy.get("a[href='/category/1']").click();
    cy.get('a[href="/category/1/product/407"]').click();
    cy.get('h1').should('contain.text', 'Apple - Northern Spy');
    cy.get('input[placeholder="Quantity"]').clear().type('5');
    cy.get("[type='submit']").click();
    cy.url().should('include', '/cart');
    cy.go('back');
    cy.go('back');
    cy.url().should('include', '/category/1');
    cy.get('a[href="/category/1/product/446"]').click();
    cy.get('h1').should('contain.text', 'Ginger - Ground');
    cy.get('input[placeholder="Quantity"]').clear().type('7');
    cy.get("[type='submit']").click();
    cy.url().should('include', '/cart');
    cy.get('td[align="right"]').should('contain.text', '$202.72');
    cy.get('.remove-item-button').first().click();
    cy.get('.remove-item-button').first().click();
    cy.get('td[align="right"]').should('contain.text', '$0.00');
    cy.go('back');
    cy.go('back');
    cy.go('back');
    cy.get("a[href='/category/2']").click();
    cy.url().should('include', '/category/2');
    cy.get('a[href="/category/2/product/443"]').click();
    cy.get('input[placeholder="Quantity"]').clear().type('2');
    cy.get("[type='submit']").click();
    cy.get('a[href="/"]').click();
    cy.get('a[href="/cart"]').click();
    logout();
  });
});
