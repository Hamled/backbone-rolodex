import _ from 'underscore';

// Capitalization helper
_.mixin({
  capitalize: function(string) {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  }
});

const Util = {};

export default Util;
