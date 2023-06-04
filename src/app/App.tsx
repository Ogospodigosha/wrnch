import React, { Suspense } from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AddressPage} from "pages/AddressPage";
import {MainPage} from "pages/MainPage";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    return (
        <div className='app'>
            <Navbar/>
           <div className='content-page'>
               <Sidebar/>
               <Suspense fallback={<div>loading...</div>} >
                   <Routes>
                       <Route path={'/'} element={<div className='page-wrapper'><MainPage/></div>}/>
                       <Route path={'/address'} element={<div className='page-wrapper'><AddressPage/></div>}/>
                   </Routes>
               </Suspense>
           </div>
        </div>
    );
};

export default App;
