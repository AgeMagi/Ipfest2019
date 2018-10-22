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
                        <Col sm='6' className='about-content'>
                            <h2>ABOUT IPFEST</h2>
                            <p>
                                Integrated Petroleum Festival 2019 (IPFEST 2019) is an annual International Petroleum competition-based event held by Society of Petroleum Engineers ITB Student Chapter (SPE ITB SC) , Ikatan Ahli Teknik Perminyakan Indonesia Seksi Mahasiswa ITB (IATMI SM ITB), and Himpunan Mahasiswa Teknik Perminyakan PATRA ITB (HMTM “PATRA” ITB). With the theme “Broadening Insight on Dealing with Future Energy Demand", IPFEST 2019 is expected to be a collaboration venue amongst young energy enthusiasts and stakeholders to propose solutions with respect of future energy demand challenge.
                            </p>
                            <br />
                            <p>
                                IPFEST 2019 will be held in series of events and competitions. This event provides a lot of opportunities for energy enthusiasts to increase their insight, to develop their innovations, to widen their connections with people who have the same strong interest to solve energy challenge and sharing with experienced professionals in the matter of current energy issues.
                            </p>
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