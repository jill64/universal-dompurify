<!----- BEGIN GHOST DOCS HEADER ----->

# universal-dompurify

[![npm-version](https://img.shields.io/npm/v/universal-dompurify)](https://npmjs.com/package/universal-dompurify) [![npm-license](https://img.shields.io/npm/l/universal-dompurify)](https://npmjs.com/package/universal-dompurify) [![npm-download-month](https://img.shields.io/npm/dm/universal-dompurify)](https://npmjs.com/package/universal-dompurify) [![npm-min-size](https://img.shields.io/bundlephobia/min/universal-dompurify)](https://npmjs.com/package/universal-dompurify)

💎 Use DOMPurify for some context by conditional exports

<!----- END GHOST DOCS HEADER ----->

## Installation

```sh
npm i universal-dompurify
```

## Usage

Conditional Export applies the appropriate file at each runtime.

```js
import DOMPurify from 'universal-dompurify'

const cleaned = DOMPurify.sanitize(/* ... */)
```

| Runtime     | Resolve                                                     |
| ----------- | ----------------------------------------------------------- |
| Browser     | DOMPurify                                                   |
| Node Server | DOMPurify + JSDOM                                           |
| Edge        | DOMPurify + JSDOM + (require: your external node polyfills) |

> [!TIP]
> It is generally not recommended to use JSDOM with the restricted Edge runtime.  
> See also [@jill64/universal-sanitizer](https://github.com/jill64/universal-sanitizer) for a more lightweight alternative.

## Browser Only Mode

Reduces bundle size by omitting rendering on the server.

```js
/** @type {DOMPurify | null} */
import DOMPurify from 'universal-dompurify/browser-only'

const cleaned = DOMPurify?.sanitize?.(/* ... */) ?? 'server-fallback-value'
```

| Runtime | Resolve   |
| ------- | --------- |
| Browser | DOMPurify |
| Server  | null      |
| Edge    | null      |
