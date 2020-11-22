import { ApolloClient, createHttpLink, InMemoryCache, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { API_DOMAIN } from 'app/constants'; // AUTHORIZATION_HEADER
// import { getFromLocalStorage } from 'app/utils';

const errorHandler = () => {};

const httpLink = createHttpLink({
    uri: `${API_DOMAIN}/graphql`,
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const errorLink = onError(errorHandler);

const authLink = setContext((_, { headers }) =>
    //    const token: string | null = getFromLocalStorage('token');

    ({
        headers: {
            ...headers,

            // [AUTHORIZATION_HEADER]: token ? `Token token="${token}"` : null,
        },
    }),
);

// possibleTypes TODO:
const client = new ApolloClient({
    link: from([authLink, errorLink, httpLink]),
    cache: new InMemoryCache({}),
});

export default client;
