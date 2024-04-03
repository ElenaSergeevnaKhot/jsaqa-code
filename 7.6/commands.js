Cypress.Commands.add('login', (email, password) => { 
  cy.contains("Log in").click ()
  if(email)
      cy.get("#mail").type(email)
  if(password)
      cy.get("#pass").type(password)
  cy.contains ("Submit").click()
})

Cypress.Commands.add("addNewBook", (title, description, authors) => {

  cy.contains("Add new").click();

  cy.get("#title").type(title);

  cy.get("#description").type(description);

  cy.get("#authors").type(authors);

  cy.contains("Submit").click();

});