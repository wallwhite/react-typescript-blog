import React from 'react';
// @ts-ignore
import MDX from '@mdx-js/runtime';
import { MDXComponents } from 'app/view/components';

type MDXContentProps = {
    children: React.ReactNode;
};

const MDXContent: React.FunctionComponent<MDXContentProps> = ({ children }) => (
    <MDX components={MDXComponents}>{children}</MDX>
);

export default MDXContent;
