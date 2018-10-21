import React, { Component } from 'react';

import { Container,
    Row,
    Col,
    UncontrolledCarousel } from 'reactstrap';

import './Content.css';

const items1 = [
    {
        src: require('../../../../images/Pre-Events/High School Visit/IMG_4248.jpg'),
    },
    {
        src: require('../../../../images/Pre-Events/High School Visit/IMG_4273.jpg'),
    },
    {
        src: require('../../../../images/Pre-Events/High School Visit/IMG_4287.jpg'),
    },
  ];

const items2 = [
    {
        src: require('../../../../images/Pre-Events/Blood Donation/IMG_9333.jpg'),
    },
    {
        src: require('../../../../images/Pre-Events/Blood Donation/IMG_9336.jpg'),
    },
    {
        src: require('../../../../images/Pre-Events/Blood Donation/IMG_9346.jpg'),
    },
  ];

const items3 = [
    {
        src: require('../../../../images/Pre-Events/Energy Insight/IMG_4265.JPG'),
    },
    {
        src: require('../../../../images/Pre-Events/Energy Insight/IMG_4269.JPG'),
    },
    {
        src: require('../../../../images/Pre-Events/Energy Insight/IMG_4279.JPG'),
    },
  ];

const items4 = [
    {
        src: require('../../../../images/Pre-Events/Medical Checkup/IMG_1822.JPG'),
    },
    {
        src: require('../../../../images/Pre-Events/Medical Checkup/IMG_1924.JPG'),
    },
    {
        src: require('../../../../images/Pre-Events/Medical Checkup/IMG_1953.JPG'),
    },
  ];

const items5 = [
    {
        src: require('../../../../images/Pre-Events/IPGL/IMG_9003.JPG'),
    },
    {
        src: require('../../../../images/Pre-Events/IPGL/IMG_9015.JPG'),
    },
  ];

const items6 = [
    {
        src: require('../../../../images/Pre-Events/Goes to Orphanage/IMG_6500.JPG'),
    },
    {
        src: require('../../../../images/Pre-Events/Goes to Orphanage/IMG_6502.JPG'),
    },
    {
        src: require('../../../../images/Pre-Events/Goes to Orphanage/IMG_6562.JPG'),
    },
  ];

export default class Content extends Component {
    render() {
        return(
            <div className='event-content'>
                <Container>
                    <div className='title'>
                        <img 
                            src={require('../../../../images/Pre-Events/3_1_Pre-Events.png')}
                        />
                    </div>
                    <Row className='content'>
                        <Col sm='6'>
                            <Row>
                                <img 
                                    className='content-border'
                                    src={require('../../../../images/top-content.png')}
                                />
                                <Col sm='4'>
                                    <div className='content-title'>
                                        <h2>High School Visit</h2>
                                    </div>
                                </Col>
                                <Col sm='8'>
                                    <div className='content-text'>
                                        <p>
                                            IPFEST 2019 will come to several high schools in Bandung for giving interesting information about actual news in petroleum industry and also information how to survive in Bandung Institute of Technology. We will also give posters to the high school about awareness about energy and make them more interested in this field. IPFEST 2019 will also make an exhibition located in ITB where public can come and learn more about energy! This exhibition will be held at the same time as blood donor event.
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
                                    className='content-border'
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
                                        <h2>Blood Donation</h2>
                                    </div>
                                </Col>
                                <Col sm='8'>
                                    <div className='content-text'>
                                        <p>
                                            Blood donation is one of event from petroshare that will be held at the campus of ITB Ganesha with the target of participants from the students and will collaborate with Palang merah Indonesia. This event is a media for people to evolve and apply their kindness in order to support one of the missions of the Palang Merah Indonesia is to encourage, motivate and mobilize the Young Generation and society in general in the volunteer action.    
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
                                        <h2>Energy Insight</h2>
                                    </div>
                                </Col>
                                <Col sm='8'>
                                    <div className='content-text'>
                                        <p>
                                            IPFEST 2019 will come to several high schools in Bandung for giving interesting information about actual news in petroleum industry and also information how to survive in Bandung Institute of Technology. We will also give posters to the high school about awareness about energy and make them more interested in this field. IPFEST 2019 will also make an exhibition located in ITB where public can come and learn more about energy! This exhibition will be held at the same time as blood donor event.
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
                    <Row className='content'>
                        <Col sm='6'>
                            <Row>
                                <img 
                                    className='content-border'
                                    src={require('../../../../images/top-content.png')}
                                />
                                <Col sm='4'>
                                    <div className='content-title'>
                                        <h2>Medical Checkup</h2>
                                    </div>
                                </Col>
                                <Col sm='8'>
                                    <div className='content-text'>
                                        <p>
                                            IPFEST 2019 will come to several high schools in Bandung for giving interesting information about actual news in petroleum industry and also information how to survive in Bandung Institute of Technology. We will also give posters to the high school about awareness about energy and make them more interested in this field. IPFEST 2019 will also make an exhibition located in ITB where public can come and learn more about energy! This exhibition will be held at the same time as blood donor event.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm='4'>
                                    <div className='content-title'>
                                        <p><strong>November 11th, 2018</strong></p>
                                    </div>
                                </Col>
                                <img 
                                    className='content-border'
                                    src={require('../../../../images/bottom-content.png')}
                                />  
                            </Row>
                        </Col>
                        <Col sm="6" className='content-image'>
                            <UncontrolledCarousel items={items4}/>
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
                                        <h2>Integrated Petroleum Guest Lecture (IPGL)</h2>
                                    </div>
                                </Col>
                                <Col sm='8'>
                                    <div className='content-text'>
                                        <p>
                                            A series of guest lectures before the main event of Integrated Petroleum Convention and Exhibition (IPConvex). The purpose of this event is enlighten the participants’s insight about technical and non-technical petroleum industry. There will be Alumni Sharing Sessions and Technical Guest Lectures. The technical matter will be delivered by proffesional Engineers that have worked and experienced in the petroleum industry from various companies. The alumni sharing session will be conducted by the alumni of “Himpunan Mahasiswa Teknik Perminyakan PATRA”
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm='4'>
                                    <div className='content-title'>
                                        <p><strong>January 18th, 2018</strong></p>
                                    </div>
                                </Col>
                                <img 
                                    className='content-border'
                                    src={require('../../../../images/bottom-content.png')}
                                />  
                            </Row>
                        </Col>
                        <Col sm="6" className='content-image'>
                            <UncontrolledCarousel items={items5}/>
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
                                        <h2>Goes to Orphanage</h2>
                                    </div>
                                </Col>
                                <Col sm='8'>
                                    <div className='content-text'>
                                        <p>
                                            One of the events of IPFEST for social activities, in the implementation the IPFEST committee will visits to the orphanage by providing compensation (sembako / etc) and also to carry out some events to entertain the orphans there. This event will also participate in giving motivation to the next generation of the nation to be more courageous in pursuing their dreams and make the orphanage happy to play with the IPFEST committees.    
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm='4'>
                                    <div className='content-title'>
                                        <p><strong>January 20th, 2018</strong></p>
                                    </div>
                                </Col>
                                <img 
                                    className='content-border'
                                    src={require('../../../../images/bottom-content.png')}
                                />  
                            </Row>
                        </Col>
                        <Col sm="6" className='content-image'>
                            <UncontrolledCarousel items={items6}/>
                        </Col>
                    </Row>
                </Container>    
            </div>
        );
    }
}