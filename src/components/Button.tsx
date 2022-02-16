import './Button.scss';

export const Button: React.FC = ({ children }) => {
  return <button className="primary-button">{children}</button>;
};

export default Button;
