"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactMeData = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.contactMeData = (0, pg_core_1.pgTable)("contact_me_data", {
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    name: (0, pg_core_1.varchar)("name", { length: 255 }),
    email: (0, pg_core_1.varchar)("email", { length: 255 }),
    message: (0, pg_core_1.text)("message"),
});
//# sourceMappingURL=contact_me_data.js.map