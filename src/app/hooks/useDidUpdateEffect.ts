import { useRef, useEffect, EffectCallback, DependencyList } from 'react';

const useDidUpdateEffect = (fn: EffectCallback, deps: DependencyList): void => {
    const isMounted = useRef<boolean>(false);

    useEffect(() => {
        if (isMounted.current) fn();
        else isMounted.current = true;
    }, deps);
};

export default useDidUpdateEffect;
