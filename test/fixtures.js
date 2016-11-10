import _ from 'underscore';

const FIXTURE_MODELS = ['entry'];

var FixtureLoader = function() {
  var self = this;
  this.loadedFixtures = {};
  _.each(FIXTURE_MODELS, function(model) {
    self[model] = function() {
      if(self.loadedFixtures[model] !== undefined) {
        return self.loadedFixtures[model];
      }

      var fixtures = require(`./fixtures/${model}`);
      return self.loadedFixtures[model] = fixtures;
    };
  });
};

export default new FixtureLoader();
