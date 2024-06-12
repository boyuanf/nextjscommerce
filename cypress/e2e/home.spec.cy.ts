describe('Home Page', () => {
  it('displays all 3 products on the home page', () => {
    cy.visit('/');
    cy.get(
      '*[class^="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2"]'
    ).within(() => {
      cy.get('*[class^="md:col-span-4 md:row-span-2"]').within(() => {
        cy.get('img').should('have.attr', 'alt', 'extra shirt');
        cy.get('*[class^="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight"]').should(
          'contain',
          'extra shirt'
        );
        cy.get('*[class^="flex-none rounded-full bg-blue-600 p-2 text-white"]').should(
          'contain',
          '$45.00'
        );
      });
      cy.get('*[class^="md:col-span-2 md:row-span-1"]')
        .eq(0)
        .within(() => {
          cy.get('*[class^="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight"]').should(
            'contain',
            'long shirt'
          );
          cy.get('*[class^="flex-none rounded-full bg-blue-600 p-2 text-white"]').should(
            'contain',
            '$36.00'
          );
        });
      cy.get('*[class^="md:col-span-2 md:row-span-1"]')
        .eq(1)
        .within(() => {
          cy.get('*[class^="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight"]').should(
            'contain',
            'short t-shirt'
          );
          cy.get('*[class^="flex-none rounded-full bg-blue-600 p-2 text-white"]').should(
            'contain',
            '$25.00'
          );
        });
    });
  });
});
