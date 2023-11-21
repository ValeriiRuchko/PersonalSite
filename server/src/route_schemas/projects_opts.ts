import { RouteShorthandOptions } from "fastify";

const commonResponseSchema = {
  200: {
    type: "object",
    properties: {
      msg: { type: "string" },
    },
  },
  500: {
    type: "object",
    properties: {
      msg: { type: "string" },
    },
  },
};

const GETopts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          required: ["name", "description"],
          properties: {
            name: { type: "string" },
            description: { type: "string" },
            github_link: { type: "string" },
          },
        },
      },
      500: {
        type: "object",
        properties: {
          msg: { type: "string" },
        },
      },
    },
  },
};

const POSTopts: RouteShorthandOptions = {
  schema: {
    response: commonResponseSchema,
    body: {
      type: "object",
      required: ["name", "description"],
      properties: {
        name: { type: "string" },
        description: { type: "string" },
        github_link: { type: "string" },
      },
    },
  },
};

const DELETEopts: RouteShorthandOptions = {
  schema: {
    response: commonResponseSchema,
    params: {
      type: "object",
      properties: {
        name: { type: "string" },
      },
    },
  },
};

const PATCHopts: RouteShorthandOptions = {
  schema: {
    response: commonResponseSchema,
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        description: { type: "string" },
        github_link: { type: "string" },
      },
    },
    params: {
      type: "object",
      properties: {
        name: { type: "string" },
      },
    },
  },
};

export { POSTopts, GETopts, DELETEopts, PATCHopts };
