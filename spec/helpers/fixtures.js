import _ from 'underscore';

const FIXTURE_MODELS = ['entry'];

var fixtures = {
  clearFixtures: function() {
    var self = this;
    _.each(_.keys(this.__loaded), function(model) {
      delete self.__loaded[model];
    });
  }
};

// Add a property to track all loaded fixtures.
// We do it this way instead of putting it into the object
// literal above so that it is not an enumerable property
Object.defineProperty(fixtures, '__loaded', {
  value: {},
  enumerable: false
});

_.each(FIXTURE_MODELS, function(model) {
  Object.defineProperty(fixtures, model, {
    get: function() {
      if(fixtures.__loaded[model] !== undefined) {
        return fixtures.__loaded[model];
      }

      var fixtureInfo = require(`../fixtures/${model}`);
      var modelFixtures = _.mapObject(fixtureInfo.fixtures, function(attrs, name) {
        return new fixtureInfo.model(attrs);
      });
      return (fixtures.__loaded[model] = modelFixtures);
    },
    enumerable: true
  });
});

// This is a global because I really don't yet understand
// how else I can make it accessible inside of a spec
var global = (1, eval)('this');
global.fixtures = fixtures;

beforeEach(function() {
  fixtures.clearFixtures();
});
