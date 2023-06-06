import { instance, options } from 'shared/api/api';
import { AddressesState } from 'features/SearchAddress/ui/AddressForm/types/AddressTypes';

export const AddressAPI = {
  getAddress(data: { query: string }) {
    return instance.post<AddressesState>('', data, options);
  },
};
