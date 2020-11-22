/* eslint-disable react/destructuring-assignment */

import React from 'react';
import ReactModal from 'react-modal';

type ModalProps = {
    isOpen: boolean;
    children: React.ReactNode;
    role?: string;
    className?: string;
    tabIndex?: number;
    shouldCloseOnEsc?: boolean;
    shouldFocusAfterRender?: boolean;
    shouldReturnFocusAfterClose?: boolean;
    contentRef: (element: null | HTMLDivElement) => void;
    onRequestClose: () => void;
};

ReactModal.setAppElement('#root');

const Modal: React.FunctionComponent<ModalProps> = ({ className, ...props }) => (
    <ReactModal overlayClassName={`popup ${className || ''}`} className="popup__content" ariaHideApp={false} {...props}>
        {props.children}
    </ReactModal>
);

Modal.defaultProps = {
    className: '',
    role: 'dialog',
    tabIndex: 0,
    shouldCloseOnEsc: true,
    shouldFocusAfterRender: true,
    shouldReturnFocusAfterClose: true,
};

export default Modal;
