'use strict'

const { expect } = require('@hapi/code')
const { readFileSync } = require('fs')
const { parse } = require('./parser')

describe('parser', () => {
  describe('#parse(markdown)', () => {
    it('parses full document', () => {
      const md = readFileSync('test/resources/parser/input.md', 'utf8')
      const html = readFileSync('test/resources/parser/output.html', 'utf8')
      const actual = parse(md)

      expect(actual).to.equal(html)
    })
  })
})