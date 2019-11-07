'use strict'

const ul = require('./tags/ul')
const ol = require('./tags/ol')
const blockquote = require('./tags/blockquote')
const h = require('./tags/h')
const img = require('./tags/img')
const a = require('./tags/a')
const b = require('./tags/b')
const i = require('./tags/i')
const del = require('./tags/del')
const pre = require('./tags/pre')
const code = require('./tags/code')
const p = require('./tags/p')

const defaultTags = [
  ul,
  ol,
  blockquote,
  h,
  img,
  a,
  b,
  i,
  del,
  pre,
  code,
  p
]

exports.parse = function parse (markdown, tags = defaultTags) {
  return tags.reduce((md, tag) => tag(md), markdown)
}
