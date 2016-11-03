import Backbone from 'backbone';
import {Entry, Entries} from './entry';

const Rolodex = Backbone.Model.extend({
  initialize: function() {
    this.set('entries', new Entries());
    this.listenTo(this.get('entries'), 'update', this.onEntriesUpdate);
  },

  addEntry: function(entryData) {
    this.get('entries').add(new Entry(entryData));
  },

  // EVENTS
  onEntriesUpdate: function() {
    this.trigger('change', arguments);
  }
});

export default Rolodex;
