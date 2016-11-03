import Backbone from 'backbone';
import {Entries} from './entry';

const Rolodex = Backbone.Model.extend({
  initialize: function() {
    this.set('entries', new Entries());
  }
});

export default Rolodex;
