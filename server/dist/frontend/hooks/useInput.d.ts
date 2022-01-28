import { Dispatch, SetStateAction } from "react";
declare function useInput<T>(initialValue: T): [
    T,
    (event?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    Dispatch<SetStateAction<T>>
];
export default useInput;
