casper.test.begin('Application loads controls and rolodex', 4, function(test) {
  var appContainer = 'div.rolodex-app';

  casper.start('http://localhost:8081/', function() {
    test.assertExists(appContainer, 'Rolodex application container is found.');
  });

  casper.then(function() {
    test.assertExists(appContainer + ' div.add-entry-form', 'New entry form is found.');
  });

  casper.then(function() {
    test.assertExists(appContainer + ' div.rolodex-filter', 'Rolodex filter control is found.');
  });

  casper.then(function() {
    test.assertExists(appContainer + ' div.rolodex', 'Rolodex is found.');
  });

  casper.run(function() {
    test.done();
  });
});
