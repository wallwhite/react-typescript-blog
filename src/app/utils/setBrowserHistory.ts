type SetBrowserHistoryType = {
    path: string;
    state?: Object;
    options?: {
        historyPushState?: boolean;
        historyReplaceState?: boolean;
    };
};

const setBrowserHistory = ({ path, state, options = {} }: SetBrowserHistoryType) => {
    const updatedState = { isRedirectedFromApp: true, ...state };
    const historyState = { ...window.history.state, ...updatedState };
    const correctHistoryMethod = options.historyPushState
        ? 'pushState'
        : <'replaceState'>(!!options.historyReplaceState && 'replaceState');

    return window.history[correctHistoryMethod](historyState, '', path);
};

export default setBrowserHistory;
