/*global describe, it*/
require('mocha-generators').install()
var Nightmare = require('nightmare')
var expect = require('chai').expect // jshint ignore:line

describe('Test Order results', function () {
  it('Select sec1-sec7 check result 280', function *() {
    this.timeout(15000)
    var nightmare = Nightmare()
    var check = yield nightmare
    .goto('http://localhost:5000')
    .click('#sec1')
    .click('#sec2')
    .click('#sec3')
    .click('#sec4')
    .click('#sec5')
    .click('#sec6')
    .click('#sec7')
    .evaluate(function () {
      return document.querySelector('#sum').innerHTML
    })
    expect(check).to.equal('280')
  })
  it('Select sec1-sec7 sec1:4 sec2:3 sec3:2 check result 800', function *() {
    this.timeout(15000)
    var nightmare = Nightmare()
    var check = yield nightmare
    .goto('http://localhost:5000')
    .click('#sec1')
    .click('#sec1')
    .click('#sec1')
    .click('#sec1')
    .click('#sec2')
    .click('#sec2')
    .click('#sec2')
    .click('#sec3')
    .click('#sec3')
    .click('#sec4')
    .click('#sec5')
    .click('#sec6')
    .click('#sec7')
    .evaluate(function () {
      return document.querySelector('#sum').innerHTML
    })
    expect(check).to.equal('800')
  })
  it('Select sec1-sec7 sec1:4 sec2:3 sec3:2 but delete sec1 check result 580', function *() {
    this.timeout(15000)
    var nightmare = Nightmare()
    var check = yield nightmare
    .goto('http://localhost:5000')
    .click('#sec1')
    .click('#sec1')
    .click('#sec1')
    .click('#sec1')
    .click('#sec2')
    .click('#sec2')
    .click('#sec2')
    .click('#sec3')
    .click('#sec3')
    .click('#sec4')
    .click('#sec5')
    .click('#sec6')
    .click('#sec7')
    .click('#del0')
    .evaluate(function () {
      return document.querySelector('#sum').innerHTML
    })
    expect(check).to.equal('580')
  })
})
