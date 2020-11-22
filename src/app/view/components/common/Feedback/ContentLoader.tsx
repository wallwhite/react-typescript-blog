import React from 'react';

type ContentLoaderProps = {
    style?: Object;
    className?: string;
};

const ContentLoader: React.FunctionComponent<ContentLoaderProps> = ({ style, className }: ContentLoaderProps) => (
    <div className={`content-loader ${className || ''}`} style={style}>
        <div className="content-loader__spiner" />
    </div>
);

ContentLoader.defaultProps = {
    style: {},
    className: '',
};

export default ContentLoader;
