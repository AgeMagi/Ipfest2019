import React, { Component } from 'react';

import {
    Row,
    Col,
    Container,
    } from 'reactstrap';

import './MudInnovation.css';

const registration = [
    {
        'title': 'THEME',
        'content': <p>Innovation of Drilling Fluids to Optimize Drilling Processes for Fulfilling Future Energy Demand.</p>
    },
    {
        'title': 'VENUE & DATE',
        'content':  <div>
                        <p>Venue &ensp; &ensp;: Central Library of Insititute of Technology Bandung, Institute of Technology Bandung, Bandung, Indonesia</p>
                        <p>Date &ensp; &ensp; &nbsp; &nbsp;: Friday, February 15<sup>th</sup>, 2019</p>
                        <p>Time &ensp; &ensp; &nbsp; &nbsp;: 08:00 AM - end (GMT+7)</p>
                    </div>
    },
    {
        'title': 'GENERAL RULES',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>IPFEST 2019 Mud Innovative Competition is open for undergraduate students only.</p>
                        </li>
                        <li>
                            <p>Each university can send a maximum of 2 teams with each team consisting of 3 people.</p>
                        </li>
                        <li>
                            <p>Every member of a team must be from the same university</p>
                        </li>
                        <li>
                            <p>Every member of a team is only allowed to join one team</p>
                        </li>
                        <li>
                            <p>Case for each team will be sent on <strong>January 17<sup>th</sup>, 2019 at 07.00 P.M (GMT +7)</strong> to each team leader’s email.</p>
                        </li>
                        <li>
                            <p>Present your answer and solution using your presentation (.ppt file) at IPFEST 2018 Mud Innovative Competition Main Event <strong>(February 15<sup>th</sup>, 2019)</strong></p>
                        </li>
                        <li>
                            <p>All presentations should be delivered in English.</p>
                        </li>
                        <li>
                            <p>The presentation will be closed presentation.</p>
                        </li>
                        <li>
                            <p>The order of presentation will be known at Technical Meeting</p>
                        </li>
                        <li>
                            <p>All participants should attend the Technical Meeting on <strong>February 14<sup>th</sup>, 2019.</strong> The venue will be announced later through IPFEST 2019 e-mail or official account.</p>
                        </li>
                        <li>
                            <p>Judges’ decisions are final and absolute.</p>
                        </li>
                        <li>
                            <p>All regulations of IPFEST 2019 Mud Innovative Competition are subject to change. All changes will be informed on technical meeting or days before the competition through the team leader’s email.</p>
                        </li>
                    </ol>
    },
    {
        'title': 'COMPETITION FORMAT',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>Participants are required to come up with the best result for the study case.</p>
                            </li>
                            <li>
                                <p>Participants will write a final report regarding the mud they have analyzed based on the study case given</p>
                            </li>
                            <li>
                                <p>Participants will be given a total 30 minutes consisting of presentation and Q&A from the judges. Time given are divided into 15 minutes for presentation and 15 minutes for Q&A session.</p>
                            </li>
                            <li>
                                <p>The presentation (.ppt) should be presented in English and submitted to the committee to <a href='https://ipfest2019@gmail.com'>ipfest2019@gmail.com</a> (cc: <a href='https://andrekurnia01@gmail.com'>andrekurnia01@gmail.com</a>) with subject and file name :</p>
                                <p>“MUD_IPFEST2019_(Presentation)_(University name)_(Team Leader)” maximum at <strong>February 13<sup>th</sup>, 2019 at 23.59(GMT +7)</strong></p>
                                <p className='text-center'><strong>Example : </strong></p>
                                <p>MUD_IPFEST2019_(Presentation)_(Institute Technology of Bandung)_(Andre Kurnia)</p>
                            </li>
                            <li>
                                <p>After submitting your presentation, please verify immediately to our contact person</p>
                            </li>
                            <li>
                                <p>Judges, Moderator, and time keeper decisions are unanimous.</p>
                            </li>
                        </ol>
                    </div>
                    
    },
    {
        'title': 'Judging Criteria',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>Procedure (5%):</p>
                            <ol type='a'>
                                <li>
                                    <p>a. Completeness</p>
                                </li>
                                <li>
                                    <p>Punctuality</p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Presentation (15%):</p>
                            <ol type='a'>
                                <li>
                                    <p>Attitude</p>
                                </li>
                                <li>
                                    <p>Attractiveness</p>
                                </li>
                                <li>
                                    <p>Explanation</p>
                                </li>
                                <li>
                                    <p>Creativity</p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Content (50%):</p>
                            <ol type='a'>
                                <li>
                                    <p>Problem Identification</p>
                                </li>
                                <li>
                                    <p>Solution Effectiveness</p>
                                </li>
                                <li>
                                    <p>Reference Appropriateness</p>
                                </li>
                                <li>
                                    <p>Research</p>
                                </li>
                                <li>
                                    <p>Mud Design</p>
                                </li>
                                <li>
                                    <p>Performance</p>
                                </li>
                                <li>
                                    <p>Properties Completenss</p>
                                </li>
                                <li>
                                    <p>Environmental Friendliness</p>
                                </li>
                                <li>
                                    <p>Hazard Management</p>
                                </li>
                                <li>
                                    <p>Cost</p>
                                </li>
                                <li>
                                    <p>Innovation</p>
                                </li>
                                <li>
                                    <p>Originality</p>
                                </li>
                                <li>
                                    <p>Feasibility</p>
                                </li>
                                <li>
                                    <p>Utility</p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Questions & Answer (30%):</p>
                            <ol type='a'>
                                <li>
                                    <p>Responsiveness</p>
                                </li>
                                <li>
                                    <p>Argument Strength</p>
                                </li>
                                <li>
                                    <p>Systemic</p>
                                </li>
                                <li>
                                    <p>Compatibleness</p>
                                </li>
                            </ol>
                        </li>
                    </ol>
    },
    {
        'title': 'TOURNAMENT OFFICIALS',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>Judges</p>
                            <p>There will be at least 2 judges. All judges decisions are concerning compliance to the rules.</p>
                        </li>
                        <li>
                            <p>Time Keeper</p>
                            <p>The timekeeper will enforce time limits and inform participants every 5 minutes of presentation.</p>
                        </li>
                        <li>
                            <p>Operator</p>
                            <p>Operator will help participants to go to the next slide of presentation and open any files related to the presentation. Participants may choose whether they need operator help or not</p>
                        </li>
                        <li>
                            <p>Moderator</p>
                            <p>Moderator will enforce the rules & regulation and have the right to pause or continue the presentation of all participants.</p>
                        </li>
                    </ol>
    },
    {
        'title': 'EQUIPMENT REQUIREMENT',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>Participants should provide three (3) handouts of their final report.</p>
                            </li>
                            <li>
                                <p>Participants will presenting slide they have sent to the committee before.</p>
                            </li>
                            <li>
                                <p>Size of handouts must be A4.</p>
                            </li>
                            <li>
                                <p>Handouts should be united by three (3) staple at the left-edge of paper.</p>
                            </li>
                            <li>
                                <p>Laptop, projector, broad marker, and whiteboard are provided by the committees.</p>
                            </li>
                            <li>
                                <p>Participants are allowed to bring pointer for their presentation purpose.</p>
                            </li>
                            <li>
                                <p>Any others presentation tools which are not mentioned above are not allowed to be used during presentation e.g. X-Banner etc.</p>
                            </li>
                        </ol>
                        <p>Note : Handouts of final report have to be submitted to the committe on technical meeting</p>
                    </div>
                   
    },

    {
        'title': 'Time',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>Tardiness of submitting final presentation slide up to 9 hours from dateline may result in decreasing score (10%). </p>
                            </li>
                            <li>
                                <p>Any other tardiness more than 9 hours from dateline will result of team disqualification.</p>
                            </li>
                            <li>
                                <p>Tardiness of more than 5 minutes from the scheduled match time may result in a scoring penalty, unless the lateness is the fault of the tournament, or the officials are satisfied with the other good cause.</p>
                            </li>
                            <li>
                                <p>The clock used by the game officials is the official time and is not contestable.</p>
                            </li>
                            <li>
                                <p>Each Participant should be at the presentation hall at least 20 minutes before the presentation starts.</p>
                            </li>
                            <li>
                                <p>The presentation time will start when the team is ready to start.</p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'RESULT',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>Result Tournament official decisions are absolute and final.</p>
                            </li>
                            <li>
                                <p>Results of Mud Innovative Competition will be announced on the Gala Dinner IPFEST 2019.</p>
                            </li>
                            <li>
                                <p>All participants have their right to see the final score given by the judges.</p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'AWARDS',
        'content':  <div>
                        <p>The Winners of IPFEST 2019 Mud Innovative Competition will be awarded moey and a certificate:</p>
                        <p>1st Winner &ensp; &nbsp; &nbsp;: IDR 5,000,000 + certificate</p>
                        <p>2nd Winner &ensp;: IDR 4,000.000 + certificate</p>
                        <p>3rd Winner &ensp; &nbsp;: IDR 3,000,000 + certificate</p>
                    </div>
    },
    {
        'title': 'REGISTRATION',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>Registration will be conducted in IPFEST 2019 website registration form at <a href='http://www.ipfest2019.com'>www.ipfest2019.com</a> at <strong>November 1<sup>st</sup>, 2018 – November 25<sup>th</sup>, 2018</strong> and <strong>December 9<sup>th</sup>, 2018 – January 10<sup>th</sup>, 2019</strong>.</p>
                            </li>
                            <li>
                                <p>Submit the transfer slip to the link that will be given via email after registration</p>
                            </li>
                            <li>
                                <p>The mechanism of the selection is on first-pay, first-served basis, the first 12 teams that complete both the registration and payment process will be selected to join IPFEST 2019 Mud Innovative Competition.</p>
                            </li>
                            <li>
                                <p>Please submit all the registration requirements to our official email <a href='https://ipfest2019@gmail.com'>ipfest2019@gmail.com</a> before <strong>November 30<sup>th</sup>, 2018 (1<sup>st</sup> batch)</strong> and <strong>January 15<sup>th</sup>,  2019 (2<sup>nd</sup> batch)</strong>.</p>
                            </li>
                            <li>
                                <p>If there are 12 registered teams after 1st batch open registration, there will be no 2nd batch open registration.</p>
                            </li>
                            <li>
                                <p>Should be there any questions, please address to <a href='https://ipfest2019@gmail.com'>ipfest2019@gmail.com</a></p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'KEY DATES',
        'content':  <div>
                        <p>Open Registration (1st Batch) &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: Novermber 1<sup>st</sup>, 2018 - November 25<sup>th</sup>, 2018</p>
                        <p>Open Registration (2nd Batch) &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: December 9<sup>th</sup>, 2018 - January 10<sup>th</sup>, 2019</p>
                        <p>Official Delegates Announcement &ensp;&ensp;&ensp; &ensp; &ensp;: January 17<sup>th</sup>, 2019</p>
                        <p>Case and Questions are issued &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: January 17<sup>th</sup>, 2019</p>
                        <p>Final Presentation Submission &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: February 13 <sup>th</sup>, 2019</p>
                        <p>Competition Day &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: February 15<sup>th</sup>, 2019</p>
                    </div>
    },
    {
        'title': 'CONTACT PERSON',
        'content':  <div>
                        <p>Andre Kurnia Triputra</p>
                        <p>Manager of IPFEST 2019 Mud Innovation Competition</p>
                        <p>+62-823-7444-1699</p>
                        <p>Andrekurnia01@gmail.com </p>
                    </div>
    },
]

export default class MudInnovationCompetition extends Component {
    constructor(props) {
        super(props);

        this.state = {
            registrationContent: registration[11],
        }
    }

    render() {
        return(
            <div className='competition-detail'>
                <Container>
                    <div className='title'>
                        <img 
                            src={require('../../../images/Competition/MudInnovation/mud-innovation.png')}
                        />
                    </div>
                    <Row className='competition-detail-content'>
                        <Col sm={3}>
                            <img 
                                src={require('../../../images/Competition/Mud.png')}
                            />
                        </Col>
                        <Col sm={9} className='competition-detail-content-explain'>
                            <p>
                                IPFEST 2019 Mud Innovative Competition is a competition which challenge particiapnts’ knowledge about drilling mud in the petroleum sector, as well as their analytical skills and creativity to make the most efficient drilling mud. All participants will be given a case by petroleum experts coming from different background. Subsequently, they will do a presentation about their design and analysis result of their mud in front of honorable judges.
                            </p>
                        </Col>
                    </Row>
                    <Row className='registration-rules'>
                        <Col  className='registration-title' sm='3'> 
                            <p onClick={() => this.setState({registrationContent: registration[0]})}>
                                <strong>Theme</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[1]})}>
                                <strong>Venue & Date</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[2]})}>
                                <strong>General Rules</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[3]})}>
                                <strong>Competition Format</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[4]})}>
                                <strong>Judging Criteria</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[5]})}>
                                <strong>Tournament Officials</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[6]})}>
                                <strong>Equipment Requirement</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[7]})}>
                                <strong>Time</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[8]})}>
                                <strong>Result</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[9]})}>
                                <strong>Awards</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[10]})}>
                                <strong>Registration</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[11]})}>
                                <strong>Key Dates</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[12]})}>
                                <strong>Contact Person</strong>
                            </p>
                        </Col>
                        <Col className='registration-content' sm='9'> 
                            <h2> {this.state.registrationContent.title} </h2>
                            {this.state.registrationContent.content}
                        </Col>
                    </Row>
                </Container> 
            </div>
        )
    }
}
