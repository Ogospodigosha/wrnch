import {FC} from 'react';


interface AccordionProps {
    first: JSX.Element
    open: boolean
    setOpen: (open: boolean)=>void
    second: JSX.Element
}

export const Accordion: FC<AccordionProps> = ({children, first, setOpen,  open, second}) => {
    const clickHandler = () =>{
        setOpen(!open)
    }
    return (
        <>
            <div onClick={clickHandler}>
                {children}
            </div>
            {
                open && <>
                <>{first}</>
                <>{second}</>
                </>
            }
        </>

    );
};

