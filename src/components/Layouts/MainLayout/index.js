import React from 'react';
import {
    Grid
} from 'react-bootstrap';
import Header from '../../Header';
import Footer from '../../Footer';
import './styles.css';

const MainLayout = (props) => {
    return (
        <Grid>
            <Header />
            { props.children }
            <Footer />
        </Grid>
    )
};

export default MainLayout;