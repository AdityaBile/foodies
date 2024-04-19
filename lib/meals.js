import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  // Used just for checking loaging page
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //Error
  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all();
}
