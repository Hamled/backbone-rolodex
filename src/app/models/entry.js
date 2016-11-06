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
}, {
  filterPred: function(filter) {
    var fieldPred = function(value) { return true; };

    if(_.isString(filter) && filter !== "") {
      filter = filter.toLocaleLowerCase();
      fieldPred = function(value) {
        return value.toLocaleLowerCase().includes(filter);
      };
    }

    return function(entry) {
      return _.any(_.map(['name', 'organization', 'phone'], function(field) {
        return fieldPred(entry.get(field));
      }));
    };
  }
});

// A collection of rolodex entries
const Entries = Backbone.Collection.extend({
  model: Entry
});

export default Entry;
export { Entry, Entries };
