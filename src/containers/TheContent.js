import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Container, Segment } from 'semantic-ui-react';
import Loader from 'src/components/Loading';
import routes from 'src/routes';

const TheContent = () => {
    return (
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
                <Suspense fallback={Loader}>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => (
                                        <route.component {...props} />
                                    )} />
                            )
                        })}
                        <Redirect from="/" to="/404" />
                    </Switch>
                </Suspense>
            </Container>
        </Segment>
    )
}

export default TheContent;