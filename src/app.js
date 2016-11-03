import Backbone from 'backbone';
import Entry from './app/models/entry';
import EntryCard from './app/views/entry_card';


var charles = new Entry({
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

var charlesCard = new EntryCard({
  model: charles,
  id: 'entry-card-' + charles.id
});

Backbone.$('#mount').append(charlesCard.el);
