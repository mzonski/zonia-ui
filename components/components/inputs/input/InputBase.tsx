import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export type InputProps = {
  type: HTMLInputElement['type'];
};

const InputComponent = ({ asd, children }: PropsWithChildren<InputProps>, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div ref={ref}>
      <div>{asd}</div>
      <div>{children}</div>
    </div>
  );
};

export const Input = forwardRef(InputComponent);
