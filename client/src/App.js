import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Layouts/Header';
import Layout from './components/Layouts/Layout';
import Footer from './components/Layouts/Footer';
import PrivateUserRoute from './components/Routes/PrivateUserRoute';
import Spinner from './components/Spinner/Spinner';

// lazy
const LanidngPage = lazy(() => import('./pages/LanidngPage'));
const DetailPage = lazy(() => import('./pages/DetailPage'));
const ManageProperty = lazy(() => import('./pages/ManageProperty'));

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Switch>
          <Suspense fallback={<Spinner />}>
            {/* LanidngPage  */}
            <Route exact path='/' component={LanidngPage} />
            {/* DetailPage  */}
            <Route exact path='/:id' component={DetailPage} />
            {/* Private User Route  */}
            <PrivateUserRoute
              exact
              path='/user/manage-property'
              component={ManageProperty}
            />
          </Suspense>
        </Switch>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
