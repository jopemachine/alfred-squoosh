# alfred-squoosh

> Convert images through Squoosh in Alfred 4

[![NPM download total](https://img.shields.io/npm/dt/alfred-squoosh)](http://badge.fury.io/js/alfred-squoosh)
[![NPM version](https://badge.fury.io/js/alfred-squoosh.svg)](http://badge.fury.io/js/alfred-squoosh)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![GitHub issues](https://img.shields.io/github/issues/jopemachine/alfred-squoosh.svg)](https://GitHub.com/jopemachine/alfred-squoosh/issues/)

![demo](./demo.gif)

## Install

```
$ npm install --global alfred-squoosh
```

*Requires [Node.js](https://nodejs.org) 12+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*

## Usage

In Alfred, select image files and turn up the file window, type `squ`, and <kbd>Enter</kbd>.

## Config

You can change converter's setting in your config.

![config](./config.png)

### width

Type: `Number`

Required: `false`

If you want to resize your image, set this value.

When either width or height is specified, the image resized to specified size keeping aspect ratio.

### height

Type: `Number`

Required: `false`

If you want to resize your image, set this value.

When either width or height is specified, the image resized to specified size keeping aspect ratio.

### format

Type: `String`

Required: `true`

Default: `webp`

### quality

Type: `Number`

Required: `true`

Default: `100`

### dest

Type: `String`

Required: `false`

Default: `process.cwd()`

## Related links

- [squoosh](https://github.com/GoogleChromeLabs/squoosh) - Image compression web app that reduces image sizes through numerous formats.

## License

MIT © [jopemachine](https://github.com/jopemachine)