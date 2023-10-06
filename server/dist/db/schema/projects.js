"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projects = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.projects = (0, pg_core_1.pgTable)("projects", {
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    name: (0, pg_core_1.varchar)("name", { length: 255 }),
    description: (0, pg_core_1.text)("description"),
    github_link: (0, pg_core_1.varchar)("github_link", { length: 255 }),
    is_openSource: (0, pg_core_1.boolean)("is_openSource"),
});
//# sourceMappingURL=projects.js.map