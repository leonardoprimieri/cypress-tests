describe("Create User", () => {
  it("Should be able to create a user", () => {
    cy.visit("/");

    cy.get("input[name='name']").type("John Doe");
    cy.get("input[name='age']").type("22");

    cy.get("button[type='submit']").click();
  });
});
