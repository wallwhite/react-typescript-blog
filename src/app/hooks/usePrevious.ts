import { useEffect, useRef } from 'react';
import { Nullable } from '../types';

function usePrevious<T>(value: Nullable<T>): Nullable<T> {
    const ref: { current: Nullable<T> } = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}

export default usePrevious;
