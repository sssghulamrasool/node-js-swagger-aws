const adminApiDoc = {
  "/users": {
    get: {
      tags: ["User"],
      summary: "Get all users",
      description: "Retrieve a list of all users.",
      responses: {
        200: {
          description: "A successful response",
        },
      },
    },
    post: {
      tags: ["User"],
      summary: "Create a new user",
      description: "Create a new user with the provided details.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                firstName: {
                  type: String,
                  required: true,
                },
                lastName: {
                  type: String,
                  required: true,
                },
                age: {
                  type: Number,
                  default: null,
                },
                gender: {
                  type: String,
                  enum: ["male", "female", "other"],
                  default: "male",
                },
                email: {
                  type: String,
                  required: true,
                },
                phone: {
                  type: String,
                  required: true,
                  default: null,
                },
                username: {
                  type: String,
                  required: true,
                },
                password: {
                  type: String,
                  required: true,
                },
                birthDate: {
                  type: Date,
                  default: null,
                },
                bloodGroup: {
                  type: String,
                  default: null,
                },
                address: {
                  type: "object",
                  properties: {
                    address: {
                      type: String,
                      default: null,
                    },
                    city: {
                      type: String,
                      default: null,
                    },
                    coordinates: {
                      lat: {
                        type: Number,
                        default: null,
                      },
                      lng: {
                        type: Number,
                        default: null,
                      },
                    },
                    postalCode: {
                      type: String,
                      default: null,
                    },
                    state: {
                      type: String,
                      default: null,
                    },
                  },
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "User created successfully",
        },
        400: {
          description:
            "Bad request user name email pass username password is required",
        },
      },
    },
  },
  "/users/{id}": {
    get: {
      tags: ["User"],
      summary: "Get user by ID",
      description: "Retrieve a user by their ID.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "User ID",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "A successful response",
        },
        404: {
          description: "User not found",
        },
      },
    },
    put: {
      tags: ["User"],
      summary: "Update user by ID",
      description: "Update details of a user by their ID.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "User ID",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                firstName: {
                  type: String,
                },
                lastName: {
                  type: String,
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "User updated successfully",
        },
        400: {
          description: "Bad request",
        },
        404: {
          description: "User not found",
        },
      },
    },
    delete: {
      tags: ["User"],
      summary: "Delete user by ID",
      description: "Delete a user by their ID.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "User ID",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "User deleted successfully",
        },
        404: {
          description: "User not found",
        },
      },
    },
  },
};

module.exports = adminApiDoc;
