let hasBorderRadius = false;

function expandValues(rule, value) {
  let outputRule = {};
  let values = value.split(' ');

  // Lets always generate the three rules
  values = values.length === 1 ? [values[0], values[0], values[0], values[0]]
    : values.length === 2 ? [values[0], values[1], values[0], values[1]]
    : values.length === 3 ? [values[0], values[1], values[2], values[1]]
    : values.length === 4 ? values : 0;

  outputRule = {
    [`${rule}Top`]:    parseInt(values[0], 10),
    [`${rule}Right`]:  parseInt(values[1], 10),
    [`${rule}Bottom`]: parseInt(values[2], 10),
    [`${rule}Left`]:   parseInt(values[3], 10)
  }

  return outputRule;
}

function generateBorderStyle(rule, value) {
  let result = [];
  const values = value.split(' ');
  const borderTypes = ['dotted','dashed', 'solid'];

  for (value of values) {
    if (borderTypes.includes(value)) {
      // borderStyle dotted or dashed without a borderRadius doesn't work.
      // Issue reported on https://github.com/facebook/react-native/issues/18285 (and ignore by FB)
      if (!hasBorderRadius && (value !== 'solid')) {
        result['borderRadius'] = 1;
      }
      result[`${rule}Style`] = value;
    } else
    if (!isNaN(parseInt(value))) {
      result[`${rule}Width`] = parseInt(value);
    } else
      result[`${rule}Color`] = value;
  }
  return result;
}

function generateStyle(rule, value) {

  // Simple format. One rule, one value. Just return it...
  if ( typeof(value) == 'number') {
    return {[rule]: value}
  }

  switch(rule) {
    case 'margin':
    case 'padding':
      return expandValues(rule,value);
    case 'border':
    case 'borderTop':
    case 'borderBottom':
    case 'borderRight':
      return generateBorderStyle(rule,value);
  }
}

function parseStyles(selectors) {
  const borders = ['border', 'borderTop', 'borderBottom', 'borderRight', 'borderLeft']
  const supportedShorthand = ['margin', 'padding', ...borders];
  const result = {};

  for (let selector in selectors) {
    let rules = selectors[selector];
    result[selector] = result[selector] || {};
    hasBorderRadius = Object.keys(rules).includes('borderRadius');
    for (let rule in rules) {
      if (supportedShorthand.includes(rule)) {
        Object.assign(result[selector], generateStyle(rule, rules[rule]));
      } else {
        result[selector][rule] = rules[rule];
      }
    }
    hasBorderRadius = false;
  }
  return result;
}

export default function ReactNativeShorthand(styles = {}) {
  return parseStyles(styles);
}