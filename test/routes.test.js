const request = require("supertest");
const app = require("../app");

const mockLoginRequiredAuthMiddleware = (req, res, next) => {
  req.user = { id: 1 }; // Simulate a logged-in user
  next();
};

app.use(mockLoginRequiredAuthMiddleware);

describe("Routes Testing", () => {
  it("should return the home page", async () => {
    return request(app)
      .get("/")
      .expect("Content-Type", /html/)
      .expect(200)
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});

// const mockLoginRequiredAuthMiddleware = (req, res, next) => {
//   req.user = { id: 1 }; // Simulate a logged-in user
//   next();
// };

// Apply the mock middleware
// app.use(mockLoginRequiredAuthMiddleware);

// describe("Projects API", () => {
//   it("should create a project", async () => {
//     const response = await request(app)
//       .post("/api/create-project")
//       .send({ name: "Test Project" });

//     expect(response.status).toBe(201);
//     expect(response.body).toHaveProperty("id"); // Adjust based on your handler response
//   });

//   it("should delete a project", async () => {
//     const response = await request(app).get("/api/delete-project/1");

//     expect(response.status).toBe(200);
//     // Add additional assertions based on your handler response
//   });

//   it("should get project settings", async () => {
//     const response = await request(app).get("/api/project-settings/1");

//     expect(response.status).toBe(200);
//     // Add additional assertions based on your handler response
//   });

//   it("should display login forms", async () => {
//     const response = await request(app).get("/api/login-forms/1");

//     expect(response.status).toBe(200);
//     // Add additional assertions based on your handler response
//   });

//   it("should display signup forms", async () => {
//     const response = await request(app).get("/api/signup-forms/1");

//     expect(response.status).toBe(200);
//     // Add additional assertions based on your handler response
//   });

//   it("should change project status", async () => {
//     const response = await request(app)
//       .post("/api/change-project-status/1")
//       .send({ status: "completed" });

//     expect(response.status).toBe(200);
//     // Add additional assertions based on your handler response
//   });

//   it("should add a login form", async () => {
//     const response = await request(app)
//       .post("/api/select-project-signup-form/")
//       .send({
//         projectId: 1,
//         formDetails: {
//           /* form details */
//         },
//       });

//     expect(response.status).toBe(201);
//     // Add additional assertions based on your handler response
//   });
// });
