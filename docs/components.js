module.exports = {
  components: {
    schemas: {
      Task: {
        type: "object",
        properties: {
          _id: { type: "string", example: "664f76c1b2c6a8ff4d991234" },
          title: { type: "string", example: "Tarea de ejemplo" },
          completed: { type: "boolean", example: false },
          createdAt: { type: "string", example: "2024-05-25T12:00:00.000Z" },
          updatedAt: { type: "string", example: "2024-05-25T12:30:00.000Z" }
        }
      }
    }
  }
};
