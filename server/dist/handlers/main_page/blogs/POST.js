import db from "#db_client";
import { blogs } from "#db_schema/blogs_and_images";
async function blogsPOST(request, reply) {
    const newProject = (await request.body);
    try {
        await db.insert(blogs).values({
            title: newProject.title,
            content: newProject.content,
            time_to_read: newProject.time_to_read,
        });
        reply.statusCode = 200;
        reply.send({
            msg: "New blog created successfully",
        });
    }
    catch (err) {
        console.log(err);
        reply.statusCode = 500;
        reply.send({
            msg: "Failed to create new blog with specified fields",
        });
    }
}
export default blogsPOST;
//# sourceMappingURL=POST.js.map