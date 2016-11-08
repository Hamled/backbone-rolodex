import Backbone from 'backbone';

const FilterControl = Backbone.View.extend({
  className: 'rolodex-filter',

  initialize: function() {
    this.render();
  },

  // EVENTS
  events: {
    'input .filter-input': 'onChange',
    'click .filter-clear-btn': 'onClear',
  },

  onChange: function(e) {
    this.trigger('submit', this.$('.filter-input').val());
  },

  onClear: function(e) {
    this.$('.filter-input').val('');
    this.trigger('submit', '');
  },

  // RENDERING
  render: function() {
    this.$el.append(Backbone.$(`
      <label>
        Filter:
        <input type="text" class="filter-input">
      </label>
      <button class="filter-clear-btn">Clear</button>
    `));

    return this;
  }
});

export default FilterControl;
