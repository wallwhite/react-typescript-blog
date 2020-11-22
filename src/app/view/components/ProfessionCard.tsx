import React from 'react';
import { Flex, Link, Heading, Text, Stack, Image, useColorMode } from '@chakra-ui/react';
import { ProfessionType } from 'app/types';
import { routePaths } from 'app/routes';

const ProfessionCard: React.FunctionComponent<ProfessionType> = ({ id, title, description, imageUrl }) => {
    const { colorMode } = useColorMode();
    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600',
    };
    const iconStyle =
        colorMode === 'dark'
            ? {
                  filter: 'invert(1)',
              }
            : {};

    return (
        <Link
            mb={4}
            href={routePaths.professionPage(id)}
            _hover={{
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                textDecoration: 'none',
            }}
        >
            <Flex align="center" border="1px solid" borderColor={borderColor[colorMode]} borderRadius={4} p={4}>
                <Image
                    boxSize="100px"
                    style={iconStyle}
                    src={imageUrl}
                    alt={title}
                    size="32px"
                    ml={2}
                    mr={4}
                    fallbackSrc="https://via.placeholder.com/150"
                />
                <Stack>
                    <Heading as="h4" size="md" fontWeight="bold" mb={4} letterSpacing="tighter">
                        {title}
                    </Heading>
                    <Text lineHeight="1.3">{description}</Text>
                </Stack>
            </Flex>
        </Link>
    );
};

export default ProfessionCard;
