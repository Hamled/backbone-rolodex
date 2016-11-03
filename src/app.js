import Backbone from 'backbone';

import Rolodex from './app/models/rolodex';

import RolodexView from './app/views/rolodex_view';


var rolodex = new Rolodex();
rolodex.addEntry({
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

rolodex.addEntry({
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

var rolodexView = new RolodexView({
  el: '#mount',
  model: rolodex
});
