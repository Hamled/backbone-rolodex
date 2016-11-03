import Backbone from 'backbone';
import RolodexView from './rolodex_view';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  // RENDERING
  render: function() {
    this.$el.append(this.renderRolodex(this.model.rolodex()));
    return this;
  },

  renderRolodex: function(rolodex) {
    return new RolodexView({
      model: rolodex
    }).el;
  }
});

export default ApplicationView;
