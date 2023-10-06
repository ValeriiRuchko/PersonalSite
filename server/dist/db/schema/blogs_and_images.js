"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagesRelations = exports.images = exports.blogsRelations = exports.blogs = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
exports.blogs = (0, pg_core_1.pgTable)("blogs", {
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    title: (0, pg_core_1.varchar)("title", { length: 255 }),
    content: (0, pg_core_1.text)("content"),
    time_to_read: (0, pg_core_1.varchar)("time_to_read", { length: 255 }),
});
exports.blogsRelations = (0, drizzle_orm_1.relations)(exports.blogs, ({ many }) => ({
    images: many(exports.images),
}));
exports.images = (0, pg_core_1.pgTable)("images", {
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    image_path: (0, pg_core_1.varchar)("image_path", { length: 255 }),
    related_blog_id: (0, pg_core_1.uuid)("related_blog_id"),
});
exports.imagesRelations = (0, drizzle_orm_1.relations)(exports.images, ({ one }) => ({
    related_blog: one(exports.blogs, {
        fields: [exports.images.related_blog_id],
        references: [exports.blogs.id],
    }),
}));
//# sourceMappingURL=blogs_and_images.js.map