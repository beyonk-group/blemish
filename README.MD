# Blemish

A simple, pluggable, markdown parser. Designed for size and simplicity.
Based on original code by https://codepen.io/kvendrik/pen/Gmefv

## Install

```bash
npm i --save blemish
```

## Use

```js
const { parse } = require('blemish')

const markdown = '__Hello, World__'

const html = parse(markdown)
```

## Customise

```js
const { parse } = require('blemish')
const b = require('blemish/lib/tags/b')

const markdown = '_Hello, World__'

const html = parse(markdown, [ b ])
```

## Improve

```js
const { parse } = require('blemish')

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
