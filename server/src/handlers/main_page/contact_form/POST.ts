import { FastifyRequest, FastifyReply } from "fastify";

interface ContactMeData {
  name: string;
  email: string;
  message: string;
}

async function contact_formPOST(request: FastifyRequest, reply: FastifyReply) {
  const contactMeData = (await request.body) as ContactMeData;

  reply.statusCode = 200;
  // TODO
  reply.header("Access-Control-Allow-Origin", "*");
  reply.send({
    msg: "Got contact data successully",
  });

  console.log(contactMeData);
}

export default contact_formPOST;
