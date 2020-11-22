import { useQuery } from '@apollo/client';
import { API_DOMAIN } from 'app/constants';
import {
    PROFESSIONS_QUERY,
    GET_PROFESSION_QUERY,
    GET_PROFESSION_CATEGORY_QUERY,
    GET_PROFESSION_ARTICLE,
} from 'app/graphql/queries';
import {
    ProfessionQueryResponseType,
    ProfessionType,
    UseProfessionsType,
    UseProfessionItemType,
    ProfessionItemType,
    CategoryItemType,
    UseCategoryType,
    ArticleQueryResponseType,
    UseArticleType,
} from 'app/types';

export const useProfessionsList = (): UseProfessionsType => {
    const { data, loading } = useQuery(PROFESSIONS_QUERY);

    const normalizedProfessions: ProfessionType[] =
        data?.professions.map(
            ({ id, image, title, description }: ProfessionQueryResponseType): ProfessionType => {
                const [currentImage] = image || [];

                const imageUrl = `${API_DOMAIN}${currentImage?.url}` ?? '';
                return { id, title, description, imageUrl };
            },
        ) ?? [];

    return {
        professions: normalizedProfessions,
        loading,
    };
};

export const useProfessionItem = (id: number): UseProfessionItemType => {
    const { data, loading } = useQuery(GET_PROFESSION_QUERY, { variables: { id } });

    const profession: ProfessionItemType = data?.profession ?? {};

    return {
        profession,
        loading,
    };
};

export const useProfessionCategory = (id: number): UseCategoryType => {
    const { data, loading } = useQuery(GET_PROFESSION_CATEGORY_QUERY, { variables: { id } });

    const category: CategoryItemType = data?.category ?? {};

    return {
        category,
        loading,
    };
};

export const useProfessionArticle = (id: number): UseArticleType => {
    const { data, loading } = useQuery(GET_PROFESSION_ARTICLE, { variables: { id } });

    const article: ArticleQueryResponseType = data?.article ?? {};
    const [currentImage] = article?.image ?? [];
    const imageUrl = `${API_DOMAIN}${currentImage?.url}` ?? '';

    return {
        article: {
            id: article?.id,
            title: article?.title,
            content: article?.content,
            imageUrl,
        },
        loading,
    };
};
