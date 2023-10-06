import { pgTable, uuid, text, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const blogs = pgTable("blogs", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }),
  content: text("content"),
  time_to_read: varchar("time_to_read", { length: 255 }),
});

export const blogsRelations = relations(blogs, ({ many }) => ({
  images: many(images),
}));

export const images = pgTable("images", {
  id: uuid("id").primaryKey().defaultRandom(),
  image_path: varchar("image_path", { length: 255 }),
  related_blog_id: uuid("related_blog_id"),
});

export const imagesRelations = relations(images, ({ one }) => ({
  related_blog: one(blogs, {
    fields: [images.related_blog_id],
    references: [blogs.id],
  }),
}));
