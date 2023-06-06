import {useState} from "react";
import {AddressesState} from "features/SearchAddress/ui/AddressForm/types/AddressTypes";
import {useMutation} from "react-query";
import {AddressAPI} from "features/SearchAddress/model/service/AddressAPi";
import {AxiosError} from "axios";

export const useGetAddress = () => {
    const [data, setData] = useState<AddressesState>(null);
    const { mutate: getAddress, isLoading } = useMutation(AddressAPI.getAddress, {
        mutationKey: ['getAddress'],
        onSuccess: (res) => {
            setData(res.data)
        },
        onError: (res: AxiosError<{ message: string }>) => {
            throw new Error(res.message)
        }

    })
    return {
        getAddress,
        isLoading,
        data
    }

}
