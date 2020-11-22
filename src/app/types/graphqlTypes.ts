export type GQLUploadFileType = {
    id: number;
    created_at: string;
    updated_at: string;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: JSON;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
};
