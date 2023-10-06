"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    schema: "./src/db/schema/*",
    out: "./drizzle",
    driver: "pg",
    dbCredentials: {
        host: process.env.DB_HOST || "",
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
        database: process.env.DB_NAME || "",
        user: process.env.DB_USER || "",
        password: process.env.DB_PASSWORD || "",
    },
};
//# sourceMappingURL=drizzle.config.js.map