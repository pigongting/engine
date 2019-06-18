export default function Submit(props) {
  const { options, ik } = props;

  return <button type="submit" disabled={ik.isSubmitting}>提交</button>;
};
