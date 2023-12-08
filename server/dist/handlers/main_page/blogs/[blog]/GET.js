import db from "#db_client";
import { blogs } from "#db_schema/blogs_and_images";
import { eq } from "drizzle-orm";
async function blogGET(request, reply) {
    const urlPARAM = (await request.params);
    try {
        const blog = await db
            .select()
            .from(blogs)
            .where(eq(blogs.title, urlPARAM.title));
        reply.statusCode = 200;
        reply.send(blog);
    }
    catch (err) {
        console.log(err);
        reply.statusCode = 500;
        reply.send({
            msg: `Blog ${urlPARAM.title} doesn't exist`,
        });
    }
}
export default blogGET;
//# sourceMappingURL=GET.js.map