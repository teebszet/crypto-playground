import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Landing from './routes/Landing';
import Mnemonic from './routes/Mnemonic';
import HdSegWit from './routes/HdSegWit';
import MultiSigP2SH from './routes/MultiSigP2SH';
import EthereumConnection from './routes/EthereumConnection';
import { ErrorContext } from './hooks/errorContext'
import './App.scss';

export type RouteProps = {
  title?: string;
  description?: string;
};

export type RouteItem = {
  Component: React.FC<RouteProps>;
  route: string;
  title: string;
  description: string;
};

const routes: RouteItem[] = [
  {
    Component: Mnemonic,
    route: '/mnemonic',
    title: 'Mnemonic Words',
    description: 'Generate random mnemonic words using BIP-39',
  },
  {
    Component: HdSegWit,
    route: '/hd-segwit',
    title: 'HD SegWit Bitcoin Address',
    description:
      'Generate Hierarchical Deterministic (HD) Segregated Witness (SegWit) bitcoin address from a given seed and path',
  },
  {
    Component: MultiSigP2SH,
    route: '/multisig-p2sh',
    title: 'Multi-sig P2SH',
    description:
      'Generate an n-out-of-m Multisignature (multi-sig) Pay-To-Script-Hash (P2SH) bitcoin address, where n, m and public keys can be specified',
  },
  {
    Component: EthereumConnection,
    route: '/ethereum-connection',
    title: 'Ethereum Connection Demo',
    description:
      'Demo a connection to ethereum chain using ethers.js',
  },
];

export default function App() {
  const [errorMessage, setErrorMessage] = useState('');
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing routes={routes} />
        </Route>
        {routes.map(({ Component, route, title, description }) => (
          <Route exact key={route} path={route}>
            <ErrorContext.Provider value={{ errorMessage, setErrorMessage }}>
              <MainLayout
                contentHeader={title}
                contentDescription={description}
              >
                <Component />
              </MainLayout>
            </ErrorContext.Provider>
          </Route>
        ))}
      </Switch>
    </Router>
  );
}
