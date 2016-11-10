import _ from 'underscore';
import Entry from 'app/models/entry';
import fixtures from 'spec/fixtures';

describe('Entry', function() {
  describe('.filterPred', function() {
    it('should return a function', function() {
      expect(Entry.filterPred('')).toBeFunction();
    });

    it('should filter on name attribute', function() {
      var one = fixtures.entry().one;

      var filterPred = Entry.filterPred('Person One');
      expect(_.filter([one], filterPred)).toContain(one);

      filterPred = Entry.filterPred('Person Two');
      expect(_.filter([one], filterPred)).not.toContain(one);
    });

    it('should filter on organization attribute', function() {
      var one = fixtures.entry().one;

      var filterPred = Entry.filterPred('Org One');
      expect(_.filter([one], filterPred)).toContain(one);

      filterPred = Entry.filterPred('Org Two');
      expect(_.filter([one], filterPred)).not.toContain(one);
    });

    it('should filter on phone attribute', function() {
      var one = fixtures.entry().one;

      var filterPred = Entry.filterPred('Phone One');
      expect(_.filter([one], filterPred)).toContain(one);

      filterPred = Entry.filterPred('Phone Two');
      expect(_.filter([one], filterPred)).not.toContain(one);
    });
  });
});
