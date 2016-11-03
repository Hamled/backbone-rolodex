import Backbone from 'backbone';
import EntryCard from './entry_card';

const RolodexView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  // RENDERING
  render: function() {
    this.$('*').detach();
    this.$el.append(this.model.get('entries').map(function(entry) {
      return new EntryCard({
        model: entry
      }).$el;
    }));
    return this;
  }
});

export default RolodexView;
