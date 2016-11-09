import Entry from 'app/models/entry';

describe('Entry', function() {
  describe('.filterPred', function() {
    it('should return a function', function() {
      assert.typeOf(Entry.filterPred(''), 'function');
    });
  });
});
