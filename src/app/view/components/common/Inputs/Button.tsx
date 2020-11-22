import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import withForwardedRef from '../../../../hoc/withForwardedRef';
import { RefType } from '../../../../types';

type ButtonProps = {
    children?: any;
    type?: string;
    ariaLabel?: string;
    tabIndex?: number;
    role?: string;
    to?: string;
    className?: string;
    isActive?: boolean;
    activeClassName?: string;
    disabled?: boolean;
    style?: Object;
    forwardRef: RefType<HTMLButtonElement>;
    onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLElement>) => void;
    onMouseDown?: (e: React.SyntheticEvent<HTMLElement>) => void;
    onMouseUp?: (e: React.SyntheticEvent<HTMLElement>) => void;
    onSubmit?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
};

const Button = (props: ButtonProps) => {
    const {
        children,
        type,
        ariaLabel,
        tabIndex,
        role,
        to = '',
        onClick,
        onMouseDown,
        onMouseUp,
        onSubmit,
        onFocus,
        onBlur,
        className,
        isActive,
        style,
        activeClassName = '',
        disabled,
        forwardRef,
        ...restProps
    } = props;
    const buttonClasses = classNames(className, {
        [activeClassName]: isActive && activeClassName,
        disabled,
    });

    if (disabled)
        return (
            <button
                type="button"
                ref={forwardRef}
                disabled
                className={buttonClasses}
                style={style}
                aria-label={ariaLabel}
                onFocus={onFocus}
                onBlur={onBlur}
                {...restProps}
            >
                {children}
            </button>
        );

    switch (type) {
        case 'button':
            return (
                <button
                    className={buttonClasses}
                    type="button"
                    role={role}
                    ref={forwardRef}
                    onClick={onClick}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    aria-label={ariaLabel}
                    title={ariaLabel}
                    tabIndex={tabIndex}
                    style={style}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    {...restProps}
                >
                    {children}
                </button>
            );
        case 'link':
            return (
                <Link
                    to={to}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    className={buttonClasses}
                    aria-label={ariaLabel}
                    title={ariaLabel}
                    style={style}
                    onFocus={onFocus}
                    onBlur={onBlur}
                >
                    {children}
                </Link>
            );
        default:
            return (
                <button
                    className={buttonClasses}
                    type="submit"
                    ref={forwardRef}
                    onClick={onSubmit}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    aria-label={ariaLabel}
                    title={ariaLabel}
                    tabIndex={tabIndex}
                    style={style}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    {...restProps}
                >
                    {children}
                </button>
            );
    }
};

Button.defaultProps = {
    children: null,
    type: 'button',
    ariaLabel: '',
    tabIndex: '0',
    role: '',
    to: '',
    isActive: false,
    className: '',
    activeClassName: '',
    disabled: false,
    style: {},
    onClick: () => {},
    onSubmit: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onMouseDown: () => {},
    onMouseUp: () => {},
};

export default withForwardedRef(Button);
