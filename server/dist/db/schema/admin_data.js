"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminData = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.adminData = (0, pg_core_1.pgTable)("admin_data", {
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    login: (0, pg_core_1.varchar)("login", { length: 255 }),
    password_hash: (0, pg_core_1.varchar)("password_hash", { length: 255 }),
    is_logged: (0, pg_core_1.boolean)("is_logged"),
});
//# sourceMappingURL=admin_data.js.map