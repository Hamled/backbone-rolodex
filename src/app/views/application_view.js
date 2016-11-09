import Backbone from 'backbone';
import EntryForm from 'app/views/entry_form';
import RolodexView from 'app/views/rolodex_view';
import FilterControl from 'app/views/filter_control';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    // Static components
    this.entryForm = new EntryForm();
    this.filterControl = new FilterControl();
    this.listenTo(this.entryForm, 'submit', this.onAddEntry);
    this.listenTo(this.filterControl, 'submit', this.onSubmitFilter);

    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  // EVENTS
  onAddEntry: function(entryData) {
    this.model.addEntry(entryData);
  },

  onSubmitFilter: function(filter) {
    this.model.setFilter(filter);
  },

  // RENDERING
  render: function() {
    this.$('*').detach();
    this.renderStatic();
    this.$el.append(this.renderRolodex(this.model.rolodex()));
    return this;
  },

  renderStatic: function() {
    this.$el.append([
      this.entryForm.el,
      this.filterControl.el
    ]);
  },

  renderRolodex: function(rolodex) {
    return new RolodexView({
      model: rolodex
    }).el;
  }
});

export default ApplicationView;
