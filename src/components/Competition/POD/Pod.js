import React, { Component } from 'react';

import {
    Row,
    Col,
    Container,
 } from 'reactstrap';

import './Pod.css';

const registration = [
    {
        'title': 'THEME',
        'content': <p>Enhancing and Implementing Insight to Planning Economic and Efficient Site on Dealing with Future Energy Demand</p>
    },
    {
        'title': 'VENUE & DATE',
        'content':  <div>
                        <p>Venue &ensp; &ensp;: Seminar Room of Petroleum Engineering Department, Institute of Technology Bandung, Indonesia</p>
                        <p>Date &ensp; &ensp; &nbsp; &nbsp;: Friday, February 15<sup>th</sup>, 2019</p>
                        <p>Time &ensp; &ensp; &nbsp; &nbsp;: 08:00 AM - end (GMT+7)</p>
                    </div>
    },
    {
        'title': 'GENERAL RULES',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>IPFEST 2019 Plan of Development Competition participants are all the university students related to Oil and Gas Industry majors. </p>
                        </li>
                        <li>
                            <p>IPFEST 2019 Plan of Development Competition participants must be undergraduate student.</p>
                        </li>
                        <li>
                            <p>IPFEST 2019 Plan of Development Competition consists of 10 teams and each team consists of 4 –5 students.</p>
                        </li>
                        <li>
                            <p>Each team consists of students from same university and one person can only become a member of one team.</p>
                        </li>
                        <li>
                            <p>Each university is allowed to send maximum 2 teams for IPFEST 2019 Plan of Development Competition.</p>
                        </li>
                        <li>
                            <p>If the participants of IPFEST 2019 Plan of Development Competition are more than 10 teams, committee are selecting the fastest 10 teams who pay the fees.</p>
                        </li>
                        <li>
                            <p>All participants should attend the Technical Meeting</p>
                        </li>
                        <li>
                            <p>Judges’ decisions are final and absolute.</p>
                        </li>
                        <li>
                            <p>All regulations of IPFEST 2019 Plan of Development Competition are possible to be changed. All changes will be informed on technical meeting or days before the competition through team leader’s email.</p>
                        </li>
                    </ol>
    },
    {
        'title': 'POD REPORT FORMAT',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>IPFEST 2019 Plan of Development Competition refers to the standard of SKK Migas PTK POD. (Special Task for Upstream Oil and Gas Business Activities: The Working Procedurs of Plan of Development).</p>
                                <p>You may look at <a href='http://skkmigas.go.id/pedoman-tata-kerja'>http://skkmigas.go.id/pedoman-tata-kerja</a> and see PTK-037-2010-POD</p>
                            </li>
                            <li>
                                <p>The case will be given maximum at <strong>January 17<sup>th</sup>, 2019</strong> at 23:59 (GMT +7) to your team leader’s e-mail.</p>  
                            </li>
                            <li>
                                <p>The report is written in English with format :</p>
                                <ol type='a'>
                                    <li>
                                        <p>Font style &ensp;&ensp; &ensp;&ensp;&ensp; &ensp;: Times New Roman</p>
                                    </li>
                                    <li>
                                        <p>Font size &ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;: 12</p>
                                    </li>
                                    <li>
                                        <p>Heading Font Size &nbsp; : 14</p>
                                    </li>
                                    <li>
                                        <p>Line Spacing &ensp; &ensp;&ensp;&ensp;: 1.5</p>
                                    </li>
                                    <li>
                                        <p>Alignment &ensp;&ensp;&ensp; &ensp;&ensp;&ensp;: Justified</p>
                                    </li>
                                    <li>
                                        <p>Margin : Left & Top : 4 cm, Right & Bottom : 3 cm</p>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <p>All of calculations are attached in Microsoft Excel format </p>
                            </li>
                            <li>
                                <p>The final report must be submitted to <a href='https://ipfest2019@gmail.com'>ipfest2019@gmail.com</a> (cc: <a href='https://hamdanabdlh@gmail.com'>hamdanabdlh@gmail.com</a>) with subject and file name : “POD_IPFEST 2019_Report_(University Name)_(Team Leader Name)”. The final report must be submitted maximum <strong>February 9<sup>th</sup>, 2018 at 23:59 (GMT +7)</strong>.</p>
                                <p className='test-center'><strong>Example : </strong></p>
                                <p>POD_IPFEST 2019_Report_Institut Teknologi Bandung_Mohammad Hamdan Abdillah</p>
                            </li>
                            <li>
                                <p>The sender of final report must be the team leader.</p>
                            </li>
                            <li>
                                <p>The participants who submit the final report late will be deducted by 10%  of the final score.</p>
                            </li>
                            <li>
                                <p>After submitting your final report, please verify immediately to our contact person</p>
                            </li>
                            <li>
                                <p>Each team is expected to bring 3 (three) hardcopies of the Final Report at the Final Day.</p>
                            </li>
                            <li>
                                <p>All of the case and information that will be given are offivially completed and no additional information or change afterwards. Teams have a right to make a clear, creative, and responsible assumption if necessary while finishing the report.</p>
                            </li>
                        </ol>
                    </div>
                    
    },
    {
        'title': 'POD PRESENTATION',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>Each team should make Power Point Presentation (.ppt) based on their final report which have been submitted before.</p>
                        </li>
                        <li>
                            <p>The presentation should be presented in English and submitted to <a href='https://ipfest2019@gmail.com'>ipfest2019@gmail.com</a> (cc: <a href='https://hamdanabdlh@gmail.com'>hamdanabdlh@gmail.com</a>) with subject and file name : “POD_IPFEST 2019_Presentation_(University Name)_(Team Leader Name).” maximum at <strong>February 13<sup>th</sup>, 2019 at 23:59 (GMT +7)</strong>.</p>
                            <p className='text-center'><strong>Example : </strong></p>
                            <p>POD_IPFEST 2019_Presentation_Institut Teknologi Bandung_Mohammad Hamdan Abdillah</p>
                        </li>
                        <li>
                            <p>The participants who submit the presentation’s file late will be deducted by 10% of the final score.</p>
                        </li>
                        <li>
                            <p>All the members of  each team should be presented on the presentation day.</p>
                        </li>
                        <li>
                            <p>Each team is given maximum 15 minutes for presentation and maximum 15 minures for question and answer session.</p>
                        </li>
                        <li>
                            <p>After submitting your presentation, please verify immediately to our contact person</p>
                        </li>
                        <li>
                            <p>For the presentation session, each team is just allowed to delegate 1 person to present the idea.</p>
                        </li>
                        <li>
                            <p>For question and answer session, all members are allowed to answer the question.</p>
                        </li>
                        <li>
                            <p>There will be a close presentatio</p>
                        </li>
                        <li>
                            <p>The order of presentation will be announced in Technical Meeting</p>
                        </li>
                    </ol>
    },
    {
        'title': 'EQUIPMENT REQUIREMENT',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>Participants must bring 3 hard copies of their report and will be submitted to the judges at Presentation Session.</p>
                        </li>
                        <li>
                            <p>The committee will provide some tools that can be used by the participants, such as pointer, microphone, projector, and laptop.</p>
                        </li>
                        <li>
                            <p>The presentation file has sent by email will be prepared by committee at presentation session.</p>
                        </li>
                        <li>
                            <p>Any request for external assistance during the presentation will not be allowed.</p>
                        </li>
                    </ol>
    },
    {
        'title': 'JUDGING CRITERIA',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>Report (total score : 40)</p>
                            <ol type='a'>
                                <li>
                                    <p>The conformity with SKK Migas PTK POD</p>
                                </li>
                                <li>
                                    <p>The creativity, efficiency, economic, and feasibility of the plan.</p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Presentation (total score : 60)</p>
                            <ol type='a'>
                                <li>
                                    <p>Giving brief explanation about the content of presentation</p>
                                </li>
                                <li>
                                    <p>Creativity of the presentation design.</p>
                                </li>
                            </ol>
                        </li>

                    </ol>
    },
    {
        'title': 'TOURNAMENT OFFICIAL',
        'content':  <div>
                        <ol>
                            <li>
                                <p>Judges (3 Judges)</p>
                                <p>Each judges will give some question about participant’s idea and give score for the report and presentation. </p>
                            </li>
                            <li>
                                <p>Time Keeper</p>
                                <p>Each presentation will have one timekeeper. The timekeeper will enforce time limits and supervise the game clock.</p>
                            </li>
                            <li>
                                <p>Operator</p>
                                <p>Each presentation will have one operator. Operator will operate the laptop before the presentation begin.</p>
                            </li>
                            <li>
                                <p>Moderator</p>
                                <p>Each presentation will have one moderator. The moderator will be the opener of the presentation session and give judges a time to ask about the presentation to the participants.</p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'RESULT',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>Tournament official decisions are absolute and final.</p>
                            </li>
                            <li>
                                <p>Results of Plan of Development competition and total score of each participant will be announced at Gala Dinner.</p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'AWARDS',
        'content':  <div>
                        <p>The Winners of IPFEST 2019 Plan of Development Competition will be awarded moey and a certificate:</p>
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
                                <p>Registration will be conducted in IPFEST 2019 website registration form at <a href='http://www.ipfest2019.com'>www.ipfest2019.com</a> at <strong>November 1<sup>st</sup>, 2018 – November 25<sup>th</sup>, 2018</strong> and <strong>December 9<sup>th</sup>, 2018 – January 10<sup>th</sup>, 2019 (Batch 2)</strong>.</p>
                            </li>
                            <li>
                                <p>Partcipants official announcement will be on <strong>January 14<sup>th</sup>, 2019</strong> and will be shared at IPFEST 2019 official account and sent directly to your email</p>
                            </li>
                            <li>
                                <p>Registration fee have to be paid before <strong>November 30<sup>th</sup>, 2018 (Batch 1)</strong> and before <strong>January 5<sup>th</sup>, 2019 (Batch 2)</strong>. </p>
                            </li>
                            <li>
                                <p>Submit the transfer slip in the link that will be given via email after registration.</p>
                            </li>
                            <li>
                                <p>The mechanism of the selection will be decided through the registration, the first 10 teams which have finished the registration and payment will be selected to join IPFEST 2019 Plan of Development Competition.</p>
                            </li>
                            <li>
                                <p>If there any question, please ask via e-mail to <a href='https://ipfest2019@gmail.com'>ipfest2019@gmail.com</a></p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'KEY DATES',
        'content':  <div>
                        <p>Open Registration (1st Batch) &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: Novermber 1<sup>st</sup>, 2018 - November 25<sup>th</sup>, 2018</p>
                        <p>Open Registration (2nd Batch) &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: December 9<sup>th</sup>, 2018 - January 10<sup>th</sup>, 2019</p>
                        <p>Case and Question are issued &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;: January 17<sup>th</sup>, 2019</p>
                        <p>Official Delegates Announcement &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: January 17<sup>th</sup>, 2019</p>
                        <p>Final Report Submission &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &ensp;: February 9<sup>th</sup>, 2019</p>
                        <p>Final Presentation Submission &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: February 13<sup>th</sup>, 2019</p>
                        <p>Competition Day &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &ensp; &ensp;: February 15<sup>th</sup>, 2019</p>
                    </div>
    },
    {
        'title': 'CONTACT PERSON',
        'content':  <div>
                        <p>Mohammad Hamdan Abdillah</p>
                        <p>Manager of IPFEST 2019 Plan of Development Competition</p>
                        <p>+62-858-6587-3990</p>
                        <p>hamdanabdlh@gmail.com</p>
                    </div>
    },
]

export default class PodCompetition extends Component {
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
                            src={require('../../../images/Competition/POD/pod.png')}
                        />
                    </div>
                    <Row className='competition-detail-content'>
                        <Col sm={3}>
                            <img 
                                src={require('../../../images/Competition/POD.png')}
                            />
                        </Col>
                        <Col sm={9} className='competition-detail-content-explain'>
                            <p>
                            IPFEST 2019 Plan of Development Competition is a competition which challenge the participants to develop an oil and gas site efficiently and economically based on certain case and given data. This is a right place where the participants can show their ability to create efficient and economic plans of an oil and gas site. Participants can develop their engineering.
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
                                <strong>POD Report Format</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[4]})}>
                                <strong>POD Presentation</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[5]})}>
                                <strong>Equipment Requirement</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[6]})}>
                                <strong>Judging Criteria</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[7]})}>
                                <strong>Tournament Official</strong>
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