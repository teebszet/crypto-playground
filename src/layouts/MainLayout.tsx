import { useHistory } from 'react-router-dom';
import { useErrorContext } from '../hooks/errorContext';
import './MainLayout.scss';

type MainLayoutProps = {
  contentHeader?: string;
  contentDescription?: string;
};
export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  contentHeader,
  contentDescription,
}) => {
  const history = useHistory();
  // TODO useMemo
  const handleClickBack = () => {
    history.goBack();
  };
  const { errorMessage } = useErrorContext();

  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <div className="header__button-container">
          <button onClick={handleClickBack}>{'←'}</button>
        </div>
        <h1>Crypto Playground</h1>
      </header>
      {
        errorMessage && <div className="main-layout__error">{errorMessage}</div>
      }
      <section className="main-layout__content">
        <h2 className="content__header">{contentHeader}</h2>
        <p className="content__description">{contentDescription}</p>
        {children}
      </section>
    </div>
  );
};

export default MainLayout;
