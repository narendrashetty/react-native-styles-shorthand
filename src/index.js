function generateStyle(rule, value) {
  const directionX = ['left', 'right'];
  const directionY = ['top', 'bottom'];

  const typeOf = typeof value;
  switch(typeOf) {
    case 'number':
      return {
        [rule]: value
      };
    case 'string':
      const values = value.split(' ');
      if (values.length === 1) {
        return {
          [rule]: parseInt(values[0], 10)
        };
      } else if (values.length === 2) {
        return {
          [`${rule}Top`]: parseInt(values[0], 10),
          [`${rule}Right`]: parseInt(values[1], 10),
          [`${rule}Bottom`]: parseInt(values[0], 10),
          [`${rule}Left`]: parseInt(values[1], 10)
        };
      } else if (values.length === 3) {
        return {
          [`${rule}Top`]: parseInt(values[0], 10),
          [`${rule}Right`]: parseInt(values[1], 10),
          [`${rule}Bottom`]: parseInt(values[2], 10),
          [`${rule}Left`]: parseInt(values[1], 10)
        };
      } else if (values.length === 4) {
        return {
          [`${rule}Top`]: parseInt(values[0], 10),
          [`${rule}Right`]: parseInt(values[1], 10),
          [`${rule}Bottom`]: parseInt(values[2], 10),
          [`${rule}Left`]: parseInt(values[3], 10)
        };
      }
  }
}


function parseStyles(styles) {
  const supportedShorthand = ['margin', 'padding'];
  const result = {};

  for (let style in styles) {
    let rules = styles[style];
    result[style] = result[style] || {};

    for (let rule in rules) {
      if (supportedShorthand.indexOf(rule) > -1) {
        Object.assign(result[style], generateStyle(rule, rules[rule]));
      } else {
        result[style][rule] = rules[rule];
      }
    }
  }
  return result;
}

export default function ReactNativeShorthand(styles = {}) {
  return parseStyles(styles);
}