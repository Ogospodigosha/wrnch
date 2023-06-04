import React, { Suspense } from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AddressPageAsync} from "./pages/AddressPage/AddressPage.async";

const App = () => {
    return (
        <div className='app'>
            <Link to={'/'}>Главная</Link>
            <Link to={'/address'}>Страница с адресами</Link>
            <Suspense fallback={<div>loading...</div>} >
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/address'} element={<AddressPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
