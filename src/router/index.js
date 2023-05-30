import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Loader } from 'components';
import PrivateRoute from './PrivateRoute';

const UIControls = lazy(() => import('ui-controls/UIControls'));
const UIComponents = lazy(() => import('components/UIComponents'));
const Login = lazy(() => import('../modules/login/container'));
const Dashboard = lazy(() => import('../modules/home/container'));
const About = lazy(() => import('modules/about/container'));
const WorkShocase = lazy(() => import('modules/work-shocase/container'));
const StyleGuide = lazy(() => import('modules/style-guide/container'));

const Error404 = lazy(() => import('./Error404'));

const Routing = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/work-shocase"
          element={
            <PrivateRoute>
              <WorkShocase />
            </PrivateRoute>
          }
        />
        <Route
          path="/style-guide"
          element={
            <PrivateRoute>
              <StyleGuide />
            </PrivateRoute>
          }
        />
        {process.env.REACT_APP_ENABLE_DEV_PAGES === 'true' ? (
          <Route path="/ui-controls" element={<UIControls />} />
        ) : null}
        {process.env.REACT_APP_ENABLE_DEV_PAGES === 'true' ? (
          <Route path="/ui-components" element={<UIComponents />} />
        ) : null}
        <Route element={<Error404 />} />
      </Routes>
    </Suspense>
  </Router>
);

export default Routing;
