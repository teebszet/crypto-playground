import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Landing from './routes/Landing';
import Mnemonic from './routes/Mnemonic';
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
    Component: Mnemonic,
    route: '/hd-segwit',
    title: 'HD SegWit',
    description:
      'Generate Hierarchical Deterministic (HD) Segregated Witness (SegWit) bitcoin address from a given seed and path',
  },
  {
    Component: Mnemonic,
    route: '/multisig-p2sh',
    title: 'Multi-sig P2SH',
    description:
      'Generate an n-out-of-m Multisignature (multi-sig) Pay-To-Script-Hash (P2SH) bitcoin address, where n, m and public keys can be specified',
  },
];

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing routes={routes} />
        </Route>
        {routes.map(({ Component, route, title, description }) => (
          <Route exact key={route} path={route}>
            <MainLayout contentHeader={title} contentDescription={description}>
              <Component />
            </MainLayout>
          </Route>
        ))}
      </Switch>
    </Router>
  );
}
