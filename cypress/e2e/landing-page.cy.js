describe('Landing Page UI', () => {
  beforeEach(() => {
    cy.viewport(1440, 683)
    .visit("https://stack-pedia-ui.vercel.app/")
  });

  it("should have all necessary nav bar UI elements", () => {
    cy.get("header").get("nav").get('a[href="/"]').get("img[alt='Logo']").get("h1").contains("StackPedia")
    cy.get("header").get("nav").get('a[href="/technologies"]').contains("Technologies")
    cy.get("header").get("nav").get('a[href="/stacks"]').contains("Stacks")
  });

  it("should have all necessary hero UI elements", () => {
    cy.get("#home").get("#greetingText").get("h1").contains("Explore new technologies Discover your stack")
  })




})