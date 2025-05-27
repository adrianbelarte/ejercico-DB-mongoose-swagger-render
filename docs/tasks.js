module.exports = {
  paths: {
    "/create": {
      post: {
        tags: ["Tasks"],
        summary: "Crear tarea",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["title"],
                properties: {
                  title: { type: "string", example: "Estudiar Swagger" }
                }
              }
            }
          }
        },
        responses: {
          201: {
            description: "Tarea creada correctamente",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Task" }
              }
            }
          },
          400: {
            description: "Error en los datos enviados"
          }
        }
      }
    },
    "/": {
      get: {
        tags: ["Tasks"],
        summary: "Obtener todas las tareas",
        responses: {
          200: {
            description: "Lista de tareas",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Task" }
                }
              }
            }
          },
          500: {
            description: "Error del servidor"
          }
        }
      }
    },
    "/id/{_id}": {
      put: {
        tags: ["Tasks"],
        summary: "Actualizar el título de una tarea",
        parameters: [
          {
            name: "_id",
            in: "path",
            required: true,
            description: "ID de la tarea a actualizar",
            schema: { type: "string" }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["title"],
                properties: {
                  title: { type: "string", example: "Tarea actualizada" }
                }
              }
            }
          }
        },
        responses: {
          200: {
            description: "Tarea actualizada correctamente",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Task" }
              }
            }
          },
          404: {
            description: "Tarea no encontrada"
          },
          400: {
            description: "Error en los datos enviados"
          }
        }
      },
      delete: {
        tags: ["Tasks"],
        summary: "Eliminar una tarea",
        parameters: [
          {
            name: "_id",
            in: "path",
            required: true,
            description: "ID de la tarea a eliminar",
            schema: { type: "string" }
          }
        ],
        responses: {
          204: {
            description: "Tarea eliminada correctamente"
          },
          404: {
            description: "Tarea no encontrada"
          }
        }
      }
    }
  }
};
