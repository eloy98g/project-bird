import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Contact from '../containers/Contact';
import AboutUs from '../containers/AboutUs';
import Purpose from '../containers/Purpose';
import Works from '../containers/Works';
import Services from '../containers/Services';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/aboutus' component={AboutUs} />
          <Route exact path='/purpose' component={Purpose} />
          <Route exact path='/works' component={Works} />
          <Route exact path='/services' component={Services} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;