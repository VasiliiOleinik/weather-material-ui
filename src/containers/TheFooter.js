import React from 'react';
import {
    Container,
    List,
    Segment,
} from 'semantic-ui-react'

const TheFooter = () => (
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
        <Container textAlign='center'>
            <List horizontal inverted divided link size='small'>
                <List.Item as='a' href='https://teleg.run/vasiliy_oleinik'>
                    Разработка: Василий Олейник
                </List.Item>
                <List.Item as='a' href='https://github.com/VasiliiOleinik/weather-semantic-ui'>
                    GitHub
                </List.Item>
                <List.Item as='a' href='https://www.linkedin.com/in/oleinik-vasiliiy/'>
                    LinkedIn
                </List.Item>
            </List>
        </Container>
    </Segment>
)

export default TheFooter;