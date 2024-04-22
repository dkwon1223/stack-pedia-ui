describe("Stacks UI elements", () => {
  beforeEach(() => {
    cy.viewport(1440, 683);
    cy.intercept(
      "GET",
      "https://stack-pedia-api.adaptable.app/api/v1/stacks/all",
      {
        statusCode: 200,
        fixture: "stack-data",
      }
    ).as("fetchMockStacks");
    cy.visit("http://localhost:5173/stacks");
    cy.wait(2000);
  });

  it.skip("should have all necessary nav bar UI elements", () => {
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

  it.skip("should have stack filter bar UI element", () => {
    cy.get("#stackFilterButton").should("exist");
  });

  it.skip("should have first and last stack card UI elements", () => {
    cy.get(".stackCard").first().contains("h1", "MERN Stack");
    cy.get(".stackCard").last().contains("h1", "React.js Stack");
  });
});

describe("Stacks User Flows", () => {
  beforeEach(() => {
    cy.viewport(1440, 683);
    cy.intercept(
      "GET",
      "https://stack-pedia-api.adaptable.app/api/v1/stacks/all",
      {
        statusCode: 200,
        fixture: "stack-data",
      }
    ).as("fetchMockStacks");
    cy.visit("http://localhost:5173/stacks");
    cy.wait(2000);
  });

  it.skip("should filter stacks", () => {
    cy.intercept(
      "GET",
      "https://stack-pedia-api.adaptable.app/api/v1/stacks/fullstack",
      {
        statusCode: 200,
        body: [
          {
            name: "MERN Stack",
            image_url:
              "https://almablog-media.s3.ap-south-1.amazonaws.com/MERN_Stack_9437df2ba9_62af1dd3fc.png",
            image2_url:
              "https://nitsantech.com/fileadmin/ns_theme_ns2019/blog/_live/What_is_the_MERN_stack_and_how_do_I_use_it_/What_is_the_MERN_stack_and_how_do_I_use_it.jpg",
            type: "fullstack",
            technologies: ["MongoDB", "Express.js", "React", "Node.js"],
            benefits: [
              "Single language (JavaScript) for both client and server",
              "Rich ecosystem and community support",
              "High performance and scalability",
            ],
            downsides: [
              "Complexity in managing and debugging",
              "Steep learning curve for beginners",
            ],
            companies: ["Facebook", "Netflix", "Airbnb"],
            summary:
              "The MERN (MongoDB, Express.js, React, Node.js) stack is a fullstack JavaScript framework, featuring MongoDB for the database, Express.js for the backend framework, React for the frontend library, and Node.js for the JavaScript runtime environment.",
            learn_link: "https://www.mongodb.com/mern-stack",
          },
          {
            name: "MEAN Stack",
            image_url:
              "https://media.licdn.com/dms/image/D5612AQEFBusT1xvG7A/article-cover_image-shrink_600_2000/0/1690120721509?e=2147483647&v=beta&t=BfpKdXsXaRpWWciN4OjVs49zMd_P2LTBHRNpVBomqKE",
            image2_url:
              "https://www.weblineindia.com/wp-content/uploads/2016/12/mean-stack-1.jpg",
            type: "fullstack",
            technologies: ["MongoDB", "Express.js", "Angular", "Node.js"],
            benefits: [
              "Uses JavaScript throughout the stack",
              "JSON-based data exchange",
              "Highly scalable architecture",
            ],
            downsides: [
              "Angular's steep learning curve",
              "Lack of mature libraries and tools compared to other stacks",
            ],
            companies: ["Google", "Uber", "PayPal"],
            summary:
              "The MEAN (MongoDB, Express.js, Angular, Node.js) stack is a fullstack JavaScript framework, comprising MongoDB for the database, Express.js for the backend framework, Angular for the frontend framework, and Node.js for the JavaScript runtime environment.",
            learn_link: "https://www.ibm.com/topics/mean-stack",
          },
        ],
      }
    ).as("fetchFilteredStacks");
    cy.get("#stackFilterButton")
      .click()
      .get(".filterOption")
      .first()
      .click()
      .wait(2000);
    cy.get(".stackCard").should("have.length", 3);
  });

  it("should navigate to detailed view on click of stack card", () => {
    cy.intercept(
      "GET",
      "https://stack-pedia-api.adaptable.app/api/v1/stacks/fullstack/mern%20stack",
      {
        statusCode: 200,
        body: {
          name: "MERN Stack",
          image_url:
            "https://almablog-media.s3.ap-south-1.amazonaws.com/MERN_Stack_9437df2ba9_62af1dd3fc.png",
          image2_url:
            "https://nitsantech.com/fileadmin/ns_theme_ns2019/blog/_live/What_is_the_MERN_stack_and_how_do_I_use_it_/What_is_the_MERN_stack_and_how_do_I_use_it.jpg",
          type: "fullstack",
          technologies: ["MongoDB", "Express.js", "React", "Node.js"],
          benefits: [
            "Single language (JavaScript) for both client and server",
            "Rich ecosystem and community support",
            "High performance and scalability",
          ],
          downsides: [
            "Complexity in managing and debugging",
            "Steep learning curve for beginners",
          ],
          companies: ["Facebook", "Netflix", "Airbnb"],
          summary:
            "The MERN (MongoDB, Express.js, React, Node.js) stack is a fullstack JavaScript framework, featuring MongoDB for the database, Express.js for the backend framework, React for the frontend library, and Node.js for the JavaScript runtime environment.",
          learn_link: "https://www.mongodb.com/mern-stack",
        },
      }
    ).as("fetchSingleStack");
    cy.get(".stackCard").first().click().wait(2000);
    cy.url("eq", "localhost:5173/stacks/mern stack");
    cy.get("#stackCard").contains("h1", "MERN Stack");
  });
});
