import { gql } from '@apollo/client';

export const PROFESSIONS_QUERY = gql`
    query {
        professions {
            id
            title
            description
            image {
                width
                height
                url
            }
        }
    }
`;

export const GET_PROFESSION_QUERY = gql`
    query getProfession($id: ID!) {
        profession(id: $id) {
            id
            title
            description
            categories {
                Title
                id
                orderNumber
            }
        }
    }
`;

export const GET_PROFESSION_CATEGORY_QUERY = gql`
    query getCategory($id: ID!) {
        category(id: $id) {
            id
            Title
            articles {
                title
                id
            }
        }
    }
`;

export const GET_PROFESSION_ARTICLE = gql`
    query getArticle($id: ID!) {
        article(id: $id) {
            id
            title
            content
            image {
                url
            }
        }
    }
`;
