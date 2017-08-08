# Accumulate Facebook Data

Accumulate facebook data.

## Installation

```
npm i --save accumulate-facebook-data
```

## Facebook query body schema

```
{
  data: [...],
  paging: {
    ...,
    next
  }
}
```

## Usage

```
const acc = require('accumulate-facebook-data')

const url = 'http://graph.facebook.com/v2.10/...'

const data = acc(url)
```

## License

MIT