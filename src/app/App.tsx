import React, { Suspense } from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AddressPage} from "pages/AddressPage";
import {MainPage} from "pages/MainPage";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {NotFoundPage} from "pages/NotFoundPage";
import {PageLoader} from "shared/ui/PageLoader/PageLoader";

const App = () => {
    return (
        <div className='app'>
            <Navbar/>
           <div className='content-page'>
               <Sidebar/>
               <Suspense fallback={<PageLoader/>} >
                   <Routes>
                       <Route path={'/'} element={<div className='page-wrapper'><MainPage/></div>}/>
                       <Route path={'/address'} element={<div className='page-wrapper'><AddressPage/></div>}/>
                       <Route path={'*'} element={<div className='page-wrapper'><NotFoundPage/></div>}/>
                   </Routes>
               </Suspense>
           </div>
        </div>
    );
};

export default App;
