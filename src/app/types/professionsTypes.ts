import { GQLUploadFileType, Nullable } from 'app/types';

export type ProfessionQueryResponseType = {
    id: number;
    created_at: string;
    updated_at: string;
    title: string;
    description: string;
    published_at: string;
    image: GQLUploadFileType[];
};

export type ProfessionType = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
};

export type UseProfessionsType = {
    professions: ProfessionType[];
    loading: boolean;
};

export type CategoryPreviewType = {
    Title: string;
    id: number;
    orderNumber: number;
};

export type ProfessionItemType = ProfessionType & {
    categories: CategoryPreviewType[];
};

export type UseProfessionItemType = {
    profession: ProfessionItemType;
    loading: boolean;
};

export type ArticlePreviewType = {
    id: number;
    title: string;
};

export type CategoryItemType = {
    id: number;
    Title: string;
    articles: ArticlePreviewType[];
};

export type UseCategoryType = {
    category: CategoryItemType;
    loading: boolean;
};

export type ArticleQueryResponseType = {
    id: number;
    title: string;
    content: string;
    image: Nullable<GQLUploadFileType[]>;
};

export type ArticleType = {
    id: number;
    title: string;
    content: string;
    imageUrl: string;
};

export type UseArticleType = {
    article: ArticleType;
    loading: boolean;
};
