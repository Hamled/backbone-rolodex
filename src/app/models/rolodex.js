import Backbone from 'backbone';
import {Entry, Entries} from 'app/models/entry';

const Rolodex = Backbone.Model.extend({
  initialize: function() {
    this.set('entries', new Entries());
    this.listenTo(this.get('entries'), 'update', this.onEntriesUpdate);
  },

  filteredEntries: function() {
    var filterPred = Entry.filterPred(this.get('filter'));
    return this.get('entries').filter(filterPred);
  },

  addEntry: function(entryData) {
    this.get('entries').add(new Entry(entryData));
  },

  setFilter: function(filter) {
    this.set('filter', filter);
  },

  // EVENTS
  onEntriesUpdate: function() {
    this.trigger('change', arguments);
  }
});

export default Rolodex;
