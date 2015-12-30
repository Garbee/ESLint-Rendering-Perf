module.exports = function(context) {
  return {
    'MemberExpression': function(node) {
      var properties = [
        'scrollWidth',
        'scrollHeight',
        'scrollLeft',
        'scrollTop',
        'scrollX',
        'scrollY'
      ];
      var checkUsage = function(item) {
        if (node.property !== undefined)  {
          if (node.property.name === item
            || node.property.value === item
          ) {
            context.report(
              node,
              'Scroll metric properties are being called which are known to affect rendering performance. ' +
              'Property called - {{ item }}',
              {
                item: item
              }
            );
          }
        }
      };
      properties.forEach(checkUsage);
    }
  };
};
