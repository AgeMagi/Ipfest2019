import React, { Component } from 'react';

import {
    Row,
    Col,
    Container,
 } from 'reactstrap';

import './PetroDebate.css';

const registration = [
    {
        'title': 'THEME',
        'content': <p>Implementing Future Energy Mix to Fulfill Energy Demand</p>
    },
    {
        'title': 'VENUE & DATE',
        'content':  <div>
                        <p>Venue &ensp; &ensp;: Petroleum Engineering Department Building, Institute of Technology Bandung, Indonesia</p>
                        <p>Date &ensp; &ensp; &nbsp; &nbsp;: Friday, February 15<sup>th</sup>, 2019</p>
                        <p>Time &ensp; &ensp; &nbsp; &nbsp;: 07:30 AM - end (GMT+7)</p>
                    </div>
    },
    {
        'title': 'GENERAL RULES',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>PFEST 2019 PetroDebate Competition applicants are undergraduate students from any university or college in Indonesia.</p>
                        </li>
                        <li>
                            <p>IPFEST 2019 PetroDebate Competition consist of 8 teams with 3 members each.</p>
                        </li>
                        <li>
                            <p>The first eight (8) teams that have completed the payment process will be invited to IPFEST 2019 PetroDebate Competition. They will be notified through IPFEST 2019 website and email.</p>
                        </li>
                        <li>
                            <p>The maximum team cap for each university is 3 teams.</p>
                        </li>
                        <li>
                            <p>Each team must consist of students from the same university. It is allowed from different major.</p>
                        </li>
                        <li>
                            <p>Each team must send one of their members (minimum) to attend the technical meeting on <strong>February 14<sup>th</sup>, 2019</strong>.</p>
                        </li>
                        <li>
                            <p>Adjudicators’ decisions are final and absolute.</p>
                        </li>
                    </ol>
    },
    {
        'title': 'COMPETITION FORMAT',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>IPFEST 2019 PetroDebate Competition will be divided into 4 rounds: Preliminary Round I, Preliminary Round II, Preliminary Round III, and Final Round.</p>
                            </li>
                            <li>
                                <p>Each debating match will consist of two teams; one to propose the motion and one to oppose it. The team proposing may be known as ‘The Proposition’, ‘The Affirmative’ or ‘The Government’. The team opposing may be known as ‘The Opposition’ or ‘The Negative’. Teams will be designated as the Proposition or the Opposition for each round randomly.</p>
                            </li>
                            <li>
                                <p>Teams will comprise the following members.</p>
                                <ol type='a'>
                                    <li>
                                        <p>AFFIRMATIVE</p>
                                        <ul>
                                            <li>
                                                <p>Prime Minister, or First Affirmative.</p>
                                            </li>
                                            <li>
                                                <p>Deputy Prime Minister, or Second Affirmative. </p>
                                            </li>
                                            <li>
                                                <p>Government Whip, or Third Affirmative.</p>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p>NEGATIVE</p>
                                        <ul>
                                            <li>
                                                <p>Leader of the Opposition, or First Negative.</p>
                                            </li>
                                            <li>
                                                <p>Deputy Leader of the Opposition, or Second Negative. </p>
                                            </li>
                                            <li>
                                                <p>Opposition Whip, or Third Negative.</p>
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <p>Debaters will speak in the following order: </p>
                                <ol type='a'>
                                    <li>
                                        <p>Prime Minister</p>
                                    </li>
                                    <li>
                                        <p>Leader of Opposition</p>
                                    </li>
                                    <li>
                                        <p>Deputy Prime Minister </p>
                                    </li>
                                    <li>
                                        <p>Deputy Leader of Opposition</p>
                                    </li>
                                    <li>
                                        <p>Government Whip</p>
                                    </li>
                                    <li>
                                        <p>Opposition Whip</p>
                                    </li>
                                    <li>
                                        <p>Opposition reply</p>
                                    </li>
                                    <li>
                                        <p>Government reply</p>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <p>Timing</p>
                                <ol type='a'>
                                    <li>
                                        <p>Time for speeches</p>
                                        <ol>
                                            <li>
                                                <p>Substantive Speeches: 7 minutes and 20 seconds.</p>
                                            </li>
                                            <li>
                                                <p>Reply Speeches: 4 minutes and 20 seconds.</p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <p>Time signals will be given in the following manner</p>
                                        <ol>
                                            <li>
                                                <p>End of first minute - single knock of the gavel.</p>
                                            </li>
                                            <li>
                                                <p>End of sixth minute - single knock of the gavel.</p>
                                            </li>
                                            <li>
                                                <p>End of seventh minute - double knock of the gavel.</p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <p>Reply Speeches</p>
                                        <ol>
                                            <li>
                                                <p>End of third minute- single knock of the gavel. </p>
                                            </li>
                                            <li>
                                                <p>End of Fourth minute- double knock of the gavel.</p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <p>Reply speeches can be given only by the first or second speaker.</p>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <p>Point of Information</p>
                                <ol type='a'>
                                    <li>
                                        <p>Points of Information (questions directed to the member speaking) may be asked between first minute mark and the six-minute mark of the members’ speeches.</p>
                                    </li>
                                    <li>
                                        <p>A POI must be indicated by a member of an opposing team rising from his/her seat. A member may announce that they would like to ask a Point of Information or use a short word calling attention to the member of the opposing team raising the Point of Information.</p>
                                    </li>
                                    <li>
                                        <p>The member who is speaking must respond the POI given to him/her in one of the following ways.</p>
                                        <ul>
                                            <li>
                                                <p>A clear gesture or hand signal rejecting the offer.</p>
                                            </li>
                                            <li>
                                                <p>A verbal rejection of the offer, or</p>
                                            </li>
                                            <li>
                                                <p>A verbal acceptance of the offer.</p>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p>If a POI is accepted, the point should be phrased as a question, or clarification, or comment, and made in no more than 15 seconds.</p>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <p>Motion</p>
                                <ol type='a'>
                                    <li>
                                        <p>The list of motions for Preliminary Round will be notified seven days before competition day.</p>
                                    </li>
                                    <li>
                                        <p>The list of motions for Final Round will be notified two days before competition day.</p>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <p>Competition rules are subject to change. Any changes of rules, clarifications, or agenda will be announced to all participants via E-mail or at Technical Meeting one day before the event.</p>
                            </li>
                        </ol>
                    </div>
                    
    },
    {
        'title': 'TOURNAMENT OFFICIAL',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>Chief Adjudicator</p>
                            <p>Chairperson of the judges that selected by the committee and more experienced than invited adjudicator.</p>
                        </li>
                        <li>
                            <p>Adjudicator</p>
                            <p>Judges who are accredited by competitions held by DIKTI and universities.</p>
                        </li>
                        <li>
                            <p>Time keeper</p>
                            <p>Official who records the time and supersives time limits.</p>
                        </li>
                    </ol>
    },
    {
        'title': 'JUDGING CRITERIA',
        'content':  <ol className='list-notab'>
                       <li>
                           <p>Matter</p>
                           <p>Relates to the issues in debate, the case being presented, and the material used to substantiate argumentation.</p>
                       </li>
                       <li>
                           <p>Manner</p>
                           <p>Refers to the clarity and persuasiveness of the presentation and delivery style of a speaker.</p>
                       </li>
                       <li>
                           <p>Method</p>
                           <p>Relates to the structure and organization of an individual speech, good time management and good time keeping, effectiveness of the team’s case organization and structure as a whole, and overall response to the debate.</p>
                       </li>
                    </ol>
    },
    {
        'title': 'EQUIPMENT REQUIREMENT',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>Pen, pencil, eraser, sheets of paper are allowed during the competition.</p>
                        </li>
                        <li>
                            <p>Printed  and  prepared  materials  may  be  used  during  the  preparation  period. No access  to  electronic  media  or  electronic  storage  or  retrieval  devices  is permitted  after motions have been released at the competition day.</p>
                        </li>
                    </ol>
    },

    {
        'title': 'RESULT',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>Two teams with highest cumulative score from Preliminary Round I to Preliminary Round III will proceed to final round.</p>
                            </li>
                            <li>
                                <p>Results of PetroDebate competition will be announced at Gala Dinner.</p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'AWARDS',
        'content':  <div>
                        <p>The Winners of IPFEST 2019 PetroDebate Competition will be awarded money and a certificate:</p>
                        <p>1st Winner &ensp; &nbsp; &nbsp;: IDR 4,000,000 + certificate</p>
                        <p>2nd Winner &ensp;: IDR 3,000.000 + certificate</p>
                        <p>3rd Winner &ensp; &nbsp;: IDR 1,500,000 + certificate</p>
                    </div>
    },
    {
        'title': 'REGISTRATION',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>Registration will be conducted in IPFEST 2019 website registration form at <a href='http://ipfest2019.com'>www.ipfest2019.com</a> at <strong>November 1<sup>st</sup> – November 25<sup>th</sup>, 2018 (1<sup>st</sup></strong> and <strong>December 9<sup>th</sup> 2018 – January 10<sup>th</sup>, 2019 (2<sup>nd</sup> batch).</strong></p>
                            </li>
                            <li>
                                <p>Submit the transfer slip in the link that will be given via email after registration.</p>
                            </li>
                            <li>
                                <p>The first 8 teams that complete both the registration and payment processes will be selected to join IPFEST 2019 PetroDebate Competition.</p>
                            </li>
                            <li>
                                <p>Official delegates announcement will be on <strong>January 17<sup>th</sup>, 2019</strong> and will be shared at IPFEST 2019 official account and sent directly to your email.</p>
                            </li>
                            <li>
                                <p>If there is any question, please ask via e-mail to <a href='https://ipfest2019@gmail.com'>ipfest2019@gmail.com</a></p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'KEY DATES',
        'content':  <div>
                        <p>Open Registration (1st Batch) &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: Novermber 1<sup>st</sup>, 2018 - November 25<sup>th</sup>, 2018</p>
                        <p>Open Registration (2nd Batch) &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: December 9<sup>th</sup>, 2018 - January 10<sup>th</sup>, 2019</p>
                        <p>Official Delegates Announcement &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: January 17<sup>th</sup>, 2019</p>
                        <p>Competition Day &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: February 15<sup>th</sup>, 2019</p>
                    </div>
    },
    {
        'title': 'CONTACT PERSON',
        'content':  <div>
                        <p>Reynaldo Billy Towidjojo</p>
                        <p>Manager of IPFEST 2019 PetroDebate Competition</p>
                        <p>+62-822-1141-7555</p>
                        <p>reynaldobilly27@gmail.com</p>
                    </div>
    },
]

export default class PetroDebateCompetition extends Component {
    constructor(props) {
        super(props);

        this.state = {
            registrationContent: registration[0],
        }
    }

    render() {
        return(
            <div className='competition-detail'>
                <Container>
                    <div className='title'>
                        <img 
                            src={require('../../../images/Competition/PetroDebate/petrodebate.png')}
                        />
                    </div>
                    <Row className='competition-detail-content'>
                        <Col sm={3}>
                            <img 
                                src={require('../../../images/Competition/PetroDebate.png')}
                            />
                        </Col>
                        <Col sm={9} className='competition-detail-content-explain'>
                            <p>
                                In this competition, a team which consists of three participants, will be tested based on their knowledge and ability to think critically on a problem related to energy policy and future energy. The team will be presented with a motion related to the given theme. In one match, there will be a pro team and a contra team against the motion. The team with the best understanding and exposure to the given motion will be the winner.
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
                                <strong>Tournament Official</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[5]})}>
                                <strong>Judging Criteria</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[6]})}>
                                <strong>Equipment Requirement</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[7]})}>
                                <strong>Result</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[8]})}>
                                <strong>Awards</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[9]})}>
                                <strong>Registration</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[10]})}>
                                <strong>Key Dates</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[11]})}>
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