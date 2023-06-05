import cls from './AppLink.module.scss'
import {LinkProps, NavLink} from "react-router-dom";
import {FC} from "react";


interface AppLinkProps extends LinkProps{
    className?: string
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {to,  className, children, ...otherProps} = props
    return (
        <NavLink to={to}
                 className={({isActive}) => {
                     return `${cls.AppLink} ${isActive && cls.active}`
                 }}
              {...otherProps}
        >
            {children}
        </NavLink>
    );
};

