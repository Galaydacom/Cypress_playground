describe('Form block', function() {
    it('should change title on button click', function() {
      cy.visit("index.html");
      cy.get("#pole").type("Какая-нибудь строка"); //нашли элемент через селектор, а потом через type ввели значение в поле
      cy.get("button").click(); 
      cy.get("h1").should("have.text", "Какая-нибудь строка");
    })
  })