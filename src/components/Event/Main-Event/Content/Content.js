import React, { Component } from 'react';

import { Container,
    Row,
    Col,
    UncontrolledCarousel } from 'reactstrap';

const items1 = [
    {
        src: require('../../../../images/Main Events/IPConvex/IMG_4821.JPG'),
    },
    {
        src: require('../../../../images/Main Events/IPConvex/IMG_4823.JPG'),
    },
    {
        src: require('../../../../images/Main Events/IPConvex/IMG_8979.JPG'),
    },
  ];

const items2 = [
    {
        src: require('../../../../images/Main Events/Exploring/IMG_9407.JPG'),
    },
    {
        src: require('../../../../images/Main Events/Exploring/IMG_9450.JPG'),
    },
    {
        src: require('../../../../images/Main Events/Exploring/IMG_9480.JPG'),
    },
  ];

const items3 = [
    {
        src: require('../../../../images/Main Events/Gala/IMG_9528.JPG'),
    },
    {
        src: require('../../../../images/Main Events/Gala/IMG_9541.JPG'),
    },
    {
        src: require('../../../../images/Main Events/Gala/IMG_9590.JPG'),
    },
  ];

export default class Content extends Component {
    render() {
        return(
            <div className='event-content'>
                <Container>
                    <h1>
                        MAIN-EVENTS
                    </h1>
                    <Row className='content'>
                        <Col sm='6'>
                            <Row>
                                <img 
                                    className='top-content-border'
                                    src={require('../../../../images/top-content.png')}
                                />
                                <Col sm='4'>
                                    <div className='content-title'>
                                        <h2>Integrated Petroleum Convention and Exhibition (IPConvex)</h2>
                                    </div>
                                </Col>
                                <Col sm='8'>
                                    <div className='content-text'>
                                        <p>
                                            The speakers of the convention event will come from government, energy observer, and national oil company which are willing to share their insights about the topic through innovative collaboration. The big theme of the event is knowledge about handling the future energy demand. The exhibition is about presenting the oil rig design from the competititon that will conducted by the delegates. Also the exhibition will be attended by oil and gas companies in Indonesia. They will give a brief explanation about their company profiles and recruitment processes from their booths at the exhibition.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm='4'>
                                    <div className='content-title'>
                                        <p><strong>October 22nd, 2018</strong></p>
                                    </div>
                                </Col>
                                <img 
                                    className='bottom-content-border'
                                    src={require('../../../../images/bottom-content.png')}
                                />  
                            </Row>
                        </Col>
                        <Col sm="6" className='content-image'>
                            <UncontrolledCarousel items={items1}/>
                        </Col>
                    </Row>
                    <Row className='content'>
                        <Col sm='6'>
                            <Row>
                                <img 
                                    className='content-border'
                                    src={require('../../../../images/top-content.png')}
                                />
                                <Col sm='4'>
                                    <div className='content-title'>
                                        <h2>Exploring PVJ and Networking Day</h2>
                                    </div>
                                </Col>
                                <Col sm='8'>
                                    <div className='content-text'>
                                        <p>
                                            An event held at one of the wonderful tourist attractions in bandung aims to increase the enthusiasm of all delegates while in bandung and provide an amazing experience with a series of exciting and unforgettable events. Furthermore, delegates will have time to interact with each other, tell their experiences, and improve networking.   
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm='4'>
                                    <div className='content-title'>
                                        <p><strong>November 1st, 2018</strong></p>
                                    </div>
                                </Col>
                                <img 
                                    className='content-border'
                                    src={require('../../../../images/bottom-content.png')}
                                />  
                            </Row>
                        </Col>
                        <Col sm="6" className='content-image'>
                            <UncontrolledCarousel items={items2}/>
                        </Col>
                    </Row>
                    <Row className='content'>
                        <Col sm='6'>
                            <Row>
                                <img 
                                    className='content-border'
                                    src={require('../../../../images/top-content.png')}
                                />
                                <Col sm='4'>
                                    <div className='content-title'>
                                        <h2>Gala Dinner</h2>
                                    </div>
                                </Col>
                                <Col sm='8'>
                                    <div className='content-text'>
                                        <p>
                                        Gala Dinner is the final agenda as well as the closing ceremony of IPFEST 2019. The gala dinner will invite the delegates, the judges, IPFest2018 committee, boards from SPE ITB SC, and also the boards from HMTM “PATRA” ITB and IATMI SM ITB. The event will consist of the announcement of the winners from each competition, and the performance from ITB student’s unit which will promote the culture of Bandung. The aim of this agenda is to make a great impression to the participant and to mark the end of IPFEST 2019.     
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm='4'>
                                    <div className='content-title'>
                                        <p><strong>November 1st, 2018</strong></p>
                                    </div>
                                </Col>
                                <img 
                                    className='content-border'
                                    src={require('../../../../images/bottom-content.png')}
                                />  
                            </Row>
                        </Col>
                        <Col sm="6" className='content-image'>
                            <UncontrolledCarousel items={items3}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}