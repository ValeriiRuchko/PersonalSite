async function contact_formPOST(request, reply) {
    const contactMeData = (await request.body);
    reply.statusCode = 200;
    reply.header("Access-Control-Allow-Origin", "*");
    reply.send({
        msg: "Got contact data successully",
    });
    console.log(contactMeData);
}
export default contact_formPOST;
//# sourceMappingURL=POST.js.map