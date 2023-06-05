import cls from './Sidebar.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import Home from 'shared/assets/icons/home.svg'
import Search from 'shared/assets/icons/search.svg'
import Tables from 'shared/assets/icons/tables.svg'
import Calendar from 'shared/assets/icons/calendar.svg'
import Maps from 'shared/assets/icons/maps.svg'
import Widgets from 'shared/assets/icons/vidgets.svg'
import Settings from 'shared/assets/icons/settings.svg'
import Exit from 'shared/assets/icons/exit.svg'
import Arrow from 'shared/assets/icons/arrow.svg'
import Profile from 'shared/assets/icons/profile.svg'
import Control from 'shared/assets/icons/control.svg'
import {AppLink} from "shared/ui/AppLink/AppLink";
import {Accordion} from "shared/ui/Accordion/Accordion";
import {useState} from "react";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [open, setOpen] = useState(false)
    return (
        <div className={classNames(cls.Sidebar, {}, [className])}>
            <div className={cls.items}>
                <div>Меню</div>
                <div className={cls.link}>
                    <AppLink to={"/"}>
                        <div className={cls.item}>
                            <div className={cls.icon}><Home/></div>
                            <div>Главная</div>
                        </div>
                    </AppLink>
                </div>
                <div className={cls.link}>
                    <AppLink to={"/address"}>
                        <div className={cls.item}>
                            <div className={cls.icon}><Search/></div>
                            <div>Поиск Адресов</div>
                        </div>
                    </AppLink>
                </div>
                <div className={cls.link}>
                    <div className={cls.item}>
                        <div className={cls.icon}><Tables/></div>
                        <div>Таблицы</div>
                    </div>
                </div>
                <div className={cls.link}>
                    <div className={cls.item}>
                        <div className={cls.icon}><Calendar/></div>
                        <div>Календаль</div>
                    </div>
                </div>
                <div className={cls.link}>
                    <div className={cls.item}>
                        <div className={cls.icon}><Maps/></div>
                        <div>Карты</div>
                    </div>
                </div>
                <div className={cls.link}>
                    <div className={cls.item}>
                        <div className={cls.icon}><Widgets/></div>
                        <div>Виджеты</div>
                    </div>
                </div>
                <div className={cls.link}>
                    <Accordion first={
                        <div style={{marginTop:'40px', paddingLeft:'48px'}}>
                            <div className={cls.item}>
                                <div className={cls.icon}><Profile/></div>
                                <div>Настройки профиля</div>
                            </div>
                        </div>
                    } open={open} setOpen={setOpen}
                    second={
                        <div style={{marginTop:'40px', paddingLeft:'48px'}}>
                            <div className={cls.item}>
                                <div className={cls.icon}><Control/></div>
                                <div>Управление финансами</div>
                            </div>
                        </div>
                    }
                    >
                        <div className={cls.item}>
                            <div className={cls.icon}><Settings/></div>
                            <div>Настройки</div>
                            <div className={open ? `${cls.arrow} ${cls.open} ` : cls.arrow}><Arrow/></div>
                        </div>
                    </Accordion>
                </div>
                <div className={cls.link}>
                    <div className={cls.item}>
                        <div className={cls.icon}><Exit/></div>
                        <div>Выход</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

