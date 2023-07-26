# Mpbf

M(odular)pbf is a fork of [pbf](https://github.com/mapbox/pbf), the low-level, fast, ultra-lightweight (3KB gzipped) JavaScript library for decoding and encoding [protocol buffers](https://developers.google.com/protocol-buffers). Mpbf generates code for use in ESM-based projects. 

## Examples

#### Using Compiled Code

Install `mpbf` and compile a JavaScript module from a `.proto` file:

```bash
$ npm install -g mpbf
$ mpbf example.proto > example.js
```

Then read and write objects using the module like this:

```js
import { Pbf } from 'mbpf';
import { Example } from './example.js';

// read
const pbf = new Pbf(buffer);
const obj = Example.read(pbf);

// write
const pbf = new Pbf();
Example.write(obj, pbf);
const buffer = pbf.finish();
```

## Install

```bash
npm install mpbf
```

## Proto Schema to JavaScript

If installed globally, `mpbf` provides a binary that compiles `proto` files into JavaScript modules. Usage:

```bash
$ mpbf <proto_path> [--no-write] [--no-read]
```

The `--no-write` and `--no-read` switches remove corresponding code in the output.