import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
// migrations
import { migrate } from "drizzle-orm/postgres-js/migrator";
import drizzleConfig from "./drizzle.config.js";

import { adminData } from "#db_schema/admin_data";
import * as blogs_and_images from "#db_schema/blogs_and_images";
import { projects } from "#db_schema/projects";
import { contactMeData } from "#db_schema/contact_me_data";

const schema = {
  ...adminData,
  ...blogs_and_images,
  ...projects,
  ...contactMeData,
};
// db_credentials

//db-client + connection
const client = postgres(drizzleConfig.dbCredentials);

const db = drizzle(client, { schema });

async function runMigration() {
  await migrate(db, { migrationsFolder: "./drizzle" });
}

runMigration()
  .then(() => {
    console.log("MIGRATION IS SUCCESSFUL");
  })
  .catch((err) => {
    console.log("MIGRATION FAILED");
    console.log(err);
  });

export default db;
