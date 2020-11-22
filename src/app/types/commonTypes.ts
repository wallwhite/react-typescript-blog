export type ActionTemplateType = {
    type: string;
    payload?: {
        [key: string]: any;
    };
    error?: Error;
};

export type Nullable<T> = T | null | undefined;

export type RefType<T> = ((instance: T | null) => void) | React.MutableRefObject<T | null> | null;

export type AnimationTimeOptionsType = {
    isInSeconds: boolean;
};

export type ObjectLiteralType = {
    [key: string]: any;
};
