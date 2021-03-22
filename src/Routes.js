import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import ModalMain from './Pages/Products/Components/Modal/ModalMain';
import Products from './Pages/Products/Products';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/products" component={Products} />
          <Route exact path="/" component={Main} />
          <Route exact path="/modal" component={ModalMain} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
