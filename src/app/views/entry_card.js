import Backbone from 'backbone';

const EntryCard = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  // RENDERING
  render: function() {
    this.$el.append(this.renderName(this.model.get('name')));
    return this;
  },

  renderName: function(name) {
    return Backbone.$('<p></p>').html(name);
  }
});

export default EntryCard;
