const swaggerJSDoc = require("swagger-jsdoc");
const adminApiDoc = require("./user-api.doc");

let api_docs_url =
  process.env.NODE_ENV === "production"
    ? "http://13.52.80.52:9090"
    : "http://localhost:9090";
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node CRUD API",
      version: "1.0.0",
    },
    servers: [
      {
        url: `${api_docs_url}/api/v2`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "apiKey",
          in: "header",
          name: "x-auth-token",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    paths: { ...adminApiDoc },
  },
  apis: ["../routes*.js"],
  tags: ["User"],
};
exports.swaggerSpec = swaggerJSDoc(swaggerOptions);
