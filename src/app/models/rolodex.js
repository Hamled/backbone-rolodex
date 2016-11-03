import Backbone from 'backbone';
import {Entry, Entries} from './entry';

const Rolodex = Backbone.Model.extend({
  initialize: function() {
    this.set('entries', new Entries());
  },

  addEntry: function(entryData) {
    this.get('entries').add(new Entry(entryData));
  }
});

export default Rolodex;
