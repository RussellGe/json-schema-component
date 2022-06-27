const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const localize = require('ajv-i18n');

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 10,
      //   test: '10',
      errorMessage: 'budui',
    },
    age: {
      type: 'number',
    },
    pets: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    isWorker: {
      type: 'boolean',
    },
  },
  required: ['name', 'age'],
};
const ajv = new Ajv({
  allErrors: true,
  jsonPointers: true,
});
addFormats(ajv);
require('ajv-errors')(ajv);

ajv.addFormat('myName', (data) => {
  console.log(data);
  return data === 'russ';
});
ajv.addKeyword('test', {
  validate(mySchema, data) {
    console.log(mySchema, data);
    return false;
  },
});
const validate = ajv.compile(schema);
const valid = validate({
  name: 'rusfdass',
  age: 123,
  pets: ['123', '4321'],
  isWorker: true,
});
if (!valid) {
  localize.zh(validate.errors);
  console.log(validate.errors);
} else {
  console.log(valid);
}
