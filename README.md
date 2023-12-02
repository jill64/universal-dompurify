<!----- BEGIN GHOST DOCS HEADER ----->

# universal-dompurify

[![npm-version](https://img.shields.io/npm/v/universal-dompurify)](https://npmjs.com/package/universal-dompurify) [![npm-license](https://img.shields.io/npm/l/universal-dompurify)](https://npmjs.com/package/universal-dompurify) [![npm-download-month](https://img.shields.io/npm/dm/universal-dompurify)](https://npmjs.com/package/universal-dompurify) [![npm-min-size](https://img.shields.io/bundlephobia/min/universal-dompurify)](https://npmjs.com/package/universal-dompurify)

💎 Use DOMPurify for some context by conditional exports

## Installation

```sh
npm i universal-dompurify
```

<!----- END GHOST DOCS HEADER ----->

## Usage

Conditional Export applies the appropriate file at each runtime.

```js
import DOMPurify from 'universal-dompurify'

const clean = DOMPurify.sanitize(/* ... */)
```

| Runtime     |                                                             |
| ----------- | ----------------------------------------------------------- |
| Browser     | DOMPurify                                                   |
| Node Server | DOMPurify + JSDOM                                           |
| Edge        | DOMPurify + JSDOM + (require: your external node polyfills) |

## Browser Only Mode

Reduces bundle size by truncating rendering on the server.

```js
/** @type {DOMPurify | null} */
import DOMPurify from 'universal-dompurify/browser-only'

const clean = DOMPurify?.sanitize?.(/* ... */) ?? 'server-fallback-value'
```

| Runtime |           |
| ------- | --------- |
| Browser | DOMPurify |
| Server  | null      |
| Edge    | null      |
