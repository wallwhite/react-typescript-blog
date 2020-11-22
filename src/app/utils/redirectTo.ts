import _ from 'underscore';
import qs from 'query-string';
import { QsParameterOptionsType, ObjectLiteralType, Nullable } from '../types';
import { setBrowserHistory, historyManager } from '.';

type RedirectToType = {
    path: string;
    state?: ObjectLiteralType;
    query?: ObjectLiteralType;
    replacePrevHistory?: boolean;
    options?: Nullable<QsParameterOptionsType>;
};

const redirectTo = ({ path, state = {}, query, replacePrevHistory, options }: RedirectToType): any => {
    const search = query && qs.stringify(query);
    const updatedState = { isRedirectedFromApp: true, ...state };
    const payload = { pathname: path, state: updatedState, search: `?${search || ''}` };

    if (_.isEmpty(options) || !options)
        return replacePrevHistory && historyManager.history
            ? historyManager.history.replace(payload)
            : historyManager.history.push(payload);

    return setBrowserHistory({ path, state, options });
};

export { redirectTo, RedirectToType };
