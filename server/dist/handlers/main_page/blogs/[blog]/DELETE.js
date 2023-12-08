import db from "#db_client";
import { blogs } from "#db_schema/blogs_and_images";
import { eq } from "drizzle-orm";
async function blogsDELETE(request, reply) {
    const urlPARAM = (await request.params);
    try {
        await db.delete(blogs).where(eq(blogs.title, urlPARAM.title));
        reply.statusCode = 200;
        reply.send({
            msg: `Blog ${urlPARAM.title} deleted successfully`,
        });
    }
    catch (err) {
        console.log(err);
        reply.statusCode = 500;
        reply.send({
            msg: `Blog ${urlPARAM.title} already doesn't exist`,
        });
    }
}
export default blogsDELETE;
//# sourceMappingURL=DELETE.js.map