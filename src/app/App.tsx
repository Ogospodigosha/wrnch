import React, { Suspense } from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AddressPage} from "pages/AddressPage";
import {MainPage} from "pages/MainPage";
import {Navbar} from "widgets/Navbar";

const App = () => {
    return (
        <div className='app'>
            <Navbar/>
            <Suspense fallback={<div>loading...</div>} >
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/address'} element={<AddressPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
