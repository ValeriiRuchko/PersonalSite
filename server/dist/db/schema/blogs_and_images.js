import { pgTable, uuid, text, varchar, date } from "drizzle-orm/pg-core";
export const blogs = pgTable("blogs", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: varchar("title", { length: 255 }),
    content: text("content"),
    time_to_read: varchar("time_to_read", { length: 255 }),
    date_of_creation: date("date_of_creation").defaultNow(),
    title_image_path: varchar("title_image_path", { length: 255 }),
});
//# sourceMappingURL=blogs_and_images.js.map