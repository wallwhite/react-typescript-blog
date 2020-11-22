import React from 'react';
import { useParams } from 'react-router-dom';
import { Heading, Text, Flex, Stack, Skeleton, useColorMode } from '@chakra-ui/react';
import { useProfessionCategory } from 'app/graphql/hooks';
import { CourseArticleCard } from 'app/view/components';
import { ArticlePreviewType } from 'app/types';

const CourseContainer: React.FunctionComponent = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const { category, loading } = useProfessionCategory(Number(courseId));
    const { colorMode } = useColorMode();
    const secondaryTextColor = {
        light: 'gray.700',
        dark: 'gray.400',
    };

    const renderArticleCards = (): React.ReactNode =>
        category?.articles.map((article: ArticlePreviewType, index: number) => (
            <CourseArticleCard key={article.id} orderNumber={index + 1} {...article} />
        ));

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
                    {loading ? <Skeleton height="50px" width="250px" /> : category?.Title}
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
                {loading ? 'loading' : renderArticleCards()}
            </Flex>
        </Stack>
    );
};

export default CourseContainer;
