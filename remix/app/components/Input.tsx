import type { ReactNode } from 'react';

type Props = {
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
  children?: ReactNode;
};
export const Input = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <fieldset className="form-group">
      {children}
      <input className="form-control form-control-lg" {...rest} />
    </fieldset>
  );
};
