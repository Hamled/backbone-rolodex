import Util from './util';
import Backbone from 'backbone';

import Application from './app/models/application';

import ApplicationView from './app/views/application_view';


var app = new Application();
app.addEntry({
  name: 'Charles Ellis',
  organization: 'Ada Developers Academy',
  phone: '+12065551234',
  address: {
    street1: '123 Fake St',
    street2: 'Apt. ABC',
    city: 'Seattle',
    state: 'WA',
    postal: '98101'
  }
});

app.addEntry({
  name: 'Kari Bancroft',
  organization: 'Ada Developers Academy',
  phone: '+12065551235',
  address: {
    street1: '456 Fake Ave',
    street2: '',
    city: 'Seattle',
    state: 'WA',
    postal: '98102'
  }
});

var appView = new ApplicationView({
  el: '#mount',
  model: app
});
