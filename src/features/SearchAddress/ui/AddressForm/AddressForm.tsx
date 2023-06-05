import cls from './AddressForm.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import Search from 'shared/assets/icons/search.svg'
import {Input} from "shared/ui/Input/Input";
import {useState} from "react";

interface AddressFormProps {
    className?: string
}

export const AddressForm = ({className}:AddressFormProps) => {
    const [value, setValue] = useState('')
    const onChange = (val: string) =>{
        setValue(val)
    }
    return (
        <div className={classNames(cls.AddressForm, {}, [className])}>
            <Input className={cls.inpt} placeholder={'Введите интересующий вас адрес'} value={value} onChange={onChange}/>
            <Button theme={ThemeButton.STANDARD}>
                <div style={{display: 'flex', alignItems:'center'}}>
                  <div style={{marginRight: '16px'}}><Search className={cls.search} /></div>
                    <div className={cls.find}>Поиск</div>
                </div>
            </Button>
        </div>
    );
};

