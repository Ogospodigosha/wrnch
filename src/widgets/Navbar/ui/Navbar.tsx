import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import Logo from 'shared/assets/icons/logo.svg'
import Person from 'shared/assets/icons/person.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";


interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.logoBlock}>
               <div className={cls.logo}>
                   <Logo/>
               </div>
                <div className={cls.title}>Wrench CRM</div>
            </div>
            <div className={cls.personBlock}>
               <div className={cls.person}>
                   <Person/>
               </div>
                <div className={cls.title}>Имя Фамилия</div>
            </div>
        </div>
    );
};

