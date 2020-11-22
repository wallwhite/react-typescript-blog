import React, { Component } from 'react';
import _ from 'underscore';
import ErrorFallback from './ErrorFallback';
import { Nullable } from '../../../../../types';

type FallbackComponentProps = { info: ErrorInfo | null | undefined; error?: Error };

type ErrorBoundaryProps = {
    children?: React.ReactNode;
    fallback?: React.ComponentType<FallbackComponentProps>;
};

type ErrorInfo = {
    componentStack: string;
};

type ErrorBoundaryState = {
    error: Nullable<Error>;
    info: Nullable<ErrorInfo>;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            error: null,
            info: null,
        };
    }

    componentDidCatch(error: Error, info: ErrorInfo): void {
        this.setState({
            error,
            info,
        });
    }

    render(): React.ReactNode {
        const { error, info } = this.state;
        const { children, fallback: FallbackComponent } = this.props;

        if (!_.isNull(error)) {
            return FallbackComponent ? <FallbackComponent info={info} error={error} /> : <ErrorFallback />;
        }

        return children || null;
    }
}

export default ErrorBoundary;
