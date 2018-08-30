import React, { Component } from 'react';

import { Container,
    Row,
    Col } from 'reactstrap';

import './About.css'

export default class About extends Component {
    render() {
        return(
            <div>
                <Container className='about'>
                    <Row>
                        <Col className='about-video' sm='6'>

                        </Col>
                        <Col sm='6'>
                            <h2>ABOUT IPFEST</h2>
                            <p>Deskripsi segini Deksripsi segini Deskripsi segini</p>
                            <p>Deskripsi segini Deksripsi segini Deskripsi segini</p>
                            <p>Deskripsi segini Deksripsi segini Deskripsi segini</p>
                            <p>Deskripsi segini Deksripsi segini Deskripsi segini</p>
                            <p>Deskripsi segini Deksripsi segini Deskripsi segini</p>
                            <p>Deskripsi segini Deksripsi segini Deskripsi segini</p>
                            <p>Deskripsi segini Deksripsi segini Deskripsi segini</p>
                            <p>Deskripsi segini Deksripsi segini Deskripsi segini</p>
                            <p>Deskripsi segini Deksripsi segini Deskripsi segini</p>
                            <p>Deskripsi segini Deksripsi segini Deskripsi segini</p>
                            <p>Deskripsi segini Deksripsi segini Deskripsi segini</p>
                            <p>Deskripsi segini Deksripsi segini Deskripsi segini</p>
                        </Col>
                    </Row>
                </Container>
                <div className='title'>
                    <img 
                        src={require('../../images/Boards of Director.png')}
                    />
                </div>
                <div className='organogram'>
                    <img
                        src={require('../../images/Organogram.png')}
                    />
                </div>
            </div>
        );
    }
}