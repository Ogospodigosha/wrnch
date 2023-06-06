import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import Logo from 'shared/assets/icons/logo.svg'
import Person from 'shared/assets/icons/person.svg'



interface NavbarProps {
    className?: string
    setMenuActive: (menuActive: boolean)=>void
    menuActive: boolean
}

export const Navbar = ({className, setMenuActive, menuActive}: NavbarProps) => {
    const clickHandler =() =>{
        setMenuActive(!menuActive)
    }
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.logoBlock}>
               <div className={cls.logo}>
                   <Logo className={cls.Logo}/>
               </div>
                <div className={cls.title}>Wrench CRM</div>
            </div>
            <div className={cls.personBlock}>
                <div className={cls.burger} onClick={clickHandler}>
                    <span/>
                </div>
               <div className={cls.person}>
                   <Person/>
               </div>
                <div className={cls.title}>Имя Фамилия</div>
            </div>
        </div>
    );
};

