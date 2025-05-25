describe('Submit Restaurant Rating', () => {


  beforeEach(() => {
    cy.visit("http://localhost:5173/")
  })

  // fill each input with the data listed
  it("Create a booking", () => {
    cy.get('[data-cy="input-name"]').type("The Corner Store");
    cy.get('[data-cy="input-address"]').type("Auburn, WA");
    cy.get('[data-cy="input-phone"]').type("253-123-4567");
    cy.get('[data-cy="input-cuisine"]').type("Fast Food");
    cy.get('[data-cy="input-rating"]').type("1");


    // verify data was posted and is visible on the page
    cy.get('[data-cy="form-submit"').submit();
    cy.get(`[data-cy="5 The Corner Store"] ul`).within(() => {
      cy.contains('li', 'Auburn, WA').should('be.visible');
      cy.contains('li', "253-123-4567").should('be.visible');
      cy.contains('li', 'Fast Food').should('be.visible');
      cy.contains('li', '1').should('be.visible');
    });
  })
})