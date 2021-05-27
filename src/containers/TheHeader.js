import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

const TheHeader = () => (
    <>
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as='a' header>
                    Weater app with Semantic ui v:0.1
                </Menu.Item>
            </Container>
        </Menu>
    </>
)

export default TheHeader;