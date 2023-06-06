import cls from './AddressPage.module.scss'
import {AddressForm} from "features/SearchAddress";

const AddressPage = () => {
    return (
        <div>
           <div className={cls.title}>Поиск адресов</div>
            <div className={cls.address}>Введите интересующий вас адрес</div>
            <div className={cls.form}>
                <AddressForm/>
            </div>
        </div>
    );
};

export default AddressPage;
