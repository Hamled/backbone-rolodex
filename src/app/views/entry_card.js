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
    this.render();
  },

  onCancel: function(e) {
    this.editing = false;
    this.render();
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
    if(this.editing) {
      return [
        this.cancelBtn
      ];
    } else {
      return [
        this.editBtn
      ];
    }
  }
});

export default EntryCard;
