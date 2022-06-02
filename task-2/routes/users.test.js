// Write your tests for task 2 in this file. Plan out what you need to import/require.
import app from "../app.js";
import request from "supertest";
import { test, expect, describe } from "@jest/globals";

// check if response = 200
// check if response body is { success: true, payload: array }
// check if every item in payload array is { id: any number, username: any string }
describe("get users", () => {
  test(`returns status code 200`, async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
  });

  test(`checks if response body is { success: true, payload: array }`, async () => {
    const res = await request(app).get("/users");
    expect(res.body).toEqual({ success: true, payload: expect.any(Array) });
  });

  test(`check if every item in payload array is { id: any number, username: any string }`, async () => {
    const res = await request(app).get("/users");
    expect(res.body.payload).toEqual(
      expect.arrayContaining([
        { id: expect.any(Number), username: expect.any(String) },
      ])
    );
  });
});
