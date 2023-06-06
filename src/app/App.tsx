import React, { Suspense, useState } from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { AddressPage } from 'pages/AddressPage';
import { MainPage } from 'pages/MainPage';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { NotFoundPage } from 'pages/NotFoundPage';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="app">
      <Navbar menuActive={menuActive} setMenuActive={setMenuActive} />
      <div className="content-page">
        <Sidebar menuActive={menuActive} setMenuActive={setMenuActive} />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route
              path={'/'}
              element={
                <div className="page-wrapper">
                  <MainPage />
                </div>
              }
            />
            <Route
              path={'/address'}
              element={
                <div className="page-wrapper">
                  <AddressPage />
                </div>
              }
            />
            <Route
              path={'*'}
              element={
                <div className="page-wrapper">
                  <NotFoundPage />
                </div>
              }
            />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
