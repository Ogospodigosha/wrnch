import cls from './Input.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import React, {InputHTMLAttributes} from "react";


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    placeholder?: string
}

export const Input = (props: InputProps) => {
    const {className, value, onChange, type = 'text', placeholder, ...otherProps} = props
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            <input type={type}
                   value={value}
                   onChange={onChangeHandler}
                   placeholder={placeholder}
                   className={cls.input}
                   {...otherProps}
            />
        </div>
    );
};

