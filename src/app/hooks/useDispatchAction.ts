import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export default <T>(action: T): T => {
    const dispatch = useDispatch();

    // @ts-ignore
    return useCallback((...args) => dispatch(action(...args)), [dispatch]);
};
