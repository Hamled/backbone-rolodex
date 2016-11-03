import Backbone from 'backbone';

const EntryForm = Backbone.View.extend({
  initialize: function(attributes) {
    this.parent = attributes.parent;
    this.render();
  },

  // EVENTS
  events: {
    'click .add-entry-btn': 'onAdd'
  },

  onAdd: function(e) {
    this.parent.onAddEntry({
      name: this.$('.add-entry-name').val()
    });
  },

  // RENDERING
  render: function() {
    this.$el.append(Backbone.$(`
      <h3>Add a new entry</h3>
      <label>
        Name:
        <input type="text" class="add-entry-name">
      </label>
      <button class="add-entry-btn">Add</button>
    `));
    return this;
  },
});

export default EntryForm;
