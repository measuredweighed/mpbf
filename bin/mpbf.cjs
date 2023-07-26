#!/usr/bin/env node

'use strict';

var resolve = require('resolve-protobuf-schema');
var compile = require('../compile.cjs');

if (process.argv.length < 3) {
    console.error('Usage: mpbf [file.proto] [--no-read] [--no-write]');
    return;
}

var code = compile(resolve.sync(process.argv[2]), {
    noRead: process.argv.indexOf('--no-read') >= 0,
    noWrite: process.argv.indexOf('--no-write') >= 0
});

process.stdout.write(code);
