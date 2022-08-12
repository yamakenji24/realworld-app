type Props = {
  type: "text" | "password";
  placeholder: string;
  name: string;
};
export const Input = (props: Props) => {
  return (
    <fieldset className="form-group">
      <input className="form-control form-control-lg" {...props} />
    </fieldset>
  );
};
