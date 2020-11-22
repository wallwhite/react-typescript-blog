import React from 'react';
import _ from 'underscore';
import { Redirect } from 'react-router-dom';
import errorCodes from '../../constants/errorCodes';
import { routePaths } from '../../routes';

type ErrorPageProps = {
    match: {
        params: {
            code: number;
        };
    };
};

const ErrorPage: React.FunctionComponent<ErrorPageProps> = ({
    match: {
        params: { code },
    },
}: ErrorPageProps) => {
    const isHttpServerError = (): boolean => +code >= 500;
    const handleReloadPage = (): void => window.history.back();

    const isExistedError = _.isNumber(+code) && !!errorCodes[code];

    if (!isExistedError) return <Redirect to={routePaths.errorPage('404')} />;

    return (
        <div>
            <h2>{`Error ${code}:${errorCodes[code]}`}</h2>
            {isHttpServerError() && (
                <button onClick={handleReloadPage} type="button">
                    Refresh Page
                </button>
            )}
        </div>
    );
};

export default ErrorPage;
