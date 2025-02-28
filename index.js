function pickKeys(json, keys) {
  const result = {};
  keys.forEach(key => {
    if (json.hasOwnProperty(key)) {
      result[key] = json[key];
    }
  });
  return result;
}


function omitKeys(json, keys) {
  const result = { ...json };
  keys.forEach(key => {
    delete result[key];
  });
  return result;
}

function filterAllowedKeys(json, allowedKeys) {
  const result = {};
  Object.keys(json).forEach(key => {
    if (allowedKeys.includes(key)) {
      result[key] = json[key];
    }
  });
  return result;
}

module.exports = { pickKeys, omitKeys, filterAllowedKeys };