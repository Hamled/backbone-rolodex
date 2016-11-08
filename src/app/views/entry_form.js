import _ from 'underscore';
import Backbone from 'backbone';

const EntryForm = Backbone.View.extend({
  className: 'add-entry-form',

  initialize: function() {
    this.render();
  },

  // EVENTS
  events: {
    'click .add-entry-btn-add': 'onAdd'
  },

  onAdd: function(e) {
    var self = this;
    var fields = ['name', 'organization', 'phone'];
    var fieldInputs = _.map(fields, function(field) {
      return self.$(`.add-entry-input-${field}`);
    });

    this.trigger('submit', _.object(fields, _.map(fieldInputs, function(input) {
      return input.val();
    })));

    _.each(fieldInputs, function(input) {
      input.val("");
    });
  },

  // RENDERING
  render: function() {
    this.$el.append(Backbone.$(`
      <h3>Add a new entry</h3>
      ${this.inputTemplate('name')}
      ${this.inputTemplate('organization')}
      ${this.inputTemplate('phone')}
      <button class="add-entry-btn-add">Add</button>
    `));
    return this;
  },

  inputTemplate: function(field) {
    return `
      <label class="add-entry-label-${field}">
        ${_(field).capitalize()}:
        <input type="text" class="add-entry-input-${field}">
      </label>
    `;
  }
});

export default EntryForm;
