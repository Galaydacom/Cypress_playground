describe('блок, который должен отображать ID', function() {
    it('отображает ID после успешного получения запроса', function() {
      cy.visit("index.html");
      cy.get("div");
      cy.server();
      cy.route({
        method: 'GET',
        url: '"https://8mc9jttzol.execute-api.eu-west-1.amazonaws.com/dev/is_offer_running"',
      }).as('is_offer_running')
      // cy.request('https://jsonplaceholder.cypress.io/comments').as('is_offer_running');
      cy.visit("index.html");
      cy.wait("@is_offer_running");
      cy.get("div").should("have.text", "e4fdde05-01cc-4518-a9d5-07f6cae061b3");
    })
})