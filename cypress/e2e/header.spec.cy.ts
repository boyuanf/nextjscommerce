describe('Header', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('links to the correct pages', () => {
    cy.getByClassName(
      'flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl'
    ).click();
    cy.location('pathname').should('eq', '/');
  });

  it('the search bar returns the correct search results', () => {
    cy.get('input[name="search"]').type('long{enter}');
    cy.get('.mb-4');
    cy.getByClassName('mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight').should(
      'contain',
      'long shirt'
    );
    cy.getByClassName('flex-none rounded-full bg-blue-600 p-2 text-white').should(
      'contain',
      '$36.00'
    );
    // cy.get('*[class^="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight"]').should("contain", "long shirt")
    // cy.get('*[class^="flex-none rounded-full bg-blue-600 p-2 text-white"]').should("contain", "$36.00")
  });
});
