import React from "react";
import { NewsletterInput } from "./newsletter-input";

describe("<NewsletterInput />", () => {
  it("should show message if accepted", () => {
    cy.mount(<NewsletterInput />);

    cy.get('input[type="checkbox"]').check();
    cy.get(
      'span:contains("By checking this box you agree to receive our newsletter")'
    ).should("be.visible");
  });

  it("should not show message not if accepted", () => {
    cy.mount(<NewsletterInput />);

    cy.get(
      'span:contains("By checking this box you agree to receive our newsletter")'
    ).should("not.exist");
  });
});
