import {Entry} from 'app/models/entry';

module.exports = {
  model: Entry,
  fixtures: {
    one: {
      name: "Person One",
      organization: "Org One",
      phone: "Phone One"
    }
  }
};
