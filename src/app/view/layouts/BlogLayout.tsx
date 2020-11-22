import React from 'react';
import { Link } from 'react-router-dom';
import { useColorMode, Button, Flex, Box, IconButton, Stack } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';
import { Footer } from 'app/view/components';

const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: background-color 0.1 ease-in-out;
`;

type BlogLayoutProps = {
    children: React.ReactNode;
};

const BlogLayout: React.FunctionComponent<BlogLayoutProps> = ({ children }) => {
    const { colorMode, toggleColorMode } = useColorMode();

    const bgColor = {
        light: 'white',
        dark: 'gray.900',
    };
    const primarytextColor = {
        light: 'black',
        dark: 'white',
    };
    const navBgColor = {
        light: 'rgba(255, 255, 255, 0.8)',
        dark: 'rgba(23, 25, 35, 0.8)',
    };

    return (
        <>
            <StickyNav
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="900px"
                width="100%"
                bg={navBgColor[colorMode]}
                as="nav"
                p={8}
                mt={[0, 8]}
                mb={8}
                mx="auto"
            >
                <Box>
                    <Link to="/">
                        <Button as="button" variant="ghost" p={[1, 4]}>
                            Главная
                        </Button>
                    </Link>
                    <Link to="/blog">
                        <Button as="button" variant="ghost" p={[1, 4]}>
                            Блог
                        </Button>
                    </Link>
                    <Link to="/about">
                        <Button as="button" variant="ghost" p={[1, 4]}>
                            Обо мне
                        </Button>
                    </Link>
                </Box>
                <IconButton
                    aria-label="Toggle dark mode"
                    icon={colorMode === 'dark' ? <SunIcon color="white" /> : <MoonIcon />}
                    onClick={toggleColorMode}
                />
            </StickyNav>
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={bgColor[colorMode]}
                color={primarytextColor[colorMode]}
                px={8}
            >
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="830px"
                    width="100%"
                >
                    {children}
                </Stack>
                <Footer />
            </Flex>
        </>
    );
};

export default BlogLayout;
