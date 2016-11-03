import _ from 'underscore';
import Backbone from 'backbone';

const EntryForm = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  // EVENTS
  events: {
    'click .add-entry-btn': 'onAdd'
  },

  onAdd: function(e) {
    this.trigger('submit', {
      name: this.$('.add-entry-name').val()
    });
  },

  // RENDERING
  render: function() {
    this.$el.append(Backbone.$(`
      <h3>Add a new entry</h3>
      ${this.inputTemplate('name')}
      <button class="add-entry-btn">Add</button>
    `));
    return this;
  },

  inputTemplate: function(field) {
    return `
      <label>
        ${_(field).capitalize()}:
        <input type="text" class="add-entry-${field}">
      </label>
    `;
  }
});

export default EntryForm;
