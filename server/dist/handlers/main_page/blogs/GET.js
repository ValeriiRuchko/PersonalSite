import db from "#db_client";
import { blogs } from "#db_schema/blogs_and_images";
async function blogsGET(request, reply) {
    const allBlogs = await db.select().from(blogs);
    reply.header("Access-Control-Allow-Origin", "*");
    reply.send(allBlogs);
}
export default blogsGET;
//# sourceMappingURL=GET.js.map