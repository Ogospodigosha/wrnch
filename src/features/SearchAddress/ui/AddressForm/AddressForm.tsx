import cls from './AddressForm.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import Search from 'shared/assets/icons/search.svg'
import {useForm, SubmitHandler} from "react-hook-form";
import {Input} from "shared/ui/Input/Input";
import {AddressFormProps, Inputs} from "features/SearchAddress/ui/AddressForm/types/AddressTypes";
import {PageLoader} from "shared/ui/PageLoader/PageLoader";
import {useGetAddress} from "features/SearchAddress/model/hooks/useGetAddress";



export const AddressForm = ({className}: AddressFormProps) => {
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const {isLoading, getAddress, data} = useGetAddress()
    if (isLoading) return <PageLoader />

    const onSubmit: SubmitHandler<Inputs> = data => {
        getAddress(data)
    };
    return (
        <>
            <div style={{marginBottom: '32px'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classNames(cls.AddressForm, {}, [className])}>
                        <Input
                            defaultValue={''}
                            {...register("query", {minLength: 3, required: true})}
                            className={cls.inpt}
                            placeholder={'Введите интересующий вас адрес'}
                        />
                        <Button theme={ThemeButton.STANDARD} type={'submit'} className={cls.btn}>
                            <div className={cls.contentWrapper}>
                                <div className={cls.icon}><Search className={cls.search}/></div>
                                <div className={cls.find}>Поиск</div>
                            </div>
                        </Button>
                    </div>
                </form>
            </div>
            {errors.query && <div className={cls.data}>
                <div className={cls.error}>Минимальная длина ввода в поле
                    ввода адреса - 3 символа
                </div>
            </div>}
            {
                data?.suggestions?.length > 0 && <div className={cls.data}>
                    <h3 className={cls.title}>Адреса</h3>
                    {data && data.suggestions?.length === 0 && <div>Адреса не найдены</div>}
                    <ul>
                        {data.suggestions.length > 0 && data.suggestions.map((el, index) => {
                            return <li key={index} className={cls.item}>{el.value}</li>
                        })}
                    </ul>
                </div>
            }
        </>

    );
};

