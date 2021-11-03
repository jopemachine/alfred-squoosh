# alfred-squoosh

> Convert image through Squoosh in Alfred 4

## Install

```
$ npm install --global alfred-squoosh
```

*Requires [Node.js](https://nodejs.org) 12+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*

## Usage

In Alfred, select image files and turn up file window, type `squ`, <kbd>Enter</kbd>.

## Config

### width

Type: `Number`

Required: `false`

If you want to resize your image, set this value.

### height

Type: `Number`

Required: `false`

If you want to resize your image, set this value.

### format

Type: `String`

Required: `true`

Default: `webp`

### quality

Type: `Number`

Required: `true`

Default: `90`

### dest

Type: `String`

Required: `false`

Default: `process.cwd()`

## License

MIT © [jopemachine](https://github.com/jopemachine)

## Related links

- [squoosh](https://github.com/GoogleChromeLabs/squoosh)