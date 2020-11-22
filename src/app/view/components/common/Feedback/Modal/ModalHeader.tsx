import React from 'react';
import { Button } from 'app/view/components';

type ModalHeaderProps = {
    isShowIcon?: boolean;
    title: string;
    style?: React.CSSProperties;
    onClose: () => void;
    label?: React.ReactNode;
    children?: React.ReactNode;
};

const ModalHeader: React.FunctionComponent<ModalHeaderProps> = ({
    title,
    onClose,
    label,
    style,
    children,
    isShowIcon,
}) => (
    <header className="popup__header" style={style}>
        {isShowIcon && <i className="popup__header-icon" />}
        <Button className="close-button close-button--dark" onClick={onClose} ariaLabel="Close" />
        <div className="popup__header-content">
            <h2 className="popup__header-title">{title}</h2>
            {label}
        </div>
        {children && children}
    </header>
);

ModalHeader.defaultProps = {
    label: null,
    style: {},
    children: null,
    isShowIcon: false,
};

export default ModalHeader;
