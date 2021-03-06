import { test, expect } from "@jest/globals";

/**
 * Before we start testing APIs, let's get some practice with Jest matchers. Matchers allow us to check if a value meets our expectations.
 *
 * Where necessary, have a look at the Jest docs: https://jestjs.io/docs/expect
 */

/**
 * Write a test that checks whether the variable `actual` contains an object that has the following structure:
 *
 *    {
 *      success: true
 *    }
 *
 * The test has been partially written for you, but you'll need to complete it.
 */
test("Has the structure { success: true }", function () {
  const actual = {
    success: true,
  };
  const expected = {
    success: true,
  };

  expect(actual).toStrictEqual(expected);
});

/**
 * Write a test that checks whether the variable `actual` contains an object that has the following structure:
 *
 *    {
 *      copiesSold: any number,
 *      title: any string
 *    }
 *
 * If you're stuck on how to match any number/string, have a look at: https://jestjs.io/docs/expect#expectanyconstructor
 *
 * The test has been partially written for you, but you'll need to complete it.
 */
test("Has the structure { copiesSold: any number, title: any string }", function () {
  const actual = {
    copiesSold: 5014,
    title: "THE LIGHTHOUSE (1984)",
  };

  const expected = {
    copiesSold: expect.any(Number),
    title: expect.any(String),
  };
  expect(actual).toStrictEqual(expected);
});

/**
 * Write a test that checks whether the asynchronous function `getAuthentication`, when called, resolves to an object that has the following structure:
 *
 *    {
 *      success: true,
 *      payload: {
 *        hasAuthenticated: true,
 *        isAdmin: false,
 *        userId: any number
 *      }
 *    }
 *
 * Since `getAuthentication` is asynchronous, you may need to read up on how to write an asynchronous test in Jest: https://jestjs.io/docs/asynchronous
 *
 * The test has been partially written for you, but you'll need to complete it.
 * 
 * test("Has the structure { success: true, payload: { hasAuthenticated: true, isAdmin: false, userId: any number } }", async function () {
  async function getAuthentication() {
    return await {
      success: true,
      payload: {
        hasAuthenticated: true,
        isAdmin: false,
        userId: 125095,
      },
    };
  }
  expect({
    success: true,
    payload: {
      hasAuthenticated: true,
      isAdmin: false,
      userId: 125095,
    },
  }).toMatchObject(getAuthentication());
});
 */
test("Has the structure { success: true, payload: { hasAuthenticated: true, isAdmin: false, userId: any number } }", async function () {
  async function getAuthentication() {
    return {
      success: true,
      payload: {
        hasAuthenticated: true,
        isAdmin: false,
        userId: 125095,
      },
    };
  }
  expect(await getAuthentication()).toMatchObject({
    success: true,
    payload: {
      hasAuthenticated: true,
      isAdmin: false,
      userId: expect.any(Number),
    },
  });
});

/**
 * Write a test that checks whether the asynchronous function `getUsernames`, when called, resolves to an object that has the following structure:
 *
 *    {
 *      success: true,
 *      payload: an array of objects with the structure { username: any string },
 *    }
 *
 * Only the function has been provided. You'll have to write everything else.
 *
 * Since `getUsernames` is asynchronous, you may need to read up on how to write an asynchronous test in Jest: https://jestjs.io/docs/asynchronous
 *
 * This time the test has not been written for you, you'll need to write it from scratch.
 */

test(`getUsernames has structure of { success: true, payload: an array of objects with the structure { username: any string }}`, async () => {
  async function getUsernames() {
    return {
      success: true,
      payload: [
        { username: "A" },
        { username: "B" },
        { username: "C" },
        { username: "D" },
      ],
    };
  }
  expect(await getUsernames()).toMatchObject({
    success: true,
    payload: [
      { username: expect.any(String) },
      { username: expect.any(String) },
      { username: expect.any(String) },
      { username: expect.any(String) },
    ],
  });
});
