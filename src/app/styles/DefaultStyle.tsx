import React from 'react';
import { Global, css } from '@emotion/react';
import { CSSReset, useColorMode } from '@chakra-ui/react';
import { prismLightTheme, prismDarkTheme } from 'app/styles';

type DefaultStyleProps = {
    children: any;
};

const DefaultStyle = ({ children }: DefaultStyleProps): any => {
    const { colorMode } = useColorMode();

    console.log(colorMode);
    return (
        <>
            <CSSReset />
            <Global
                styles={css`
                    ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};

                    ::selection {
                        background-color: #47a3f3;
                        color: #fefefe;
                    }

                    html {
                        min-width: 360px;
                        scroll-behavior: smooth;
                    }

                    #root {
                        display: flex;
                        flex-direction: column;
                        min-height: 100vh;
                        background: ${colorMode === 'light' ? 'white' : '#171923'};
                    }
                `}
            />
            {children}
        </>
    );
};

export default DefaultStyle;
