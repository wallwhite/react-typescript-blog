import * as React from 'react';
import { RefType } from '../types';

const withForwardedRef = (Component: React.ComponentType<any>) => {
    const forwardRef: React.ForwardRefRenderFunction<HTMLElement, any> = (
        props: React.PropsWithChildren<any>,
        ref: RefType<HTMLElement>,
    ): React.ReactElement | null => {
        const componentRef = React.useRef(null);

        const currentRef = ref || componentRef;

        return <Component {...props} forwardRef={currentRef} />;
    };

    const componentWithForwardedRef = React.forwardRef(forwardRef);

    componentWithForwardedRef.defaultProps = Component.defaultProps;

    return componentWithForwardedRef;
};

export default withForwardedRef;
