const BaseSerializer = require('./BaseSerializer');

class AuthSerializer extends BaseSerializer {
  constructor() {
    super('success');
  }
}

module.exports = AuthSerializer;
