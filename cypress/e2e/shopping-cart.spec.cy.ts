describe('Shopping Cart', () => {
  it('users can add products to the cart', () => {
    cy.visit('/');
    cy.getByClassName('relative block aspect-square h-full w-full').eq(0).click();
    cy.get('button[title="Size M"]').click();
    cy.get('[aria-label="Add to cart"]').click();
    cy.get('.w-6').should('contain', '1');
  });

  it('shopping cart can contain mutiple items', () => {
    cy.visit('/');
    cy.getByClassName('relative block aspect-square h-full w-full').eq(0).click();
    cy.get('button[title="Size M"]').click();
    cy.get('[aria-label="Add to cart"]').click();
    cy.get('.w-6');
    cy.get('.inset-0').click();
    cy.get('img[alt="long shirt"]').click();
    cy.get('.mb-2').should('contain', 'long shirt');
    cy.get('[title="Size L"]').click();
    cy.get('[aria-label="Add to cart"]').click();
    cy.get('span[class="leading-tight"]').should('have.length', 2);
  });
});
