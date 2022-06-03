import app from "../app.js";
import request from "supertest";
import { describe, test, expect } from "@jest/globals";

// GET /users
describe(`get users`, () => {
  test(`get all users`, async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
  });
  test(`checks if response body is {
    success: true,
    payload: users,
  }`, async () => {
    const res = await request(app).get("/users");
    expect(res.body).toEqual({
      success: true,
      payload: expect.any(Array),
    });
  });
});

// GET /users?username=some_username
describe(`get user by username`, () => {
  test(`Given a username, return user with that particular username`, async () => {
    const res = await request(app).get("/users?username=Catherine");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      success: true,
      payload: [
        {
          id: expect.any(Number),
          username: expect.any(String),
        },
      ],
    });
  });
});

// GET /users/:id
describe(`get user by id`, () => {
  test(`Given a id number, return a user with that id`, async () => {
    const res = await request(app).get("/users/10");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      success: true,
      payload: {
        id: expect.any(Number),
        username: expect.any(String),
      },
    });
  });
  test(`Given an incorrect id number, returns 404 and an error message`, async () => {
    const res = await request(app).get("/users/201");
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({
      success: false,
      reason: `No user with that ID 201 was found!`,
    });
  });
});

// POST /users
describe(`post new users`, () => {
  test(`Given a new user, add it to the database`, async () => {
    const res = await request(app).post("/users").send({ username: "Joe" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({
      success: true,
      payload: expect.any(Object),
    });
  });
});

// DELETE /users/:id
describe(`delete user`, () => {
  test(`Given an id, delete user with that particular id`, async () => {
    const res = await request(app).delete("/users/69");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      success: true,
    });
  });
});
