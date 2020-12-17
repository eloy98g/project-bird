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
import ScrollToTop from '../utils/ScrollToTop';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <ScrollToTop />
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
    </AppContext.Provider>
  )
}

export default App;