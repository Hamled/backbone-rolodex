var _ = require('underscore');
casper.test.begin('Add entry form has all necessary inputs', 11, function(test) {
  var viewContainer = 'div.add-entry-form';
  var label = function(field) {
    return viewContainer + ' ' + 'label.add-entry-label-' + field;
  };
  var input = function(field) {
    return label(field) + ' ' + 'input[type="text"].add-entry-input-' + field;
  };
  var addButton = viewContainer + ' ' + 'button.add-entry-btn-add';

  casper.start('http://localhost:8081/', function() {});

  var fields = ['name', 'organization', 'phone'];
  _.each(fields, function(field) {
    casper.then(function() {
      var capField = field[0].toLocaleUpperCase() + field.substr(1);

      test.assertExists(label(field), capField + ' label is found.');
      test.assertSelectorHasText(label(field), capField + ':', capField + ' label has correct text.');
      test.assertExists(input(field), capField + ' input is found.');
    });
  });

  casper.then(function() {
    test.assertExists(addButton, 'Add entry button is found.');
    test.assertSelectorHasText(addButton, 'Add', 'Add entry button has correct text.');
  });

  casper.run(function() {
    test.done();
  });
});
