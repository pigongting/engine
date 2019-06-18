export default function Input(props) {
  const {
    options,
    ik
  } = props;
  const {
    id,
    name,
    defaultValue,
    validate
  } = options;
  return React.createElement(React.Fragment, null, React.createElement("input", {
    type: "text",
    id: id,
    name: name,
    value: ik.values[name],
    onChange: ik.handleChange,
    onBlur: ik.handleBlur
  }), ik.errors[name] && ik.touched[name] && ik.errors[name]);
}
;