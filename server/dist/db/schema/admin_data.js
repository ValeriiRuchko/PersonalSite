import { pgTable, uuid, varchar, boolean } from "drizzle-orm/pg-core";
export const adminData = pgTable("admin_data", {
    id: uuid("id").primaryKey().defaultRandom(),
    login: varchar("login", { length: 255 }),
    password_hash: varchar("password_hash", { length: 255 }),
    is_logged: boolean("is_logged"),
});
//# sourceMappingURL=admin_data.js.map