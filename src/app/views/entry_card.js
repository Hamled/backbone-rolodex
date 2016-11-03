import _ from 'underscore';
import Backbone from 'backbone';

const EntryCard = Backbone.View.extend({
  initialize: function() {
    // Static components
    this.editBtn = Backbone.$('<button class="btn-edit">Edit</button>');

    this.listenTo(this.model, 'change', this.render);
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
    return [
      this.editBtn
    ];
  }
});

export default EntryCard;
