export default {
    homePage: () => '/',
    loginPage: () => '/login',
    aboutPage: () => '/about',
    blogPage: () => '/blog',
    professionPage: (id: number | string) => `/profession/${id}`,
    coursesPage: (professionId: number | string, courseId: number | string) =>
        `/profession/${professionId}/course/${courseId}`,
    courseArticlePage: (professionId: number | string, courseId: number | string, articleId: number | string) =>
        `/profession/${professionId}/course/${courseId}/article/${articleId}`,
    errorPage: (code: string): string => `/error/${code}`,
};
