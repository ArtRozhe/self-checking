import React from 'react';
import {
    Navbar,
    NavDropdown,
    MenuItem,
    Nav,
    NavItem,
    Col,
    Row
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <Row className={'full-width'}>
            <Navbar>
                <Col xs={8} sm={3}>
                    <Navbar.Header>
                        <LinkContainer to={'/'}>
                            <Navbar.Brand>
                                Самопроверки by Elecard-Med
                            </Navbar.Brand>
                        </LinkContainer>
                    </Navbar.Header>
                </Col>
                <Col xs={4} sm={9}>
                    <Nav className={'site-nav'}>
                        <NavDropdown title="Выберите область" id="district">
                            <MenuItem>Томская область</MenuItem>
                            <MenuItem>Другая область</MenuItem>
                        </NavDropdown>
                        <LinkContainer exact to={'/'}>
                            <NavItem>
                                Главная
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer exact to={'/contacts'}>
                            <NavItem>
                                Контакты
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Col>
            </Navbar>
        </Row>
    )
};

export default Header;