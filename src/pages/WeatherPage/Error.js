import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import history from 'src/utils/history';

const Error = () => (
    <>
        <Header as='h3' style={{ fontSize: '1.7em' }}>
            Упс.. кажется вы не выбрали город ... :(
        </Header>
        <p style={{ fontSize: '1.33em' }}>
            Вернитесь назад и выберите нужный город.
        </p>
        <Button size='large' color='blue' onClick={() => history.goBack()}>
            Вернуться назад
        </Button>
    </>
)

export default Error;