import rpcService from '../utilities/rpcService.js';
import validate from '../utilities/validate.js';

import Input from '../Controls/Form/Input.js';
import Submit from '../Controls/Form/Submit.js';
import Reset from '../Controls/Form/Reset.js';

const { Formik } = window.Formik;

function generateFormControls(fields, ik) {
  return Object.keys(fields).map(key => {
    switch (fields[key]['type']) {
      case 'Input':
        return <Input options={fields[key]} ik={ik} />;
      default:
        return null;
    }
  });
}

function generateOperateButtons(buttons, ik) {
  return Object.keys(buttons).map(key => {
    switch (key) {
      case 'Submit':
        return <Submit options={buttons[key]} ik={ik} />;
      case 'Reset':
        return <Reset options={buttons[key]} ik={ik} />;
      default:
        return null;
    }
  });
}

function getInitialValues(fields) {
  const values = {};

  for (let key in fields){
    values[key] = fields[key]['defaultValue'];
  }

  return values;
}

function generateValidate(fields, values) {
  const errors = {};

  for (let key in fields) {
    const { rules } = fields[key];

    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i];

      // 只要有一套规则不过，跳出循环
      if (validate[rule['type']] && validate[rule['type']](values[key]) === false) {
        errors[key] = rule['message'];
        break;
      }
    }
  }

  return errors;
}

function handleSubmit(buttons, initialValues, values, actions) {
  if (buttons['Submit'] === undefined) { return; }

  const response = rpcService.rGet({
    url: buttons['Submit']['url']
  })

  actions.setSubmitting(false);
}

export default function QueryBar(props) {
  const { options } = props;
  const { fields, buttons } = options;

  const initialValues = getInitialValues(fields);

  return (
    <Formik
      initialValues={initialValues}
      validate={generateValidate.bind(this, fields)}
      onSubmit={handleSubmit.bind(this, buttons, initialValues)}
      render={(ik) => {
        // console.log(ik);
        return (
          <form onSubmit={ik.handleSubmit} onReset={ik.handleReset}>
            {generateFormControls(fields, ik)}
            {generateOperateButtons(buttons, ik)}
          </form>
        );
      }}
    />
  );
};
