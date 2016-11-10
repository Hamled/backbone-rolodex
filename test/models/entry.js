import _ from 'underscore';
import Entry from 'app/models/entry';
import fixtures from 'test/fixtures';

describe('Entry', function() {
  describe('.filterPred', function() {
    it('should return a function', function() {
      assert.typeOf(Entry.filterPred(''), 'function');
    });

    it('should filter on name attribute', function() {
      var one = fixtures.entry().one;

      var filterPred = Entry.filterPred('Person One');
      assert.include(_.filter([one], filterPred), one);

      filterPred = Entry.filterPred('Person Two');
      assert.notInclude(_.filter([one], filterPred), one);
    });
  });
});
