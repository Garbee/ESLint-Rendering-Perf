'use strict';

var rule = require('../../../lib/rules/no-box-metrics'),
  RuleTester =  require('eslint').RuleTester;

var ruleTester = new RuleTester();

var invalidStatements = [];

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

properties.forEach(function(item) {
  var invalid = {};
  invalid.code = 'var foo = elem.' + item;
  invalid.errors = [];
  invalid.errors.push({
    message: 'Box metric properties are being called which are known to affect rendering performance. ' +
    'Property called - ' + item,
    type: 'MemberExpression'
  });
  invalidStatements.push(invalid);
});

ruleTester.run('no-box-metrics', rule, {
  valid: [],
  invalid: invalidStatements
});
