// Require depedencies needed for testing
jest.unmock('jquery');
var $ = require('jquery');
 
jest.unmock('bluebird');
var Promise = require('bluebird');

jest.unmock('mongoose');
var mongoose = require('mongoose');

describe('Basic server functionality', () => {
  it('Should accept and respond to GET requests at the /match endpoint', (done) => {
    $.get('http://159.203.254.178:8000/match', function(data, status) {
      expect(status).toEqual('success');
      done();
    });
  });
  it('Should accept and respond to GET requests at the /signin endpoint', (done) => {
    $.get('http://159.203.254.178:8000/signin', function(data, status) {
      expect(status).toEqual('success');
      done();
    });
  });
  it('Should not accept and respond to GET requests at the non-existant endpoints', (done) => {
    $.get('http://159.203.254.178:8000/asdfsdf', function(data, status) {
      expect(status).toEqual('error');
      done();
    })
    .fail(function(data, status) {
      expect(status).toEqual('error');
      done();
    });
  });
});

describe('Basic database functionality', () => {
  it('...', (done) => {

  });
});

