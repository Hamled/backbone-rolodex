import _ from 'underscore';
import Backbone from 'backbone';
import EntryCard from 'app/views/entry_card';

const RolodexView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  // RENDERING
  render: function() {
    this.$('*').detach();
    this.$el.append(_.map(this.model.filteredEntries(), function(entry) {
      return new EntryCard({
        model: entry
      }).$el;
    }));
    return this;
  }
});

export default RolodexView;
