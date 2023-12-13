import db from "#db_client";
async function blogsGET(request, reply) {
    const allBlogs = await db.query.blogs.findMany({
        with: {
            images: true,
        },
    });
    reply.header("Access-Control-Allow-Origin", "*");
    reply.send(allBlogs);
}
export default blogsGET;
//# sourceMappingURL=GET.js.map