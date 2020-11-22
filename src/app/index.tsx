import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { HelmetProvider } from 'react-helmet-async';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { Routes } from 'app/routes';
import { ErrorBoundary } from 'app/view/components';
import store from 'app/store';
import { historyManager } from 'app/utils';
import { theme, DefaultStyle } from 'app/styles';
import { appolloClient } from 'app/graphql';

const App: React.FunctionComponent = () => (
    <ErrorBoundary>
        <HelmetProvider>
            <ApolloProvider client={appolloClient}>
                <Provider store={store}>
                    <Router history={historyManager.history}>
                        <ChakraProvider theme={theme}>
                            <ColorModeProvider options={{ initialColorMode: 'light' }}>
                                <DefaultStyle>
                                    <Routes />
                                </DefaultStyle>
                            </ColorModeProvider>
                        </ChakraProvider>
                    </Router>
                </Provider>
            </ApolloProvider>
        </HelmetProvider>
    </ErrorBoundary>
);

export default App;
