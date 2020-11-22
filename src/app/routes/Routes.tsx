import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Pages from 'app/view/pages';
import routePaths from './routePaths';

const Routes: React.FunctionComponent = () => (
    <Switch>
        <Route exact path={routePaths.homePage()} component={Pages.HomePage} />
        <Route exact path={routePaths.aboutPage()} component={Pages.AboutPage} />
        <Route exact path={routePaths.blogPage()} component={Pages.BlogPage} />
        <Route
            exact
            path={routePaths.courseArticlePage(':professionId', ':courseId', ':articleId')}
            component={Pages.CourseArticlePage}
        />
        <Route exact path={routePaths.coursesPage(':professionId', ':courseId')} component={Pages.CoursePage} />
        <Route exact path={routePaths.professionPage(':id')} component={Pages.ProfessionPage} />
        <Route exact path={routePaths.loginPage()} component={Pages.LoginPage} />
        <Route path={routePaths.errorPage(':code')} component={Pages.ErrorPage} />
        <Redirect to="/error/404" />
    </Switch>
);

export default Routes;
