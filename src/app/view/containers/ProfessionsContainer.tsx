import React from 'react';
import { Heading, Flex } from '@chakra-ui/react';
import _ from 'underscore';
import { useProfessionsList } from 'app/graphql/hooks';
import { ProfessionCard } from 'app/view/components';

const CoursesContainer: React.FunctionComponent = () => {
    const { professions, loading } = useProfessionsList();
    const isRenderProfessions = !_.isEmpty(professions) && !loading;

    const renderProfessions = () =>
        professions.map((profession) => <ProfessionCard key={profession.id} {...profession} />);

    return (
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
            <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
                Курсы
            </Heading>
            {isRenderProfessions && renderProfessions()}
        </Flex>
    );
};

export default CoursesContainer;
