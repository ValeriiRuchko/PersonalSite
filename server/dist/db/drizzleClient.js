import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import drizzleConfig from "./drizzle.config.js";
const client = postgres(drizzleConfig.dbCredentials);
const db = drizzle(client);
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
//# sourceMappingURL=drizzleClient.js.map