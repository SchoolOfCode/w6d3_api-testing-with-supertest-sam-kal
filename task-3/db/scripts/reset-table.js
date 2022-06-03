import { resetUsersTable } from "../helpers.js";
import { pool } from "../index.js";

// removed --detectOpenHandles from test script and added below
beforeAll((done) => {
  done();
});
afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  pool.end();
  done();
});

try {
  await resetUsersTable();
  console.log("Dropped, re-created and re-seeded 'users' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
