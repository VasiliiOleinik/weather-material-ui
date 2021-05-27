import React from 'react';
import { Segment, Container, Button, Header } from 'semantic-ui-react';
import { TheFooter, TheHeader } from 'src/containers';

import history from 'src/utils/history';

const Page404 = () => (
    <div className="app">
        <TheHeader />
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text style={{ textAlign: 'center' }}>
                <Header as='h1' style={{ fontSize: '4em', textAlign: 'center', fontWeight: '700' }}>
                    404
                </Header>
                <p style={{ fontSize: '1.5em', textAlign: 'center' }}>
                    Дружище, извини, но мы не смогли найти эту страницу…
                </p>
                <Button size='large' color='blue' onClick={() => history.goBack()}>
                    Вернуться назад
                </Button>
            </Container>
        </Segment>
        <TheFooter />
    </div>
)

export default Page404;