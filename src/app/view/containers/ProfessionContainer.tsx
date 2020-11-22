import React from 'react';
import { useParams } from 'react-router-dom';
import { Heading, Text, Flex, Stack, Skeleton, useColorMode } from '@chakra-ui/react';
import { useProfessionItem } from 'app/graphql/hooks';
import { CourseCard } from 'app/view/components';
import { CategoryPreviewType } from 'app/types';

const ProfessionContainer: React.FunctionComponent = () => {
    const { id } = useParams<{ id: string }>();
    const { profession, loading } = useProfessionItem(Number(id));
    const { colorMode } = useColorMode();
    const secondaryTextColor = {
        light: 'gray.700',
        dark: 'gray.400',
    };

    const renderCourseCards = (): React.ReactNode =>
        profession?.categories.map((category: CategoryPreviewType) => <CourseCard key={category.id} {...category} />);

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
                    {loading ? <Skeleton height="50px" width="250px" /> : profession?.title}
                </Heading>
                {loading ? (
                    <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" width="100%">
                        <Skeleton height="20px" width="100%" mb={2} />
                        <Skeleton height="20px" width="70%" mb={2} />
                        <Skeleton height="20px" width="50%" mb={2} />
                    </Flex>
                ) : (
                    <Text color={secondaryTextColor[colorMode]}>{profession?.description}</Text>
                )}
            </Flex>
            <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" width="100%">
                {loading ? 'loading' : renderCourseCards()}
            </Flex>
        </Stack>
    );
};

export default ProfessionContainer;
