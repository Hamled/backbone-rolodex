import {Entry} from 'app/models/entry';

module.exports = {
  one: new Entry({
    name: "Person One",
    organization: "Org One",
    phone: "Phone One"
  })
};
