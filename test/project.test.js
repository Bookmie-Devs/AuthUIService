const request = require("supertest");
const app = require("../app");

describe("Project testing", () => {
  it("Should create a project", async () => {
    return request(app)
      .post("/projects/create-project/")
      .send({ project_name: "Testing Project" })
      .expect(200);
  });
});
