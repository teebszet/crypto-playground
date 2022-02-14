import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import './App.scss';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainLayout>
            <div>this is my app content</div>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
}
