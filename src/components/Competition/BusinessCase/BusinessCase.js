import React, { Component } from 'react';

import {
    Row,
    Col,
    Container,
 } from 'reactstrap';

import './BusinessCase.css';

const registration = [
    {
        'title': 'THEME',
        'content': <p>Implementing Innovative Ideas & Technology to Improve Industry Efficiency </p>
    },
    {
        'title': 'VENUE & DATE',
        'content':  <div>
                        <p>Venue &ensp; &ensp;: Central Library of Institute of Technology Bandung</p>
                        <p>Date &ensp; &ensp; &nbsp; &nbsp;: Friday, February 15<sup>th</sup>, 2019</p>
                        <p>Time &ensp; &ensp; &nbsp; &nbsp;: 07:30 AM - end (GMT+7)</p>
                    </div>
    },
    {
        'title': 'GENERAL RULES',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>All participants must be undergraduate students of their university.</p>
                        </li>
                        <li>
                            <p>Each university sends a maximum of 2 teams, each team consists of 3 people (can be different departments).</p>
                        </li>
                        <li>
                            <p>Every member of a team only allowed join one team.</p>
                        </li>
                        <li>
                            <p>The competition consists of 2 rounds, the preliminary round and the final round.</p>
                        </li>
                        <li>
                            <p>The first twenty-four (24) teams that have completed the payment process will be given the case for Preliminary Round. They will be notified through IPFEST 2019 website and e-mail. (kenapa ga unlimited aja?)</p>
                        </li>
                        <li>
                            <p>The preliminary essay submitted must not include university’s name and attribute (logo, etc), only use team’s name and leader name</p>
                        </li>
                        <li>
                            <p>Top ten (10) teams in IPFEST 2019 Business Case Competition Preliminary Round will be invited to IPFEST 2019 Business Case Competition Final Round.</p>
                        </li>
                        <li>
                            <p>Each team that have been proceed to IPFEST2019 Business Case Competition Final Round must attend the technical meeting at <strong>February 14<sup>th</sup>, 2019.</strong></p>
                        </li>
                        <li>
                            <p>Given cases in this competition is related with Oil and Gas Company.</p>
                        </li>
                        <li>
                            <p>The cases will be sent directly to team leader’s email.</p>
                        </li>
                        <li>
                            <p>Judges’ decisions are final and absolute</p>
                        </li>
                        <li>
                            <p>All regulations of IPFEST 2019 Business Case Competition are subjected to change.</p>
                            <p>All changes will be informed on technical meeting or days before the competition via team leader’s email.</p>
                        </li>
                    </ol>
    },
    {
        'title': 'COMPETITION FORMAT',
        'content':  <div>
                        <p>IPFEST2019 Business Case Competition will be conducted in 2 rounds :</p>
                        <ol className='list-notab'>
                            <li>
                                <p>Preliminary Round</p>
                                <p>At preliminary round, each team will analyze Preliminary case and find the solution in the form of an essay. The prelimenary case will be given on <strong>November 31<sup>st</sup>, 2018</strong> and will be send directly to your leader’s email. The essay must be in English and submitted before <strong>December 11<sup>th</sup>, 2018 23.59</strong>. Submission of the essay must in .pdf form with file name : IPFEST2019_BusinessCaseCompetition_Preliminary_(Team Name).doc and submitted to IPFEST 2019 official email (<a href='https://ipfest2019@gmail.com'>ipfest2019@gmail.com</a>) and cc to <a href='https://baskoro1404@gmail.com'>baskoro1404@gmail.com</a>). The subject of the email is BusinessCaseCompetition_IPFEST2019_Preliminary_(Team Name)_University. After submitting your essay, please verify immediately to our contact person. The top 10 teams selected by the judge will proceed to the final round and will be announced at <strong>January 17<sup>th</sup>, 2019</strong>.</p>
                            </li>
                            <li>
                                <p>Final Round</p>
                                <p>At final round, each team will analyze the case and present their solution in front of the judges at the competition day. The teams that proceed to the final round will have 150 minutes to analyze the case. Submission of the essay must in .ppt form with file name : IPFEST2019_BusinessCaseCompetition_Final_(Team Name).ppt and submitted to IPFEST 2019 official email (<a href='https://ipfest2019@gmail.com'>ipfest2019@gmail.com</a>) and cc to <a href='https://baskoro1404@gmail.com'>baskoro1404@gmail.com</a> before the time is up. The subject of the email is BussinessCaseCompetition_IPFEST2019_Final_(Team Name)_University.</p>
                                <p>Each team will have 20 minutes for their presentation at the competition day, as the following :</p>
                                <p>Presentation: 10 minutes</p>
                                <p>QnA : 10 minutes</p>
                            </li>
                        </ol>
                    </div>
                    
    },
    {
        'title': 'ESSAY FORMAT',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>Preliminary Round</p>
                            <p>Each team must submit their preliminary essay with the following format :Font size : 12</p>
                            <ol type='a'>
                                <li>
                                    <p>Maximum 5 pages</p>
                                </li>
                                <li>
                                    <p>Size : A4</p>
                                </li>
                                <li>
                                    <p>Font : Times New Roman</p>
                                </li>
                                <li>
                                    <p>Margin (top, bottom, left, right) : 2,5 cm</p>
                                </li>
                                <li>
                                    <p>Paragraph Spacing : 1,5</p>
                                </li>
                                <li>
                                    <p>File name IPFEST2019_BusinessCaseCompetition_Preliminary_(Team Name).ppt</p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Final Round</p>
                            <p>Each team can present their solution the best they can do as long as it is in .pdf form.</p>
                        </li>
                    </ol>
    },
    {
        'title': 'TOURNAMENT OFFICIAL',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>Judges</p>
                            <p>There will be 3 judges present. All judges’ decision is final and absolute.</p>
                        </li>
                        <li>
                            <p>Moderator</p>
                            <p>Moderator will enforce the rules and regulations of the competition, have the rights to stop, pause, and continue the presentation of all participants.</p>
                        </li>
                        <li>
                            <p>Operator</p>
                            <p>Operator will help the participants to go to next slide of the presentation and open any files related to the participants. The participants can choose if they don’t need operator.</p>
                        </li>
                        <li>
                            <p>Timekeeper</p>
                            <p>Timekeeper will remind and enforce the time limits.</p>
                        </li>
                    </ol>
    },
    {
        'title': 'JUDGING CRITERIA',
        'content':  <div>
                        <p>Final Case</p>
                        <ol className='list-notab'>
                            <li>
                                <p>Presentation (50%)</p>
                                <p>Presentation criteria will be divided into :</p>
                                <ol type='a'>
                                    <li>
                                        <p>Content (30%)</p>
                                        <p>The content is assessed based on the accuracy of the solution to the existing problems.</p>
                                    </li>
                                    <li>
                                        <p>Delivery Content (20%)</p>
                                        <p>The delivery of the solution will be assessed, how well you presentate it before the judges.</p>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <p>QnA (50%)</p>
                                <p>Team have to convince the judges about their solution by answering judges questions.</p>
                            </li>
                        </ol>
                    </div>
    },

    {
        'title': 'EQUIPMENT REQUIREMENT',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>Projector and pointer will be provided by the committee.</p>
                            </li>
                            <li>
                                <p>Each team must bring laptop, mobile hotspot or flash disc on their own.</p>
                            </li>
                            <li>
                                <p>Participants will present their presentation they have been sent to IPFEST 2019 official email.</p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'TIME',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>Tardiness of more than 5 minutes from the scheduled match time may result in a scored penalty, unless the lateness is the fault of the tournament, or the officials are satisfied with the other good cause.</p>
                            </li>
                            <li>
                                <p>Teams that exceed the presentation time will be immediately stopped.</p>
                            </li>
                            <li>
                                <p>The clock used by the competition official is the official time.</p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'RESULTS',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>Judges’ decision is final and absolute.</p>
                            </li>
                            <li>
                                <p>The result of the competition will be announced at Gala Dinner.</p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'AWARDS',
        'content':  <div>
                        <p>The Winners of IPFEST 2019 Business Case Competition will be awarded moey and a certificate:</p>
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
                                <p>Preliminary fees for Business Case Competition is</p>
                                <ol type='a'>
                                    <li>
                                        <p>IDR 150,000 per team for domestic students.</p>
                                    </li>
                                    <li>
                                        <p>USD 12 per team for international students.</p>
                                    </li>
                                </ol>
                                <p>The fastest 24 teams that have paid via bank account will be given the case for preliminary round.</p>
                            </li>
                            <li>
                                <p>The prelimenary case will be given on November 31st, 2018 and will be send directly to your leader’s email.</p>
                            </li>
                            <li>
                                <p>The submission of preliminary case must be before <strong>December 11<sup>th</sup>, 2018 at 23.59 (GMT +7)</strong> to IPFEST 2019 official email <a href='https://ipfest2019@gmail.com'>ipfest2019@gmail.com</a> (cc to <a href='https://baskoro1404@gmail.com'>baskoro1404@gmail.com</a>)</p>
                            </li>
                            <li>
                                <p>Final round team announcement will be on <strong>January 17<sup>th</sup>, 2019</strong> and will be shared at IPFEST 2019 official account and send directly to your leader’s email.</p>
                            </li>
                            <li>
                                <p>The teams that has passed the preliminary round, have to pay the remaining fees which is:</p>
                                <ol type='a'>
                                    <li>
                                        <p>IDR 450,000 per person for domestic students.</p>
                                    </li>
                                    <li>
                                        <p>USD 33 per person for international students.</p>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <p>The remaining fees have to be paid before <strong>January 31<sup>st</sup>, 2019</strong> by submitting your transfer slip to the contact person below.</p>
                            </li>
                            <li>
                                <p>Any remaining question, please ask via e-mail to <a href='https://ipfest2019@gmail.com'>ipfest2019@gmail.com</a> with subject “Business Case Competition Enquiry”.</p>
                            </li>
                            <li>
                                <p><a href="https://drive.google.com/uc?export=download&id=1WHkmDdA1Vpcwn-Nzawf2wXLxQhB014bR">Download</a> Anti Plagirsm Statement Lefter</p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'KEY DATES',
        'content':  <div>
                        <p>Competition Registration &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: Novermber 1<sup>st</sup>, 2018 - November 25<sup>th</sup>, 2018</p>
                        <p>Preliminary Case Submission &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: December 11<sup>th</sup>, 2018</p>
                        <p>Final Round Team Announcement &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: January 17<sup>th</sup>, 2019</p>
                        <p>Competition Day &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: February 15<sup>th</sup>, 2019</p>
                    </div>
    },
    {
        'title': 'CONTACT PERSON',
        'content':  <div>
                        <p>Baskoro Adi Nugroho</p>
                        <p>Manager of IPFEST 2019 Business Case Competition</p>
                        <p>+62-812-2414-7585</p>
                        <p>Baskoro1404@gmail.com</p>
                    </div>
    },
]

export default class BusinessCaseCompetition extends Component {
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
                            src={require('../../../images/Competition/BusinessCase/business-case.png')}
                        />
                    </div>
                    <Row className='competition-detail-content'>
                        <Col sm={3}>
                            <img 
                                src={require('../../../images/Competition/BCC.png')}
                            />
                        </Col>
                        <Col sm={9} className='competition-detail-content-explain'>
                            <p>
                                Every policy taken by the company is always based on economic factors. Nowadays, most students only prioritize technical matters, without considering the economic aspect. IPFEST 2019 Business Case Competition is a beginning for students to explore the economic and business aspects of upstream oil and gas companies by applying innovative technology to maximize effectiveness. Participants will be challenged to act as policy makers and think critically to offer solutions for the given case, which in turn can trigger participants' creativity in making new innovations for the given case.
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
                                <strong>Essay Format</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[5]})}>
                                <strong>Tournament Official</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[6]})}>
                                <strong>Judging Criteria</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[7]})}>
                                <strong>Equipment Requirement</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[8]})}>
                                <strong>Time</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[9]})}>
                                <strong>Results</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[10]})}>
                                <strong>Awards</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[11]})}>
                                <strong>Registration</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[12]})}>
                                <strong>Key Dates</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[13]})}>
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