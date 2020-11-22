import React, { useEffect } from 'react';

const useOnClickOutside = (ref: React.RefObject<any>, handler: Function, deps: any[] = []): void => {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            if (!ref.current || ref.current.contains(event.target)) return;

            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler, ...deps]);
};

export default useOnClickOutside;
