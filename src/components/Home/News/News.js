import React, { Component } from 'react';

import { Container, Row, Col, UncontrolledCarousel } from 'reactstrap';

import './News.css';

const items = [
    {
        src: require('../../../images/News/lates_news1.jpg')
    }, 
    {
        src: require('../../../images/News/latest_news2.jpg')
    },
    {
        src: require('../../../images/News/latest_news3.jpg')
    },
  ];

export default class News extends Component {
    render() {
        return(
            <div className="news-container">
                <Container>
                    <h2>Latest News</h2>
                    <Row>
                        <Col sm={6} className='news-title'>
                            <h1>Calling The Success of IPFEST 2018</h1>
                        </Col>
                    </Row>
                    <Row className="news-content-container">
                        <Col sm="6">
                            <p>
                                Still in the collaboration of SPE ITB SC, IATMI SM ITB, and HMTM “PATRA” ITB, we are proudly present to you, Integrated Petroleum Festival (IPFEST) 2019. An annual international petroleum competition-based event, held in Institut Teknologi Bandung. Aiming for a bigger and better event, we are running 9 events and 7 international competitions. Bringing this year’s theme, “Broadening Insight on Dealing with Future Energy Demand”, with hope on triggering young energy enthusiasts’ creative ideas on bringing the energy industry into a better level.
                            </p>
                        </Col>
                        <Col sm="6">
                            <UncontrolledCarousel items={items}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
} 