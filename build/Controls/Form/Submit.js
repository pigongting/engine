export default function Submit(props) {
  const {
    options,
    ik
  } = props;
  return React.createElement("button", {
    type: "submit",
    disabled: ik.isSubmitting
  }, "\u63D0\u4EA4");
}
;