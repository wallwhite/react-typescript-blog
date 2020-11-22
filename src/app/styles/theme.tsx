import React from 'react';
import { theme as chakraTheme } from '@chakra-ui/react';

const theme = {
    ...chakraTheme,
    fonts: {
        ...chakraTheme.fonts,
        body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    },
    fontWeights: {
        normal: 400,
        medium: 600,
        bold: 700,
    },
    icons: {
        // @ts-ignore
        ...chakraTheme.icons,
        x: {
            path: (
                <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M15 9l-6 6M9 9l6 6" />
                </g>
            ),
        },
    },
};

export default theme;
