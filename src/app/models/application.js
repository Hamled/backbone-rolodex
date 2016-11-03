import Backbone from 'backbone';
import Rolodex from './rolodex';

const Application = Backbone.Model.extend({
  initialize: function() {
    this.set({
      rolodex: new Rolodex()
    });
  },

  rolodex: function() {
    return this.attributes.rolodex;
  },

  addEntry: function(entryData) {
    return this.get('rolodex').addEntry(entryData);
  }
});

export default Application;
