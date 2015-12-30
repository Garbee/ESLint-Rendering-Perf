'use strict';

var rule = require('../../../lib/rules/no-computed-access'),
  RuleTester =  require('eslint').RuleTester;

var ruleTester = new RuleTester();

var invalidStatements = [];

var properties = [
  'computedRole',
  'computedName',
  'innerText'
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

ruleTester.run('no-computed-access', rule, {
  valid: [],
  invalid: invalidStatements
});
