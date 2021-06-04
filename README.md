<p align="center"><img src="logo.png" width="80%"/></p>

<h2 align="center">🤏 Micro Configurations Reader for Masses</h2>

- The smallest configuration reader in the world.
- Works with any JSON file as configuration source.
- Has only one external dependency.

## Getting Started

Install uConfig using [`npm`](https://www.npmjs.com/package/uconfig):

```bash
npm i uconfig
```

## Usage

Create a JSON file which will hold your configuration.

For example:

```json
{
    "DB": {
        "USERNAME": "user",
        "PASSWORD": "password"
    },
    "API": {
        "ENDPOINT": "http://example.com"
    }
}
```
Initialize uConfig instance:

```javascript
const uConfig = require("uconfig").default;

const config = new uConfig(/* Path to configuration JSON */);
```
Read configuration value:
```javascript
config.get("DB.USERNAME")
```
Fallback value:
```javascript
config.get("DB.PORT", 27017)
```
