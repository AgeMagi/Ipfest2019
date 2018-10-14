import React, { Component } from 'react';

import {
    Row,
    Col,
    Container,
 } from 'reactstrap';

import './Smart.css';

const registration = [
    {
        'title': 'THEME',
        'content': <p>Challenging Your Knowledge to Deal with Future Energy Demand</p>
    },
    {
        'title': 'VENUE & DATE',
        'content':  <div>
                        <p>Venue &ensp; &ensp;: Auditorium of Energy Building, Institute of Technology Bandung, Bandung, Indonesia</p>
                        <p>Date &ensp; &ensp; &nbsp; &nbsp;: Friday, February 15<sup>th</sup>, 2019</p>
                        <p>Time &ensp; &ensp; &nbsp; &nbsp;: 08:00 AM - end (GMT+7)</p>
                    </div>
    },
    {
        'title': 'GENERAL RULES',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>The competition is open to any student who has experienced learning science petroleum.</p>
                        </li>
                        <li>
                            <p>All participants must be undergraduate students of their university.</p>
                        </li>
                        <li>
                            <p>Each university can send its representative maximum of 2 teams (one main learn and one beackup team) with each team consist of 3 players</p>
                        </li>
                        <li>
                            <p>Total participants of this competition is 18 teams. Any changes will be announce via official account</p>
                        </li>
                        <li>
                            <p>The first eighteen (18) teams that have completed the payment process will be invited to IPFEST 2019 Smart Competition. If the participants exceed 18 teams, the priority will be the main team from each university. They will be notified through IPFEST 2019 website and email.</p>
                        </li>
                        <li>
                            <p>Each team must send minimal 1 person(s) to attend technical meeting that will be held H-1 before the competition day.</p>
                        </li>
                    </ol>
    },
    {
        'title': 'COMPETITION FORMAT',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>IPFEST 2019 Smart Competition will be conducted in two systems : upper and lower bracket, with each bracket has 3 stages : Elimination, Semifinal, and Final.</p>
                            </li>
                            <li>
                                <p>For every stage in upper bracket except final stage, every losing team has a second chance to compete again in lower bracket. If the teams lose in elimination stage in upper bracket they will proceed to the elimination stage in lower bracket. If the teams lose in semifinal stage in upper bracket they will proceed to the semifinal stage in lower bracket. (The teams lose will proceed to lower bracket accordingly from upper bracket position)</p>
                            </li>
                            <li>
                                <p>At elimination stage either in lower or upper bracket, three (3) or two (2) teams will play in one game that has 10 questions. Every game will have one winner to go to the Semi Final stage. </p>
                            </li>
                            <li>
                                <p>In semifinal stage either in lower or upper bracket, three (3) or two (2) teams will play in one game that has 15 questions. Every game will have one winner to go to the Final stage.</p>
                            </li>
                            <li>
                                <p>In lower bracket final stage, three (3) teams will play in one game that has 25 questions. The winner of the game will go to the upper bracket final stage.</p>
                            </li>
                            <li>
                                <p>The final stage in upper bracket consist of three (3) teams. Two (2) teams from upper bracket that have passed the Semifinal Stage in upper bracket and the winner of lower bracket.</p>
                            </li>
                            <li>
                                <p>The final stage consist of 2 rounds. The first round, 3 teams will play A-Z Quiz game with the limited time of 30 minutes. The second round will be one game that has 25 questions. The team with highest accumulated point from this 2 rounds will win the Final Stage and will be the winner of IPFEST 2019 Smart Competition.</p>
                            </li>
                            <li>
                                <p>Participants are allowed to have discussion with each member of the team.</p>
                            </li>
                            <li>
                                <p>Judges and moderator decisions are unanimous.</p>
                            </li>
                            <li>
                                <p>Any rule changes for Smart Competition IPFEST 2019 will be notified directly through email.</p>
                            </li>
                            <li>
                                <p>Each teams will be seeded at the technical meeting by random drawing.</p>
                            </li>
                            <li>
                                <p>The competition bracket will be inform when technical meeting.</p>
                                <p>The brackets are shown below</p>
                                <br />
                                <h6><strong>UPPER BRACKET</strong></h6>
                                <img 
                                    src={require('../../../images/Competition/SmartCompetition/upper-bracket.png')}
                                />
                                <br />
                                <h6><strong>LOWER BRACKET</strong></h6>
                                <div className='text-center'>
                                    <img 
                                        src={require('../../../images/Competition/SmartCompetition/lower-bracket.png')}
                                    />
                                </div>
                            </li>
                            <p>
                                <img 
                                    src={require('../../../images/Competition/SmartCompetition/yellow-bracket.png')}
                                /> : Quarterfinalist from upper bracket who proceed to lower bracket (will be placed randomly)
                            </p>
                            <p>
                                <img 
                                    src={require('../../../images/Competition/SmartCompetition/blue-bracket.png')}
                                /> : Semifinalist from upper bracket who proceed to lower bracket (will be placed randomly)
                            </p>
                        </ol>
                    </div>
                    
    },
    {
        'title': 'TOURNAMENT OFFICIAL',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>Judges</p>
                            <p>Each game will have judges. All judges decision concerning compliance to the rules and awarding of points will be final.</p>
                        </li>
                        <li>
                            <p>Moderator/host</p>
                            <p>Each game will have two moderators. The moderators will read the question, consult judges as needed to determine the correctness of answers, award and deduct points, and otherwise enforce the rules of competition. The judges have right to decide whether moderator can repeat the question or not.</p>
                        </li>
                        <li>
                            <p>Scorekeeper</p>
                            <p>Each game will have at least one scorekeeper who will keep the official score.</p>
                        </li>
                        <li>
                            <p>Timekeeper</p>
                            <p>Each game will have one timekeeper. The timekeeper will enforce time limies and spervise the game clock.</p>
                        </li>
                    </ol>
    },
    {
        'title': 'EQUIPMENT REQUIREMENT',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>All games will be played such that each participant in the current game has a "buzzer" – a electronic device that determines which participant buzzes in to answer a question first. Each participant is responsible for monitoring whether his or her own buzzer is operating properly throughout the game. If there is any buzzer malfunctions, the moderator will abort the current question and read the next question.</p>
                        </li>
                        <li>
                            <p>Pen, sheets of paper and calculator are provided by the committee during the competition.</p>
                        </li>
                        <li>
                            <p>Textbook, cheat sheet, stationary, gadgets, and any electronic device (include calculator) are PROHIBITED during the competitions.</p>
                        </li>
                    </ol>
    },
    {
        'title': 'TIME',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>After the moderator finish reading a question, each team has 5 seconds to answer a toss-up question, 15 seconds to answer a bonus question and 20 seconds for calculation question.</p>
                        </li>
                        <li>
                            <p>The clock used by the game officials is the official time and is not contestable.</p>
                        </li>
                        <li>
                            <p>If possible, there will be a break up to 5 minutes between every round to set up the next round</p>
                        </li>
                        <li>
                            <p>Tardiness of more than 5 minutes from the scheduled match time may result in a forfeit, unless the lateness is the fault of the tournament, or the tournament officials are satisfied with other good cause.</p>
                        </li>
                    </ol>
    },

    {
        'title': 'QUESTION',
        'content':  <div>
                        <p>Question’s material consist about petroleum (reservoir, production, drilling) petroleum geology, geophysics, petrochemical, geothermal. Questions will consist of history, trivia, current affairs, technical questions, calculations, and problem solving related to petroleum industry.</p>
                        <p>There are 3 types of question : Toss-up question, Bonus question, and Board Game question (only for Upper Bracket Final stage)</p>
                        <ol className='list-notab'>
                            <li>
                                <p>Toss-Up Questions</p>
                                <ol type='a'>
                                    <li>
                                        <p>A player may "buzz in" (using his/her buzzer) Io answer a loss up questoin at any point after the moderator has begun reading the question.</p>
                                    </li>
                                    <li>
                                        <p>Once a player has buzzed in, a tournament official will verbally recognize the player by team name and contestant name. If a player repeatedly responds before being recognized, tournament officials reserve the right to invalidate that player's response, turning the question over to the other team, if applicable.</p>
                                    </li>
                                    <li>
                                        <p>If a player buzzez in before the moderator has finished reading, the moderator will stop at that point. Player have 5 seconds to give their final asnwer. if the answer given incorrect, the moderator will continue and finish the question for the other team.</p>
                                    </li>
                                    <li>
                                        <p>Players have 5 seonds to buzz in after the moderator has finished reading the qestion.</p>
                                    </li>
                                    <li>
                                        <p>An answer to a toss-up question must begin within 5 seconds after the player has been recognize. An answer started after the timekeeper has said "time" will be treated as no answer and the other team will have opportunity to buzz in.</p>
                                    </li>
                                    <li>
                                        <p>An incorrect answer to a toss-up question may be seized by other team after it is started as incorrect answer by the moderator or judges. The other team has 5 seconds to buzz for answering the question.</p>
                                    </li>
                                    <li>
                                        <p>For calculation question, players have 20 seconds to buzz in after the moderator has finished reading the question. If a team answers incorrectly, the time will continue for the remaining seconds.</p>
                                    </li>
                                    <li>
                                        <p>Discussion between player in a team before answering a question is allowed. The time will keep going, as the discussion progresses.</p>
                                    </li>
                                    <li>
                                        <p>Decisions as to whether players have exceeded the allocated time to buzz in or to answer may be rendered only by the tournament officials and are not contestable.</p>
                                    </li>
                                    <li>
                                        <p>For every correct answer, the team will be given 10 points.</p>
                                    </li>
                                    <li>
                                        <p>For each wrong or incomplete answer, the team points will be reduced by 5 points.</p>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <p>Bonus Question</p>
                                <ol type='a'>
                                    <li>
                                        <p>Team will get a bonus question if the answer is right in toss-up question. Other teams are not allowed to answer the question.</p>    
                                    </li>
                                    <li>
                                        <p>A team may begin its answer before the moderator is finished reading all of a bonus question. In such cass, the moderator stops reading when the team begin it's answer. If the bonus question contains another part, and the first part was answered correctly, the moderator then reads the next part of the question.</p>
                                    </li>
                                    <li>
                                        <p>Discussion between player in a team before answering a question is allowed. The time will keep going, as the discussion progresses.</p>
                                    </li>
                                    <li>
                                        <p>For correct answer of bonus question, the learn will be given up to 10 points.</p>
                                    </li>
                                    <li>
                                        <p>For wrong answer or incomplete answer of bonus question will not affect the points.</p>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <p>Board Game question (Upper Bracket Final stage only)</p>
                                <ol type='a'>
                                    <li>
                                        <p>There will be three (3) teams that play the board game</p>
                                    </li>
                                    <li>
                                        <p>The board game size is 5x5 (there are 25 squares containing the letter from A to Z)</p>
                                    </li>
                                    <li>
                                        <p>The game format is in the form of the race to get the most squares with the limited time 30 minutes. Tournament officials will stop the game when the game exceeds the limit.</p>
                                    </li>
                                    <li>
                                        <p>The letter in each square are the initials of the answer about the question in the square (for example : if you chose the letter B, so the answer can be Bit, Breaker, Buoyancy or other word starting from letter B, based on the question)</p>
                                    </li>
                                    <li>
                                        <p>Each square will have 10 points and have 1 question only</p>
                                    </li>
                                    <li>
                                        <p>Each team will have its own color to mark its square.</p>
                                    </li>
                                    <li>
                                        <p>The game qill start from letter A and zero points for each team.</p>
                                    </li>
                                    <li>
                                        <p>The mechanism to answer the question is the same as loss-up question</p>
                                    </li>
                                    <li>
                                        <p>The team who can answer the question correctly will be given 10 points and will mark the</p>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'CORRECT ANSWER',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>The moderator will accept only the first answer given by a player.</p>
                            </li>
                            <li>
                                <p>Common acronyms and abbreviations are often acceptable (e.g., chemical symbols, state postal abbreviations, organizational acronyms), unless they appear in the question, in which case the moderator may prompt the player to expand the acronym or abbreviation.</p>
                            </li>
                            <li>
                                <p>If a question requires multiple answers, a player may provide the responses in any order, without a pause of more than 5 seconds between responses. If the question is not a bonus question, answering only 50% or more of the full answer (i.e. 2 out of 3 answer available) will be considering wrong.</p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'ETHICS AND CONDUCT',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>There will be no signaling between team members and the audience. Restricted signaling includes verbal signals, written signals, hand motions, head motions, eye contact, and anything else construed as signaling by the tournament officials. Violation of the signaling rules will result in forfeiture of opportunity to answer the toss-up. Repeated violations can result in ejection and/or disqualification.</p>
                            </li>
                            <li>
                                <p>Any intimidation, physical contact, and blasphemy from participant to other participants and tournament official will result to point deduction up to disqualification.</p>
                            </li>
                            <li>
                                <p>Any act of cheating will result to disqualification</p>
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
                                <p>Results of all the competition will be announced immediately. </p>
                            </li>
                            <li>
                                <p>If there's a similarity score in each round, tournament officials will give one additional question (or more-if there's no team can answer) to be answered. The fastest team who rang the buzzer and answers correctly, will win the game. But, if the fastest team answer incorrectly, the other team will win the game.</p>
                            </li>
                            <li>
                                <p>In Final stage, the points from quiz game and board game will be accumulated directly to determine the winner.</p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'AWARDS',
        'content':  <div>
                        <p>The Winners of IPFEST 2019 Smart Competition will be awarded moey and a certificate:</p>
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
                                <p>Delegates official announcement will be on <sup>January 17<sup>th</sup>, 2019</sup> and will be shared at IPFEST 2019 official account and sent directly to your email</p>
                            </li>
                            <li>
                                <p>Only the first eighteen (18) teams which have completed the registration and payment process will be invited to Main Event of IPFEST 2019 Smart Competition at <strong>February 15<sup>th</sup>, 2019</strong>.</p>
                            </li>
                            <li>
                                <p>Please submit all the registration requirements to our official email <a href='https://ipfest2019@gmail.com'>ipfest2019@gmail.com</a> before <strong>November 30<sup>th</sup>, 2018 (1<sup>st</sup> batch)</strong> and <strong>January 15t<sup>th</sup>,  2019 (2<sup>nd</sup> batch)</strong>.</p>
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
                        <p>Official Delegates Announcement &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: January 17<sup>th</sup>, 2019</p>
                        <p>Competition Day &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: February 15<sup>th</sup>, 2019</p>
                    </div>
    },
    {
        'title': 'CONTACT PERSON',
        'content':  <div>
                        <p>Gerry Adam Alwyn Syah</p>
                        <p>Manager of IPFEST 2019 Smart Competition</p>
                        <p>+62-821-9094-3490</p>
                        <p>asadam.gerry@gmail.com</p>
                    </div>
    },
]

export default class SmartCompetition extends Component {
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
                            src={require('../../../images/Competition/SmartCompetition/smart-competition.png')}
                        />
                    </div>
                    <Row className='competition-detail-content'>
                        <Col sm={3}>
                            <img 
                                src={require('../../../images/Competition/Smart.png')}
                            />
                        </Col>
                        <Col sm={9} className='competition-detail-content-explain'>
                            <p>
                                IPFEST 2019 Smart Competition will test participant’s knowledge about energy, oil & gas industry and also engineering problems by answering correctly the questions given in a limited time. There will be additional innovative games in the final to make the competition more exciting.
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
                                <strong>Equipment Requirement</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[6]})}>
                                <strong>Time</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[7]})}>
                                <strong>Question</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[8]})}>
                                <strong>Correct Answer</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[9]})}>
                                <strong>Ethics and Conduct</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[10]})}>
                                <strong>Result</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[11]})}>
                                <strong>Awards</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[12]})}>
                                <strong>Registration</strong>
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