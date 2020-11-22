/* eslint-disable react/display-name */
/** @jsx jsx */
import Highlight, { defaultProps } from 'prism-react-renderer';
import lightTheme from 'prism-react-renderer/themes/github';
import darkTheme from 'prism-react-renderer/themes/duotoneDark';
import styled from '@emotion/styled';
import { Box, Code, Heading, Kbd, Link, Text, Divider, useColorMode, Textarea } from '@chakra-ui/react';
import { jsx } from '@emotion/react';

const Table = (props: any) => (
    <Box overflowX="scroll" w="full">
        <Box as="table" textAlign="left" mt="32px" w="full" {...props} />
    </Box>
);

const THead = (props: any) => {
    const { colorMode } = useColorMode();
    const bg: any = {
        light: 'gray.50',
        dark: 'whiteAlpha.100',
    };

    return <Box as="th" bg={bg[colorMode as string]} fontWeight="semibold" p={2} fontSize="sm" {...props} />;
};

const TData = (props: any) => (
    <Box as="td" p={2} borderTopWidth="1px" borderColor="inherit" fontSize="sm" whiteSpace="normal" {...props} />
);

const CustomLink = (props: any) => {
    const { colorMode } = useColorMode();
    const color: any = {
        light: 'hsl(208, 99%, 44%)',
        dark: 'hsl(208, 95%, 68%)',
    };

    const { href } = props;
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink) {
        return (
            <Link href={href} isExternal>
                <Link color={color[colorMode as string]} {...props} />
            </Link>
        );
    }

    return <Link color={color[colorMode]} isExternal {...props} />;
};

const Quote = (props: any) => {
    const { colorMode } = useColorMode();
    const bgColor = {
        light: 'blue.50',
        dark: 'blue.900',
    };

    return (
        <Textarea
            mt={4}
            w="98%"
            bg={bgColor[colorMode]}
            variant="left-accent"
            status="info"
            css={{
                '> *:first-of-type': {
                    marginTop: 0,
                    marginLeft: 8,
                },
            }}
            {...props}
        />
    );
};

const DocsHeading = (props: any) => {
    const { children, id } = props;
    return (
        <Heading
            css={{
                scrollMarginTop: '100px',
                scrollSnapMargin: '100px', // Safari
                '&[id]': {
                    pointerEvents: 'none',
                },
                '&[id]:before': {
                    display: 'block',
                    height: ' 6rem',
                    marginTop: '-6rem',
                    visibility: 'hidden',
                    content: `""`,
                },
                '&[id]:hover a': { opacity: 1 },
            }}
            {...props}
            mb="1em"
            mt="2em"
        >
            <Box pointerEvents="auto">
                {children}
                {id && (
                    <Box
                        aria-label="anchor"
                        as="a"
                        color="blue.500"
                        fontWeight="normal"
                        outline="none"
                        _focus={{
                            opacity: 1,
                            boxShadow: 'outline',
                        }}
                        opacity="0"
                        ml="0.375rem"
                        href={`#${id}`}
                    >
                        #
                    </Box>
                )}
            </Box>
        </Heading>
    );
};

const Hr = () => {
    const { colorMode } = useColorMode();
    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600',
    };

    return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const CodeComp = ({ children }: any) => {
    const { colorMode } = useColorMode();
    const Pre = styled.pre`
        text-align: left;
        margin: 1em 0;
        padding: 0.5em;
        overflow: scroll;
        white-space: none !important;
    `;

    const Line = styled.div`
        display: table-row;
    `;

    const LineNo = styled.span`
        display: table-cell;
        text-align: right;
        padding-right: 1em;
        user-select: none;
        opacity: 0.5;
    `;

    const LineContent = styled.span`
        display: table-cell;
    `;

    const theme = colorMode === 'dark' ? darkTheme : lightTheme;

    return (
        <Highlight {...defaultProps} theme={theme} code={String(children).trim()} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={`${className} code-toolbar`} style={style}>
                    {tokens.map((line, i) => (
                        <Line key={i.toString()} {...getLineProps({ line, key: i })}>
                            <LineNo>{i + 1}</LineNo>
                            <LineContent>
                                {line.map((token, key) => (
                                    <span key={key.toString()} {...getTokenProps({ token, key })} />
                                ))}
                            </LineContent>
                        </Line>
                    ))}
                </Pre>
            )}
        </Highlight>
    );
};

const MDXComponents = {
    h1: (props: any): any => <Heading as="h1" size="xl" my={4} {...props} />,
    h2: (props: any): any => <DocsHeading as="h2" fontWeight="bold" size="lg" {...props} />,
    h3: (props: any): any => <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />,
    inlineCode: ({ variantcolor: variantColor = 'yellow', ...props }: any) => (
        <Code variantcolor={variantColor} fontSize="0.84em" {...props} />
    ),
    kbd: Kbd,
    br: (props: any) => <Box height="24px" {...props} />,
    hr: Hr,
    table: Table,
    th: THead,
    td: TData,
    a: CustomLink,
    p: (props: any) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
    ul: (props: any) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
    ol: (props: any) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
    li: (props: any) => <Box as="li" pb={1} {...props} />,
    blockquote: Quote,
    iframe: ({ src, title, width, height, allowfullscreen, allow, frameborder }: any) => (
        <iframe
            src={src}
            title={title}
            width={width}
            height={height}
            allowFullScreen={allowfullscreen}
            allow={allow}
            frameBorder={frameborder}
        />
    ),
    code: CodeComp,
};

export { CustomLink };
export default MDXComponents;
