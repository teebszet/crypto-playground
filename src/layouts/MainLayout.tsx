import { useHistory } from 'react-router-dom';
import './MainLayout.scss';

export const MainLayout: React.FC = ({ children }) => {
  const history = useHistory();
  // TODO useMemo
  const handleClickBack = () => {
    history.goBack();
  };
  return (
    <div className="main-layout">
      <header className="main-layout__header">
        {history.length > 1 && (
          <div className="header__button-container">
            <button onClick={handleClickBack}>{'←'}</button>
          </div>
        )}
        <h1>Bitcoin Playground</h1>
      </header>
      <section className="main-layout__content">{children}</section>
    </div>
  );
};

export default MainLayout;
