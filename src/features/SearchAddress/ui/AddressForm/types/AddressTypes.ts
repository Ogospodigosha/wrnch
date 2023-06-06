export interface AddressFormProps {
    className?: string
}

export interface AddressesState {
    suggestions: Address[] | null;
}

export interface Address {
    value: string | null
}

export type Inputs = {
    query: string,
};
