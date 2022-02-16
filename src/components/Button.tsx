import './Button.scss';

type ButtonProps = {};
export const Button: React.FC<
  ButtonProps & React.HTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
  return (
    <button {...props} className="primary-button">
      {children}
    </button>
  );
};

export default Button;
