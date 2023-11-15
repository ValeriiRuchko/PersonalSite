import { pgTable, uuid, text, varchar } from "drizzle-orm/pg-core";
export const contactMeData = pgTable("contact_me_data", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }),
    email: varchar("email", { length: 255 }),
    message: text("message"),
});
//# sourceMappingURL=contact_me_data.js.map