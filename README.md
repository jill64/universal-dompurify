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

Conditional exports apply the appropriate [DOMPurify](https://github.com/cure53/DOMPurify#readme) file at each run.

```js
import DOMPurify from 'universal-dompurify'

const cleaned = DOMPurify.sanitize(/* ... */)
```

| condition | resolve                                                         |
| --------- | --------------------------------------------------------------- |
| `browser` | `DOMPurify`                                                     |
| `default` | `DOMPurify` + `JSDOM`                                           |
| `worker`  | `DOMPurify` + `JSDOM` + (require: your external node polyfills) |

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

| condition | resolve     |
| --------- | ----------- |
| `browser` | `DOMPurify` |
| `default` | `null`      |
| `worker`  | `null`      |
