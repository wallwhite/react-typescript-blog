import React from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Link, Heading, Text, useColorMode } from '@chakra-ui/react';
import { ArticlePreviewType } from 'app/types';
import { routePaths } from 'app/routes';

type CourseArticleCardProps = { orderNumber: number } & ArticlePreviewType;

const CourseArticleCard: React.FunctionComponent<CourseArticleCardProps> = ({ id, title, orderNumber }) => {
    const { colorMode } = useColorMode();
    const { courseId, professionId } = useParams<{ courseId: string; professionId: string }>();
    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600',
    };

    return (
        <Link
            mb={4}
            href={routePaths.courseArticlePage(professionId, courseId, id)}
            width="100%"
            _hover={{
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                textDecoration: 'none',
            }}
        >
            <Flex
                align="center"
                justifyContent="flex-start"
                border="1px solid"
                borderColor={borderColor[colorMode]}
                borderRadius={4}
                p={4}
                width="100%"
            >
                <Text fontSize="3xl" color={borderColor[colorMode]} mr={3}>
                    {`[${orderNumber}]`}
                </Text>
                <Heading as="h4" size="md" fontWeight="bold" letterSpacing="tighter">
                    {title}
                </Heading>
            </Flex>
        </Link>
    );
};

export default CourseArticleCard;
