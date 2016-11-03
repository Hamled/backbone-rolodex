import _ from 'underscore';
import Backbone from 'backbone';

const EntryCard = Backbone.View.extend({
  initialize: function() {
    this.editing = false;

    // Static components
    this.editBtn = Backbone.$('<button class="btn-edit">Edit</button>');
    this.cancelBtn = Backbone.$('<button class="btn-cancel">Cancel</button>');

    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  // EVENTS
  events: {
    'click .btn-edit': 'onEdit',
    'click .btn-cancel': 'onCancel',
  },

  onEdit: function(e) {
    this.editing = true;
  },

  onCancel: function(e) {
    this.editing = false;
  },

  // RENDERING
  render: function() {
    this.$('*').detach();
    this.$el.append(_.flatten([
      this.renderName(this.model.get('name')),
      this.renderControls()
    ]));
    return this;
  },

  renderName: function(name) {
    return Backbone.$('<p></p>').html(name);
  },

  renderControls: function() {
    return [
      this.editBtn
    ];
  }
});

export default EntryCard;
