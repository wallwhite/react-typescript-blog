import React from 'react';

const ErrorFallback: React.FunctionComponent = () => (
    <div className="b-wrap">
        <div className="b-error-page-wrap">
            <div className="b-error-page">
                <h2 className="b-error-page__title">Oops.</h2>
                <p className="b-error-page__pointing">Something went wrong.</p>
            </div>
        </div>
    </div>
);

export default ErrorFallback;
