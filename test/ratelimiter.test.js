'use strict';

const mock = require('egg-mock');

describe('test/ratelimiter.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/ratelimiter-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, ratelimiter')
      .expect(200);
  });
});
