import * as React from 'react';
import { BlogLayout } from 'app/view/layouts';
import { ProfessionsContainer } from 'app/view/containers';

export const HomePage: React.FunctionComponent = () => (
    <BlogLayout>
        <ProfessionsContainer />
        <div>Blog posts will be here</div>
    </BlogLayout>
);

export default HomePage;
