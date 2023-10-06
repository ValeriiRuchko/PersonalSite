import { pgTable, uuid, text, varchar, boolean } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }),
  description: text("description"),
  github_link: varchar("github_link", { length: 255 }),
  is_openSource: boolean("is_openSource"),
});
