import React from 'react';
import 'classlist-polyfill';
import classNames from 'classnames';
import { withForwardedRef } from 'app/hoc';
import type { SvgElementProps } from 'app/types';

const SvgIcon: React.FunctionComponent<SvgElementProps> = ({
    children,
    className,
    color,
    width,
    height,
    viewBox,
    titleAccess,
    forwardRef,
    ...other
}) => (
    <svg
        className={classNames(className)}
        width={width}
        height={height}
        viewBox={viewBox}
        focusable="false"
        color={color || ''}
        aria-hidden={titleAccess ? undefined : 'true'}
        role={titleAccess ? 'img' : 'presentation'}
        ref={forwardRef}
        {...other}
    >
        {children}
        {titleAccess ? <title>{titleAccess}</title> : null}
    </svg>
);

SvgIcon.defaultProps = {
    children: null,
    className: '',
    color: 'inherit',
    titleAccess: '',
};

export default withForwardedRef(SvgIcon);
