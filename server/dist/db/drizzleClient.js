"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postgres_js_1 = require("drizzle-orm/postgres-js");
const postgres_1 = __importDefault(require("postgres"));
// migrations
const migrator_1 = require("drizzle-orm/postgres-js/migrator");
// db_credentials
const drizzle_config_1 = __importDefault(require("./drizzle.config"));
//db-client + connection
const client = (0, postgres_1.default)(drizzle_config_1.default.dbCredentials);
const db = (0, postgres_js_1.drizzle)(client);
async function runMigration() {
    await (0, migrator_1.migrate)(db, { migrationsFolder: "./drizzle" });
}
runMigration()
    .then(() => {
    console.log("MIGRATION IS SUCCESSFUL");
})
    .catch((err) => {
    console.log("MIGRATION FAILED");
    console.log(err);
});
exports.default = db;
//# sourceMappingURL=drizzleClient.js.map