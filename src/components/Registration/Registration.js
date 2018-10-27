import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Registration.css'

import { Container,
    Row, 
    Col } from 'reactstrap';

const registration = [
    {
        'title': 'ELIGIBILITY',
        'content': <ol className='list-notab'>
                        <li>
                            <p> IPFEST 2019 Main Event is open to :</p>
                            <ol type='a'>
                                <li><p>Public, for Integrated Petroleum Convention and Exhibition (IPCONVEX)</p></li>
                                <li><p>Undergraduate students, dents, for Smart Competition, Paper and Poster Competition, Plan of Development Competition, Oil Rig Design Competition, Business Case Competition, Mud Innovation Competition and PetroDebate Competition</p></li>
                            </ol>
                        </li>
                        <li>
                            <p>All participants must submit the completed registration form and payment receipt before the deadline</p>
                        </li>
                        <li>
                            <p>Each individual can only participate in a single competition. They cannot be a member of two teams nor competition</p>
                        </li>
                        <li>
                            <p>All participant must meet the requirements for each competition</p>
                        </li>
                        <li>
                            <p>Every registered delegates of IPFEST 2019 will be provided access to Gala Dinner</p>
                        </li>
                    </ol>
    },
    {
        'title': 'COMMUNICATION',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>All comunications, presentations, verbal communication, and documents must be in English</p>
                        </li>
                        <li>
                            <p>Question about the rules and inquiries regarding the competition may be asked directly via IPFEST 2019 Official Account,</p>
                            <p>Email : <a href='https://ipfest2019@gmail.com'>ipfest2019@gmail.com</a></p>
                            <p>Line : <a href='https://@ipfest2019'>@ipfest2019</a></p>
                        </li>
                    </ol>
    },
    {
        'title': 'RULE CHANGE',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>Competition rules are subject to change anytime. Any changes in rles, clarifications and agenda will be announced at participants directyly to participants email.</p>
                        </li>
                        <li>
                            <p>Rule change of any competition will be informed maximum 7 days before events are held.</p>
                        </li>
                    </ol>
    },
    {
        'title': 'TRANSPORTATION AND ACCOMMODATION',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>Transportation and accomodation charge is already included in the registration fee</p>
                        </li>
                        <li>
                            <p>Transportation and accomodation (Hotel) will be provided only for registered participants that have been selected by commitees</p>
                        </li>
                        <li>
                            <p>Transportatoin and accomodation will be provided from February 13<sup>th</sup> and 14<sup>th</sup>, 2019 (For arrival) untul February 16<sup>th</sup> and February 17<sup>th</sup>, 2019 (For departure)</p>
                        </li>
                        <li>
                            <p>Transportation is only provided in Bandung (including picking up the delegates drom airport/train statioon/bus station/ etc). Arrival and departure itineraries are participants' own responsibilities</p>
                        </li>
                    </ol>
    },
    {
        'title': 'REGISTRATION MECHANISM',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>The registration is open through IPFEST 2019 website in 2 batches :</p>
                            <ol type='a'>
                                <li> 
                                    <p> Batch I : November 1<sup>st</sup>, 2018 - November 25<sup>th</sup>, 2018</p>
                                </li>
                                <li>
                                    <p>Batch II : December 9<sup>th</sup>, 2018 - January 10<sup>th</sup>, 2019</p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Except for Paper and Poster Competition, Oil Rig Design, Competition and Business Case Competition only be opened for the first batch</p>
                        </li>
                       <li>
                            <p>Registration fees are (Except for Business Case Competition*):</p>
                            <ol type='a'>
                                <li>
                                    Batch I
                                    <p>-Transportation and <a href='#'>Accomodation Provided</a> : </p>
                                    <ul className='no-bullet'>
                                        <li>
                                            <p>IDR 450,000 per person for domestic students</p>
                                        </li>
                                        <li>
                                            <p>USD 32 per person for international students</p>
                                        </li>
                                    </ul>
                                    <p>-Transportation only <a href='#'>(No accomodation provided)</a> : </p>
                                    <ul className='no-bullet'>
                                        <li>
                                            <p>IDR 350,000 per person for domestic students</p>
                                        </li>
                                        <li>
                                            <p>USD 24 per person for international students</p>
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                            <p>* Registration fees for Business Case Competition will be further explained at Business Case Competition rules</p>
                       </li>
                       <li>
                           <p>Alongside the registration form and abstract, you must submit a letter of statement of anti-plagiarism, signed on a stamp (stamp IDR 6000,-). The format can be downloaded on this website. For participants residing outside of Indonesia, the stamp may be replaced by a signature of participant’s lecturer in their university.</p>
                       </li>
                       <li>
                           <p>Official delegates announcement will be on January 17th, 2019 and announced via IPFEST 2019 website, official account and directly to the participants’ email.</p>
                        </li>
                        <li>
                            <p>For further inquiries, please address to <a href='https://ipfest2019@gmail.com'>ipfest2019@gmail.com</a>.</p>
                        </li>
                    </ol>
    },
    {
        'title': 'PAYMENT',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>Registration fees have to be paid before : </p>
                            <ol type='a'>
                                <li>
                                    <p> Batch I &ensp;  &nbsp; &nbsp;: November 30<sup>th</sup>, 2018</p>
                                </li>
                                <li>
                                    <p> Batch II &ensp;  &nbsp;: January 15<sup>th</sup>, 2019</p>
                                </li>
                                <li>
                                    <p>For Oil Rig Design Competition, Paper and Poster Competition and Business Case Competition (Final Round Fees) : January 31<sup>st</sup>, 2019.</p>
                                </li>
                            </ol>
                            <p>Payment have to be done <a href='#'>before the deadline</a> by transfering to : </p>
                            <p>Account Number &emsp;  &nbsp; &nbsp;: 0345073817</p>
                            <p>Back Name  &emsp; &emsp; &emsp;: BNI</p>
                            <p>Beneficiancy Name &nbsp; &nbsp; &nbsp;: Elizabet Benedikta Pratidina</p>
                        </li>
                        <li>
                            <p>Submit the payment receipt to the link that will be given during the registration process.</p>
                        </li>
                        <li>
                            <p>No refund after receiving confirmation e-mail as official delegates of IPFEST 2019.</p>
                        </li>
                        <li>
                            <p>Submit the payment receipt to the link that will be given during the registration process.</p>
                        </li>
                        <li>
                            <p>Payment have to be paid in FULL AMOUNT. Other method of payment (credit card, etc) will not be accepted.</p>
                        </li>
                    </ol>
    },
]
export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.changeRegistrationContent = this.changeRegistrationContent.bind(this);

        this.state = {
            registrationContent: registration[0],
        }
    }

    changeRegistrationContent(event) {
        console.log(event.target.dataKey)
    }

    confirmPayment() {
        console.log('HEHE');
        window.location.replace("http://localhost:3000/registration/confirmed-payment");
    }

    render() {
        return(
            <div>
                <Container>
                    <div className='title'>
                        <img 
                            src={require('../../images/Registration/4_Registration.png')}
                        />
                    </div>
                    <Row className='registration-rules'>
                        <Col  className='registration-title' sm='3'> 
                            <p onClick={() => this.setState({registrationContent: registration[0]})}>
                                <strong>Eligibility</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[1]})}>
                                <strong>Communication</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[2]})}>
                                <strong>Rule Change</strong>
                            </p>
                            <p>
                                <strong>Dress Code</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[3]})}>
                                <strong>Transportation and Accommodation</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[4]})}>
                                <strong>Registration Mechanism</strong>
                            </p>
                            <p>
                                <strong>Packages</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[5]})}>
                                <strong>Payment</strong>
                            </p>
                        </Col>
                        <Col className='registration-content' sm='9'> 
                            <h2> {this.state.registrationContent.title} </h2>
                            {this.state.registrationContent.content}
                        </Col>
                    </Row>
                    <Row className='justify-content-sm-center registration-button'>
                        <Col sm={4}>
                            <Link to='/registration-form'>
                                <div className='registration-button-red'>
                                    <h4>REGISTER NOW</h4>
                                </div>
                            </Link>    
                        </Col>
                        <Col sm={4} className='registration-button-blue'>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc7vEPtt-VApZs0qSrYdFSEblz6n_gO5IsSy6ugGktXBowYxw/viewform" target="__blank">
                                <div onClick={this.confirmPayment}> 
                                    <h4>CONFIRM YOUR PAYMENT</h4>
                                </div>
                            </a>                            
                        </Col>
                    </Row>
                </Container>
            </div>
        );  
    }
}