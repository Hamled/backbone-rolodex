import _ from 'underscore';

// Capitalization helper
_.mixin({
  capitalize: function(string) {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  },
  // Unlike mapObject, which is map() on an object
  // this is the composition of object(map())
  objectMap: function(list, iteratee, context) {
    return _.object(_.map(list, function(e) {
      return [e, _.iteratee(iteratee, context)(e)];
    }));
  }
});

const Util = {};

export default Util;
