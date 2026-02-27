module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "禁止使用 console.log",
    },
    schema: [],
  },

  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.object &&
          node.callee.object.name === "console" &&
          node.callee.property &&
          node.callee.property.name === "log"
        ) {
          context.report({
            node,
            message: "禁止使用 console.log",
          });
        }
      },
    };
  },
};
