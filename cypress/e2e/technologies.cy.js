describe("Technologies UI elements", () => {
  beforeEach(() => {
    cy.viewport(1440, 683);
    cy.intercept(
      "GET",
      "https://stack-pedia-api.adaptable.app/api/v1/technologies/all",
      {
        statusCode: 200,
        fixture: "tech-data",
      }
    ).as("fetchMockTechnologies");
    cy.visit("http://localhost:5173/technologies");
    cy.wait(2000);
  });

  it("should have all necessary nav bar UI elements", () => {
    cy.get("header")
      .get("nav")
      .get('a[href="/"]')
      .get("img[alt='Logo']")
      .get("h1")
      .contains("StackPedia");
    cy.get("header")
      .get("nav")
      .get('a[href="/technologies"]')
      .contains("Technologies");
    cy.get("header").get("nav").get('a[href="/stacks"]').contains("Stacks");
  });

  it("should have technology filter bar UI element", () => {
    cy.get("#techFilterButton").should("exist");
  });

  it("should have first and last technology card UI elements", () => {
    cy.get(".techCard").first().contains("h1", "Python");
    cy.get(".techCard").last().contains("h1", "Amazon Web Services (AWS)");
  });
});

describe("Technologies User Flows", () => {
  beforeEach(() => {
    cy.viewport(1440, 683);
    cy.intercept(
      "GET",
      "https://stack-pedia-api.adaptable.app/api/v1/technologies/all",
      {
        statusCode: 200,
        fixture: "tech-data",
      }
    ).as("fetchMockTechnologies");
    cy.visit("http://localhost:5173/technologies");
    cy.wait(2000);
  });

  it("should filter technologies", () => {
    cy.intercept(
      "GET",
      "https://stack-pedia-api.adaptable.app/api/v1/technologies/languages",
      {
        statusCode: 200,
        body: [
          {
            name: "Python",
            type: "Programming Language",
            overall_type: "languages",
            creator: "Guido van Rossum",
            compatibilities: ["Django", "Flask", "NumPy", "Pandas"],
            date_created: "1991-02-20",
            image_url:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
            image2_url:
              "https://cdn.ourcodeworld.com/public-media/articles/articleocw-5c65fbda1ea05.jpg",
            use_cases: [
              "Web Development",
              "Data Analysis",
              "Machine Learning",
              "Automation",
            ],
            documentation_link: "https://docs.python.org/3/",
            summary:
              "Python is a versatile programming language known for its simplicity and readability. It is widely used in web development, data analysis, machine learning, and automation.",
          },
        ],
      }
    ).as("fetchFilteredTech");
    cy.get("#techFilterButton").click().get(".filterOption").first().click();
    cy.get(".techCard").should("have.length", 1);
  });

  it("should navigate to detailed technology view on click of technology card", () => { 
    cy.intercept(
    "GET",
    "https://stack-pedia-api.adaptable.app/api/v1/technologies/languages/python",
    {
        statusCode: 200,
        body: {
        name: "Python",
        type: "Programming Language",
        overall_type: "languages",
        creator: "Guido van Rossum",
        compatibilities: ["Django", "Flask", "NumPy", "Pandas"],
        date_created: "1991-02-20",
        image_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
        image2_url:
            "https://cdn.ourcodeworld.com/public-media/articles/articleocw-5c65fbda1ea05.jpg",
        use_cases: [
            "Web Development",
            "Data Analysis",
            "Machine Learning",
            "Automation",
        ],
        documentation_link: "https://docs.python.org/3/",
        summary:
            "Python is a versatile programming language known for its simplicity and readability. It is widely used in web development, data analysis, machine learning, and automation.",
        },
    }
    ).as("fetchSingleTech")
    cy.get(".techCard").first().click().wait(2000);
    cy.url("eq", "localhost:5173/technologies/python");
    cy.get("#techCard").contains("h1", "Python")
  });
});
