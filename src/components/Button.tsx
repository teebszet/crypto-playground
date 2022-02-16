import { forwardRef } from 'react';
import './Button.scss';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  // additional props here
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
  return (
    <button ref={ref} {...props} className="primary-button">
      {children}
    </button>
  );
});
Button.displayName = 'Button';

export default Button;
