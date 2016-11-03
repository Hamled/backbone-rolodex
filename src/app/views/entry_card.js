import _ from 'underscore';
import Backbone from 'backbone';

const EntryCard = Backbone.View.extend({
  initialize: function() {
    this.editing = false;

    // Static components
    this.editBtn = Backbone.$('<button class="btn-edit">Edit</button>');
    this.cancelBtn = Backbone.$('<button class="btn-cancel">Cancel</button>');
    this.saveBtn = Backbone.$('<button class="btn-save">Save</button>');

    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  // EVENTS
  events: {
    'click .btn-edit': 'onEdit',
    'click .btn-cancel': 'onCancel',
    'click .btn-save': 'onSave',
  },

  onEdit: function(e) {
    this.editing = true;
    this.render();
  },

  onCancel: function(e) {
    this.editing = false;
    this.render();
  },

  onSave: function(e) {
    var self = this;
    var fields = ['name', 'organization', 'phone'];
    this.model.updateEntry(_.object(fields, _.map(fields, function(field) {
      return self.$(`.entry-card-${field}`).val();
    })));

    this.editing = false;
    this.render();
  },

  // RENDERING
  render: function() {
    var self = this;
    this.$('*').detach();
    this.$el.append(_.flatten([
      _.map(['name', 'organization', 'phone'], function(field) {
        return self.renderField(field, self.model.get(field));
      }),
      this.renderControls()
    ]));
    return this;
  },

  renderField: function(name, value) {
    if(this.editing) {
      return Backbone.$(`<input type="text" class="entry-card-${name}">`).val(value);
    } else {
      return Backbone.$('<p></p>').html(value);
    }
  },

  renderControls: function() {
    if(this.editing) {
      return [
        this.saveBtn,
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
