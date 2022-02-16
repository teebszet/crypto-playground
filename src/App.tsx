import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './routes/Landing';
import './App.scss';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
      </Switch>
    </Router>
  );
}
