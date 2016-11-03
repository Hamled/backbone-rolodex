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
});

// A collection of rolodex entries
const Entries = Backbone.Collection.extend({
  model: Entry
});

export default Entry;
export { Entries };
