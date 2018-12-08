import React, { Component } from 'react';

import { Container, Row, Col, UncontrolledCarousel } from 'reactstrap';

import './News.css';

const items = [
    {
        src: require('../../../images/News/latest_news1.jpg')
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
                            <h1>Sharing is Caring: Bringing Happiness to Children</h1>
                        </Col>
                    </Row>
                    <Row className="news-content-container">
                        <Col sm="6">
                            <p>
                                Sharing is Caring is one of several pre-events held on IPFEST 2019 in November 11th, 2018. The event was held as a way to bring happiness to children and teach them lots of stuff, as well. It was held at Panti Asuhan Bayi Sehat, a well-known orphanage in Bandung who takes care of children of high diversity. Committees play together with children on drawing competitions and games, such as puzzles. (NP)
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