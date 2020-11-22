import React from 'react';
import { useParams } from 'react-router-dom';
import { Heading, Text, Flex, Stack, Skeleton, useColorMode } from '@chakra-ui/react';
import { useProfessionArticle } from 'app/graphql/hooks';
import { MDXContent } from 'app/view/components';

const CourseArticleContainer: React.FunctionComponent = () => {
    const { articleId } = useParams<{ articleId: string }>();
    const { article, loading } = useProfessionArticle(Number(articleId));
    const { colorMode } = useColorMode();
    const secondaryTextColor = {
        light: 'gray.700',
        dark: 'gray.400',
    };

    return (
        <Stack
            as="main"
            spacing={8}
            justifyContent="flex-start"
            alignItems="flex-start"
            m="0 auto 4rem auto"
            width="100%"
        >
            <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" width="100%">
                <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                    {loading ? <Skeleton height="50px" width="250px" /> : article?.title}
                </Heading>
                {loading ? (
                    <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" width="100%">
                        <Skeleton height="20px" width="100%" mb={2} />
                        <Skeleton height="20px" width="70%" mb={2} />
                        <Skeleton height="20px" width="50%" mb={2} />
                    </Flex>
                ) : (
                    <Text color={secondaryTextColor[colorMode]}>TODO: add description to schema</Text>
                )}
            </Flex>
            <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" width="100%">
                <MDXContent>{article?.content}</MDXContent>
            </Flex>
        </Stack>
    );
};

export default CourseArticleContainer;
