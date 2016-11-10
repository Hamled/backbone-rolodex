import Entry from 'app/models/entry';

describe('Entry', function() {
  describe('.filterPred', function() {
    it('should return a function', function() {
      expect(Entry.filterPred('')).toBeFunction();
    });
  });
});
