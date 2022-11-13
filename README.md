# Add the collection slug to the body classname in Payload CMS admin for easy styling

<a href="LICENSE">
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="Software License" />
</a>
<a href="https://github.com/thgh/payload-plugin-body-classname/issues">
  <img src="https://img.shields.io/github/issues/thgh/payload-plugin-body-classname.svg" alt="Issues" />
</a>
<a href="https://npmjs.org/package/payload-plugin-body-classname">
  <img src="https://img.shields.io/npm/v/payload-plugin-body-classname.svg?style=flat-squar" alt="NPM" />
</a>

## Features

- Adds the collection slug to the body on the List & Edit page

## Installation

```
npm install payload-plugin-body-classname
# or
yarn add payload-plugin-body-classname
```

## Usage

```js
// payload.config.ts
import { bodyClassname } from 'payload-plugin-body-classname'

export default buildConfig({
  plugins: [bodyClassname],
})
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Contributions and feedback are very welcome.

To get it running:

1. Clone the project.
2. `npm install`
3. `npm run build`

## Credits

- [Thomas Ghysels](https://github.com/thgh)
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

[link-contributors]: ../../contributors
