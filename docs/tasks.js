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
                properties: {
                  title: { type: "string" }
                }
              }
            }
          }
        },
        responses: {
          201: {
            description: "Tarea creada"
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
            description: "Lista de tareas"
          }
        }
      }
    },
    "/id/{_id}": {
      put: {
        tags: ["Tasks"],
        summary: "Actualizar título de la tarea",
        parameters: [
          {
            name: "_id",
            in: "path",
            required: true,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: { type: "string" }
                }
              }
            }
          }
        },
        responses: {
          200: {
            description: "Tarea actualizada"
          }
        }
      },
      delete: {
        tags: ["Tasks"],
        summary: "Eliminar tarea",
        parameters: [
          {
            name: "_id",
            in: "path",
            required: true,
            schema: { type: "string" }
          }
        ],
        responses: {
          204: {
            description: "Tarea eliminada"
          }
        }
      }
    }
  }
};
