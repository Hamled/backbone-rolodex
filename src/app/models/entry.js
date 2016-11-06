import _ from 'underscore';
import Backbone from 'backbone';

// A single rolodex entry
const Entry = Backbone.Model.extend({
  // Attributes:
  //   name
  //   organization
  //   phone
  //   address
  //     street1
  //     street2
  //     city
  //     state
  //     postal

  updateEntry: function(entryData) {
    this.set(entryData);
  },

  destroyEntry: function() {
    if(_.has(this, 'collection')) {
      this.collection.remove(this);
    }
  }
});

// A collection of rolodex entries
const Entries = Backbone.Collection.extend({
  model: Entry
});

export default Entry;
export { Entry, Entries };
