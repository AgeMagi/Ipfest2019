import React, { Component } from 'react';

import {
    Row,
    Col,
    Container,
 } from 'reactstrap';

import './PaperPoster.css';

const registration = [
    {
        'title': 'THEME',
        'content': <p>Innovative Solution regarding Technology and Method in Oil and Gas Industry to Fill Up Future Energy Demand</p>
    },
    {
        'title': 'VENUE & DATE',
        'content':  <div>
                        <p>Venue &ensp; &ensp;: Central Library of Insititute of Technology Bandung, Institute of Technology Bandung, Indonesia</p>
                        <p>Date &ensp; &ensp; &nbsp; &nbsp;: Friday, February 15<sup>th</sup>, 2019</p>
                        <p>Time &ensp; &ensp; &nbsp; &nbsp;: 08:00 AM - end (GMT+7)</p>
                    </div>
    },
    {
        'title': 'GENERAL RULES',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>IPFEST 2019 Paper and Poster Competition applicants may only be undergraduate students from university </p>
                        </li>
                        <li>
                            <p>Only maximum 2 (two) author(s) for each team are eligible to compete</p>
                        </li>
                        <li>
                            <p>Each university MAY send any number of teams for the abstract submission. However, only 2 teams per university are ALLOWED to be chosen and continue the participation.</p>
                        </li>
                        <li>
                            <p>All participants of one team must be from the same university</p>
                        </li>
                        <li>
                            <p>The competition consist of two main phase. First one is abstract selection, the second one is paper presentation</p>
                        </li>
                        <li>
                            <p>The abstract, paper, poster and the presentation have to be in English</p>
                        </li>
                        <li>
                            <p>At time of submission, the abstract, paper, nor the presentation have not been published in a professional journal</p>
                        </li>
                        <li>
                            <p>The topic of the abstract submitted has to be the same with the final paper</p>
                        </li>
                        <li>
                            <p>Plagiarism is not tolerated and will be disqualified immediately</p>
                        </li>
                        <li>
                            <p>Any kind of reference has to follow APA Citation Format</p>
                        </li>
                        <li>
                            <p>All participants should attend Technical Meeting that will be held on <strong>February 14<sup>th</sup>, 2019</strong>. The venue will be notified later via email or official account</p>
                        </li>
                        <li>
                            <p>Fail to obey the rules, format or late submission may receive deductions of points or even disqualification</p>
                        </li>
                    </ol>
    },
    {
        'title': 'COMPETITION FORMAT',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>Ten (10) best abstract will be allowed to proceed to the second phase, paper presentation</p>
                            </li>
                            <li>
                                <p>Each participants will be given 10 minutes to present their paper and followed by another 10 minutes for Q&A</p>
                            </li>
                            <li>
                                <p>During the presentation, a time keeper will be present to notify time checkpoints (3 minutes have passed, 5 minutes have passed, 7 minutes have passed, 10 minutes is up)</p>
                            </li>
                            <li>
                                <p>Only the judges can ask the participants, the audience is not allowed to ask</p>
                            </li>
                            <li>
                                <p>The decision of the judges are absolute</p>
                            </li>
                            <li>
                                <p>The presentation will be open to public</p>
                            </li>
                            <li>
                                <p>The winner of the competition will be announced in IPFEST 2019 Gala Dinner</p>
                            </li>
                            <li>
                                <p>Any rules change, clarification, and agenda will be announced to all participants directly via email and/or during the technical meeting</p>
                            </li>
                        </ol>
                    </div>
                    
    },
    {
        'title': 'ABSTRACT FORMAT',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>Written in English in .pdf format</p>
                        </li>
                        <li>
                            <p>Consist of maximum 425 words</p>
                        </li>
                        <li>
                            <p>Title of the paper</p>
                        </li>
                        <li>
                            <p>Name, departmen/major, and email of the author(s)</p>
                        </li>
                        <li>
                            <p>University or institution name and logo is not allowed</p>
                        </li>
                        <li>
                            <p>The abstract states:</p>
                            <ol type='a'>
                                <li>
                                    <p>Objectives/Scope</p>
                                </li>
                                <li>
                                    <p>Methods procedures and process</p>
                                </li>
                                <li>
                                    <p>Results, observations and conclusions</p>
                                </li>
                                <li>
                                    <p>Novel/Additive Information</p>
                                </li>
                                <li>
                                    <p>Keywords (three up to five)</p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Paper &ensp;&ensp;&ensp;&ensp; &ensp; &ensp;: A4</p>
                            <p>Font type &ensp;&ensp;&ensp; &ensp;: TImes New Roman</p>
                            <p>Font size &ensp;&ensp; &ensp; &ensp;: 12</p>
                            <p>Spacing &ensp;&ensp;&ensp;&ensp; &ensp;: 1.15</p>
                            <p>Margins &ensp;&ensp;&ensp;&ensp; &ensp;: left = 3cm; right, bottom, and top = 2 cm</p>
                            <p>Paragraph type : Justified</p>
                        </li>
                        <li>
                            <p>For abstract format example, open this link : <strong>bit.ly/AbstractIPFEST2019</strong></p>
                        </li>
                    </ol>
    },
    {
        'title': 'PAPER FORMAT',
        'content':  <ol className='list-notab'>
                       <li>
                           <p>Written in English in .pdf format </p>
                       </li>
                       <li>
                           <p>Title of the paper</p>
                       </li>
                       <li>
                           <p>Only name and university of the author(s)</p>
                       </li>
                       <li>
                            <p>Paper &ensp;&ensp;&ensp;&ensp; &ensp; &ensp;: A4</p>
                            <p>Font type &ensp;&ensp;&ensp; &ensp;: Times New Roman</p>
                            <p>Font size &ensp;&ensp; &ensp; &ensp;: 12</p>
                            <p>Spacing &ensp;&ensp;&ensp;&ensp; &ensp;: 1.15</p>
                            <p>Margins &ensp;&ensp;&ensp;&ensp; &ensp;: left = 3cm; right, bottom, and top = 2 cm</p>
                            <p>Paragraph type : Justified</p>
                       </li>
                       <li>
                           <p>The paper must consist of minimum 1000 words of text, with as many diagrams and supporting illustrations or data tables necessary</p>
                       </li>
                       <li>
                           <p>Each picture/diagram/illustration is considered to be an equivalent of 250 words</p>
                       </li>
                       <li>
                           <p>The paper must not exceed 7000 words equivalent to the text, pictures, diagrams and supporting illustrations or data tables necessary</p>
                       </li>
                       <li>
                           <p>Paper must not differ greatly from the abstract submitted</p>
                       </li>
                    </ol>
    },
    {
        'title': 'POSTER AND PRESENTATION FORMAT',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>Written in English in .pdf format for Poster and .ppt format for Presentation file</p>
                        </li>
                        <li>
                            <p>Poster orientation should be in portrait and A0 paper size (841 mm x 1189 mm)</p>
                        </li>
                        <li>
                            <p>Poster and presentation file should give brief explanation about full paper</p>
                        </li>
                    </ol>
    },

    {
        'title': 'JUDGING CRITERIA',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>Paper (Total : 100 points)</p>
                                <ol type='a'>
                                    <li>
                                        <p>Subject Matter (Maximum: 45 points)</p>
                                    </li>
                                    <li>
                                        <p>Delivery (Maximum: 25 points)</p>
                                    </li>
                                    <li>
                                        <p>Clarity of Communication (Maximum: 30 points)</p>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <p>Poster (Total : 25 points)</p>
                                <ol type='a'>
                                    <li>
                                        <p>Content (Maximum: 10 points)</p>
                                    </li>
                                    <li>
                                        <p>Display (Maximum: 5 points)</p>
                                    </li>
                                    <li>
                                        <p>Data Visualization (Maximum: 5 points)</p>
                                    </li>
                                    <li>
                                        <p>Social Media and Exhibition (Maximum: 5 points)</p>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'TOURNAMENT OFFICIALS',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>Judges</p>
                                <p>There will be 3 (three) judges present. All judge decision concerning compliance to the rules and awarding of points will be absolute</p>
                            </li>
                            <li>
                                <p>Moderator</p>
                                <p>The moderator will guide the entire competition</p>
                            </li>
                            <li>
                                <p>Timekeeper</p>
                                <p>The timekeeper will enforce and supervise time limits </p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'EQUIPMENT REQUIREMENT',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>Participants must bring at least 3 hard copies of their full paper and will be submitted in technical meeting</p>
                            </li>
                            <li>
                                <p>Participants must bring at least 1 hard copy of their poster and will be submitted in technical meeting</p>
                            </li>
                            <li>
                                <p>Hard copies of full paper should be in A4 size and for poster in A0 size. For each hard copy of full paper, put it together with stapler three times on the left side</p>
                            </li>
                            <li>
                                <p>The committee will provide some tools that can be used by the participants :</p>
                                <p>(a) Pointer, (b) Microphone, (c) Projector, (d) Laptop and (e) Presentation file</p>
                            </li>
                            <li>
                                <p>Any request for external assistance during the presentation will not be allowed</p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'TIME',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>Tardiness of more than 5 minutes from the scheduled time may result in a penalty, unless the lateness is the fault of the tournament officials</p>
                            </li>
                            <li>
                                <p>The clock used by the tournament officials is the official time and it is absolute</p>
                            </li>
                            <li>
                                <p>Each participant should be at the presentation hall at least 20 minutes before the presentation starts, any reason for delay is not accepted</p>
                            </li>
                            <li>
                                <p>The presentation time will start when the participants is ready to start</p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'AWARDS',
        'content':  <div>
                        <p>1st Winner &ensp; &ensp; &nbsp; &nbsp;: IDR 3,000,000 + certificate</p>
                        <p>2nd Winner &ensp; &ensp;: IDR 2,000.000 + certificate</p>
                        <p>3rd Winner &ensp; &nbsp;: IDR 1,000,000 + certificate</p>
                        <p>Favorite Winner (Best Poster) : IDR 500,000 + certificate</p>
                    </div>
    },
    {
        'title': 'REGISTRATION AND SUBMISSION',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>Registration will be conducted in IPFEST 2019 website registration form at <a href='http://ipfest2019.com'>www.ipfest2019.com</a> at <strong>November 1<sup>st</sup> – 25<sup>th</sup>, 2018</strong></p>
                            </li>
                            <li>
                                <p>Please submit your abstract to IPFEST 2019 official email : <a href='https://ipfest2019@gmail.com'>ipfest2019@gmail.com</a> (cc : <a href='https://geraldadam2998@gmail.com'>geraldadam2998@gmail.com</a>) with subject : </p>
                                <p>“PAPER_IPFEST 2019_ABSTRACT_(University Name)_(Team Leader Name)”</p>
                                <p className='text-center'><strong>Example : </strong></p>
                                <p>PAPER_IPFEST 2019_ABSTRACT_Institut Teknologi Bandung_Gerald Adam</p>
                            </li>
                            <li>
                                <p>The abstract must be submitted maximum <strong>December 10<sup>th</sup>, 2018 at 23:59 (GMT+7)</strong></p>
                            </li>
                            <li>
                                <p>Please submit all the registration requirements to IPFEST 2019 official email  <a href='https://ipfest2019@gmail.com'>ipfest2019@gmail.com</a> maximum <strong>November 25<sup>th</sup>, 2018</strong></p>
                            </li>
                            <li>
                                <p>Abstract selection announcement will be on <strong>January 17<sup>th</sup>, 2019</strong> and will be shared at IPFEST 2019 official account and sent directly to your email</p>
                            </li>
                            <li>
                                <p>If your team have passed the abstract selection phase, payment have to be paid maximum <strong>January 31<sup>th</sup>, 2019</strong>. Submit your transfer slip to the link that will be given directly via email after registration</p>
                            </li>
                            <li>
                                <p>Abstracts that have been passed the selection phase need to be developed in a full paper, poster and presentation file, and be submitted maximum February 8th, 2019 to IPFEST 2019 email : <a href='https://ipfest2019@gmail.com'>ipfest2019@gmail.com</a> (cc : <a href='https://geraldadam2998@gmail.com'>geraldadam2998@gmail.com</a>) with subject :</p>
                                <p>“PAPER_IPFEST 2019_FINAL PAPER_(University Name)_(Team Leader Name)”</p>
                                <p className='text-center'><strong>Example : </strong></p>
                                <p>PAPER_IPFEST 2019_FINAL PAPER_Institut Teknologi Bandung_Gerald Adam</p>
                                <p>For poster, submit it to this link : bit.ly/PosterIPFEST2019 with name :</p>
                                <p>“POSTER_(University Name)_(Team Leader Name)”</p>
                                <p className='text-center'><strong>Example : </strong></p>
                                <p>POSTER_Institut Teknologi Bandung_Gerald</p>
                            </li>
                            <li>
                                <p>After submitting each of your file (abstract, paper and poster), please verify immediately to our contact person</p>
                            </li>
                            <li>
                                <p>Ten (10) participants with the best abstracts will pass abstract selection and will be invited to present their paper in Main Event of IPFEST 2019 Paper and Poster Competition at Institut Teknologi Bandung</p>
                            </li>
                            <li>
                                <p>If there any question, please ask via e-mail to our official email : <a href='https://ipfest2019@gmail.com'>ipfest2019@gmail.com</a> </p>
                            </li>
                            <li>
                                <p><a href="https://drive.google.com/uc?export=download&id=1RmL2sKEwmXl6YAI285yMyc6Da_Hun6Rp">Download</a> Anti Plagirsm Statement Lefter</p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'KEY DATES',
        'content':  <div>
                        <p>Open Registration &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: Novermber 1<sup>st</sup>, 2018</p>
                        <p>Abstract Submission Deadline &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: December 10<sup>th</sup>, 2018</p>
                        <p>Abstract Selection Announcement &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: January 17<sup>th</sup>, 2019</p>
                        <p>Full Paper, Poster and Presentation File &ensp; &ensp;: February 8<sup>th</sup>, 2019</p>
                        <p>Submission Deadline</p>
                        <p>Competition day &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: Februay 15<sup>th</sup>, 2019</p>
                    </div>
    },
    {
        'title': 'CONTACT PERSON',
        'content':  <div>
                        <p>Gerald Adam Alwyn Syah</p>
                        <p>Manager of IPFEST 2019 Paper and Poster Competition</p>
                        <p>+62 821 9094 3430</p>
                        <p>geraldadam2998@gmail.com</p>
                    </div>
    },
]

export default class PaperPosterCompetition extends Component {
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
                            src={require('../../../images/Competition/PaperPoster/paper-poster.png')}
                        />
                    </div>
                    <Row className='competition-detail-content'>
                        <Col sm={3}>
                            <img 
                                src={require('../../../images/Competition/Paper and Poster Comp.png')}
                            />
                        </Col>
                        <Col sm={9} className='competition-detail-content-explain'>
                            <p>
                                In this event, students are encouraged to push the limits of their knowledge and creativity to find innovations or even discoveries in the oil and gas industries. These innovation and discoveries are to be expressed into the form of a paper and poster by the students. The papers are to be presented by the students to the respectful judges.
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
                                <strong>Abstract Format</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[5]})}>
                                <strong>Paper Format</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[6]})}>
                                <strong>Poster and Presentation Format</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[7]})}>
                                <strong>Judging Criteria</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[8]})}>
                                <strong>Tournament Officials</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[9]})}>
                                <strong>Equipment Requirement</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[10]})}>
                                <strong>Time</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[11]})}>
                                <strong>Awards</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[12]})}>
                                <strong>Registration and Submission</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[13]})}>
                                <strong>Key Dates</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[14]})}>
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