import { Nullable, RefType } from '.';

export type ColorType = {
    offset: number;
    color: string;
};

export type GradientType = {
    colors: Array<ColorType>;
    id: string;
    type: 'linearGradient' | 'radialGradient' | 'conicGradient' | 'repeatingLinearGradient' | 'repeatingRadialGradient';
};

export type GradientListType = {
    [key: string]: {
        color: string;
        gradient: GradientType;
    };
};

export type SVGIconProps = {
    titleAccess?: Nullable<string>;
    className?: Nullable<string>;
    color?: Nullable<string>;
    fill?: string;
    stroke?: string;
    viewBox: string;
    width: string;
    height: string;
};

export type SvgElementProps = SVGIconProps & {
    children: any;
    forwardRef?: RefType<SVGSVGElement>;
    [key: string]: unknown;
};
