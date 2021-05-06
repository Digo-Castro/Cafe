import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/login" component={Login} />
        <Route path="/editor" component={Editor} />
        <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
