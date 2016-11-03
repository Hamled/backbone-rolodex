import Backbone from 'backbone';
import EntryForm from './entry_form';
import RolodexView from './rolodex_view';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    // Static components
    this.entryForm = new EntryForm({
      parent: this
    });

    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  // EVENTS
  onAddEntry: function(entryData) {
    this.model.rolodex().addEntry(entryData);
  },

  // RENDERING
  render: function() {
    this.$('*').detach();
    this.renderStatic();
    this.$el.append(this.renderRolodex(this.model.rolodex()));
    return this;
  },

  renderStatic: function() {
    this.$el.append(this.entryForm.el);
  },

  renderRolodex: function(rolodex) {
    return new RolodexView({
      model: rolodex
    }).el;
  }
});

export default ApplicationView;
