import React from "react";
import { CreateUserForm } from "./create-user-form";

describe("<CreateUserForm />", () => {
  it("should not allow user submit if fields are not correctly filled", () => {
    cy.mount(<CreateUserForm />);

    cy.get("button").should("be.disabled");
  });

  it("should allow user submit if fields are correctly filled", () => {
    cy.mount(<CreateUserForm />);

    cy.get('input[name="name"]').type("John Doe");
    cy.get('input[name="age"]').type("20");
    cy.get("button").should("not.be.disabled");
  });
});
