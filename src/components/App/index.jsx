import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Container from '../layout/Container';
import NavBar from '../templates/partials/NavBar';
import Routes from '../../routes';

import { NAV_ITENS } from '../../constants/content';

export default props => (
    <Router>
        <NavBar itens={ NAV_ITENS }/>
        <Container>
            <Routes/>
        </Container>
    </Router>
)