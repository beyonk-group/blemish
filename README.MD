# Upmark

A simple, pluggable, markdown parser. Designed for size and simplicity.
Based on original code by https://codepen.io/kvendrik/pen/Gmefv

## Install

```bash
npm i --save upmark
```

## Use

```js
const { parse } = require('upmark')

const markdown = '__Hello, World__'

const html = parse(markdown)
```

## Customise

```js
const { parse } = require('upmark')
const b = require('upmark/lib/tags/b')

const markdown = '_Hello, World__'

const html = parse(markdown, [ b ])
```

## Improve

```js
const { parse } = require('upmark')

const customTag = function (markdown) {
  return markdown.replace(/^%(\w+)%$/g, '<marquee>$1</marquee>')
}

const markdown = '%Hello, World%'

const html = parse(markdown, [ customTag ])
```

## Develop

```bash
npm run test
```
