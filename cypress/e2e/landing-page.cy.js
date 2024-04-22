describe('Landing Page UI', () => {
  beforeEach(() => {
    cy.viewport(1440, 683)
    .visit("http://localhost:5173/")
  });

  it("should have all necessary nav bar UI elements", () => {
    cy.get("header").get("nav").get('a[href="/"]').get("img[alt='Logo']").get("h1").contains("StackPedia")
    cy.get("header").get("nav").get('a[href="/technologies"]').contains("Technologies")
    cy.get("header").get("nav").get('a[href="/stacks"]').contains("Stacks")
  });

  it("should have all necessary hero UI elements", () => {
    cy.get("#home").get("#greetingText").get("h1").get("span").contains("Explore new technologies")
    cy.get("#home").get("#greetingText").get("h1").get("span").contains("stack")
    cy.get("#home").get("#greetingText").get("h1").contains("Discover your")
    cy.get("#home").get("#greetingText").get("p").contains("Your destination to evolve as a developer. Innovate and grow your tools.")
    cy.get("#home").get("#greetingText").get("a[href='#info']").get("button").contains("Learn More")
    cy.get("#heroStats").contains("p", "40+")
    cy.get("#heroStats").contains("p", "Technologies")
    cy.get("#heroStats").contains("p", "10+")
    cy.get("#heroStats").contains("p", "Tech Stacks")
  });

  it("should have all necessary information UI elements", () => {
    cy.get("#home").get("#greetingText").get("a[href='#info']").click()
    cy.get("#infoImage").should("exist")
    cy.get("#infoText").get("h1").contains("span", "Tech Stacks...")
    cy.get("#infoText").get("h1").contains("span", "Tech Stacks...")
    cy.get("#infoText").get("h1").contains("span", "explained")
    cy.get("#infoText").contains("p", "What is a tech stack?")
    cy.get("#infoText").contains("p", "In the context of modern web applications")
    cy.get("#infoText").contains("p", "Why are they important?")
    cy.get("#infoText").contains("p", "Most applications are built to be used by a large number of people")
    cy.get("#infoText").contains("p", "Which one is the best?")
    cy.get("#infoText").contains("p", "There is no one \"right\" tech stack")
  });
})

describe("Landing Page User Flow", () => {
  beforeEach(() => {
    cy.viewport(1440, 683)
    .visit("http://localhost:5173/")
  });

  it("should navigate/scroll to information when 'Learn More' button is clicked", () => {
    cy.get("#heroLearnMoreButton").click()
    cy.url().should("eq", "http://localhost:5173/#info")
  })

  it("should navigate to technologies via Nav", () => {
    cy.intercept("GET", "https://stack-pedia-api.adaptable.app/api/v1/technologies/all", {
      statusCode: 200,
      fixture: "tech-data"
    }).as("fetchMockTechnologies")
    cy.get("header").get("nav").get("#navTechLink").click()
    cy.url().should("eq", "http://localhost:5173/technologies")
    cy.wait(2000)
    cy.get("#technologyGrid").should("exist")
  })

  it("should navigate to stacks via Nav", () => {
    cy.intercept("GET", "https://stack-pedia-api.adaptable.app/api/v1/stacks/all", {
      statusCode: 200,
      fixture: "stack-data"
    }).as("fetchMockStacks")
    cy.get("header").get("nav").get("#navStackLink").click()
    cy.url().should("eq", "http://localhost:5173/stacks")
    cy.wait(2000)
    cy.get("#stacksGrid").should("exist")
  })

  it("should navigate to technologies via button in information section", () => {
    cy.intercept("GET", "https://stack-pedia-api.adaptable.app/api/v1/technologies/all", {
      statusCode: 200,
      fixture: "tech-data"
    }).as("fetchMockTechnologies")
    cy.get("#infoTechButton").click()
    cy.url().should("eq", "http://localhost:5173/technologies")
    cy.wait(2000)
    cy.get("#technologyGrid").should("exist")
  })

  it("should navigate to stacks via button in information section", () => {
    cy.intercept("GET", "https://stack-pedia-api.adaptable.app/api/v1/stacks/all", {
      statusCode: 200,
      fixture: "stack-data"
    }).as("fetchMockStacks")
    cy.get("#infoStackButton").click()
    cy.url().should("eq", "http://localhost:5173/stacks")
    cy.wait(2000)
    cy.get("#stacksGrid").should("exist")
  })
})