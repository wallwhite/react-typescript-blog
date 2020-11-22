import React from 'react';

type TitleProps = {
    children?: React.ReactNode;
    className?: string;
    variant?: string;
    title?: string;
};

const Title: React.FunctionComponent<TitleProps> = (props) => {
    const { children, className, variant, title } = props;

    return variant ? React.createElement(variant, { className, title }, children) : null;
};

Title.defaultProps = {
    children: '',
    className: '',
    variant: 'h1',
    title: '',
};

export default Title;
