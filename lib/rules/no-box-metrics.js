module.exports = function(context) {
  return {
    'MemberExpression': function(node) {
      var properties = [
        'offsetLeft',
        'offsetTop',
        'offsetWidth',
        'offsetHeight',
        'offsetParent',
        'clientLeft',
        'clientTop',
        'clientWidth',
        'clientHeight'
      ];
      var checkUsage = function(item) {
        if (node.property !== undefined)  {
          if (node.property.name === item
            || node.property.value === item
          ) {
            context.report(
              node,
              'Box metric properties are being called which are known to affect rendering performance. ' +
              'Property called - ' + item,
              {}
            );
          }
        }
      };
      properties.forEach(checkUsage);
    }
  };
};
