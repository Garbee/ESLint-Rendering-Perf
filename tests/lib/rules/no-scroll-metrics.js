'use strict';

var rule = require('../../../lib/rules/no-scroll-metrics'),
  RuleTester =  require('eslint').RuleTester;

var ruleTester = new RuleTester();

var invalidStatements = [];

var properties = [
  'scrollWidth',
  'scrollHeight',
  'scrollLeft',
  'scrollTop',
  'scrollX',
  'scrollY'
];

properties.forEach(function(item) {
  var invalid = {};
  invalid.code = 'var foo = elem.' + item;
  invalid.errors = [];
  invalid.errors.push({
    message: 'Scroll metric properties are being called which are known to affect rendering performance. ' +
    'Property called - ' + item,
    type: 'MemberExpression'
  });
  invalidStatements.push(invalid);
});

ruleTester.run('no-scroll-metrics', rule, {
  valid: [],
  invalid: invalidStatements
});
