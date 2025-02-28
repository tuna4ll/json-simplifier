# json-simplifier

**json-simplifier** is a simple Node.js module for filtering and managing JSON data. This module allows you to perform various operations on your JSON objects.

## Features

- **pickKeys**: Selects specific keys from a JSON object.
- **omitKeys**: Removes specific keys from a JSON object.
- **filterAllowedKeys**: Returns only the allowed keys in a JSON object.

## Installation

You can install the module via npm:

```bash
npm install json-simplifier
```

## Usage
You can use the module's functions as follows:
```javascript
const { pickKeys, omitKeys, filterAllowedKeys } = require('json-simplifier');

const sampleJson = { 
  name: 'Tuna', 
  age: 25, 
  email: 'tuna@example.com', 
  country: 'Turkey' 
};

console.log(pickKeys(sampleJson, ['name', 'email']));  
// { name: 'Tuna', email: 'tuna@example.com' }

console.log(omitKeys(sampleJson, ['age', 'country'])); 
// { name: 'Tuna', email: 'tuna@example.com' }

console.log(filterAllowedKeys(sampleJson, ['name', 'country'])); 
// { name: 'Tuna', country: 'Turkey' }
```
