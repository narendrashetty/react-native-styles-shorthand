# react-native-styles-shorthand
Easy to use CSS shorthand properties in React-Native

## Installation

`$ npm install react-native-styles-shorthand --save`

## Suported Properties

- margin
- padding

## Usage
```js
import shorthand from 'react-native-styles-shorthand';

const styles = StyleSheet.create(shorthand({
  container: {
    flex: 1,
    margin: '10 20 30 40'
  },
  welcome: {
    padding: '10 20',
    margin: '100',
  }
}));

```

## TODO
- [x] support `margin`
- [x] support `padding`
- [x] support `border`
- [ ] support `box-shadow`
- [ ] support `background`
- [ ] support for individual class styles

## License

The MIT License

Copyright (c) 2010-2016 Narendra N Shetty @narendrashetty

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
