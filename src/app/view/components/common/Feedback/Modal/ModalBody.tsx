import React from 'react';
import classNames from 'classnames';

type ModalBodyProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};

const ModalBody: React.FunctionComponent<ModalBodyProps> = ({ children, className, style }) => (
    <div className={classNames('popup__body', className)} style={style}>
        {children}
    </div>
);

ModalBody.defaultProps = {
    className: '',
    style: {},
};

export default ModalBody;
