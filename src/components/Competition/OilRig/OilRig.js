import React, { Component} from 'react';

import {
    Row,
    Col,
    Container,
 } from 'reactstrap';

import './OilRig.css';

const registration = [
    {
        'title': 'THEME',
        'content': <p>Improvising the Existing Knowledge and Application to Fulfill Future Energy Demand</p>
    },
    {
        'title': 'Topic',
        'content':  <div>
                         <p>As the production of crude oil and gas increases, crude reserves are decreasing and so is the production rate. Thus, inventions are made to meet the requirement of the demanding world. Inventions, either in the way of production or even the source of hydrocarbons, are made to adapt to the field condition which are pretty much challenging. We have to think innovatively and economically to build an offshore oil rig to adapt. In order to sustain the economical value of the operating oil rig, offshore oil rig must be able to cope with the hard condition such as high CO2, H2S content, and the depth of the sea.</p>
                         <p>Participants need to gather ideas to design the best semi-submersible oil rig design without neglecting economic issue for the well known Macondo Prospect (MC252)  Field in Gulf of Mexico that blew up and was documented in the <i>“Deepwater Horizon”</i> Film.</p>
                    </div>
                       
    },
    {
        'title': 'VENUE & DATE',
        'content':  <div>
                        <p>Venue &ensp; &ensp;: Center for Advanced Science, Institute of Technology Bandung, Indonesia</p>
                        <p>Date &ensp; &ensp; &nbsp; &nbsp;: Friday, February 15<sup>th</sup>, 2019</p>
                        <p>Time &ensp; &ensp; &nbsp; &nbsp;: 08:00 AM - end (GMT+7)</p>
                    </div>
    },
    {
        'title': 'GENERAL RULES',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>Only active undergraduate students of any university may join this competition.</p>
                        </li>
                        <li>
                            <p>Each university <strong>MAY</strong> send any number of teams for the blueprint submission. However, only 2 teams per university are <strong>ALLOWED</strong> to be chosen and continue the participation.</p>
                        </li>
                        <li>
                            <p>Each Team Consists of four (4) to five (5) people based on registration form</p>
                        </li>
                        <li>
                            <p>Every member of a team must be from the same university, but they are allowed from different department</p>
                        </li>
                        <li>
                            <p>Every member of a team only allowed to join a team.</p>
                        </li>
                        <li>
                            <p>This competition registration will be opened one batch only.</p>
                        </li>
                        <li>
                            <p>Each team <strong>MUST</strong> send blueprint of the Oil Rig Design. Later, 10 best blueprints will be announced to continue to the main event. The announcement will be broadcasted on the official website of IPFEST 2019 and by email from the official E-mail of IPFEST 2019.</p>
                        </li>
                        <li>
                            <p>Competition rules are subject to change. Any changes of rules, clarifications, or agenda will be announced to all participants via E-mail or at Technical Meeting one day before the event</p>
                        </li>
                        <li>
                            <p>Represented participant for each team must attend the technical meeting on <strong>February 14<sup>th</sup>, 2019</strong>, about the location will be informed later</p>
                        </li>
                        <li>
                            <p>All teams <strong>MUST</strong> present the rig model on the competition day to the judges</p>
                        </li>
                        <li>
                            <p>All teams must have hard copy when they present the rig model on the competition, and this presentation belong to open presentation</p>
                        </li>
                        <li>
                            <p>The judge’s decision is absolute and inviolable</p>
                        </li>
                        <li>
                            <p>The Oil Rig will be showcased on the Integrated Petroleum Convention and Exhibition</p>
                            <p>(IPCONVEX) on <strong>February 16<sup>th</sup>, 2019</strong></p>
                        </li>
                    </ol>
    },
    {
        'title': 'COMPETITION FORMAT',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>The blueprint should include brief explanation of the oil rig. The blueprint submitted should not include University’s name and attribute, only team members’ names are allowed. The blueprint’s name format will be ORDC_University’s Name_Team’s Name_Blueprint_Team Representative’s Name.</p>
                                <p className='text-center'><strong>Example :</strong></p>
                                <p>ORDC_ITB_Andromeda_Blueprint_Septianus Putra Antonius</p>
                                <p>The blueprint has to be submitted to IPFEST 2019’s official email which is <a href='https://ipfest2019@gmail.com'>ipfest2019@gmail.com</a> in PDF format.</p>
                            </li>
                            <li>
                                <p>The presentation and Q&A session will be conducted in English. The presentation’s name format will be ORDC_University’s Name_Team’s Name_Presentation_Team Representative’s Name.</p>
                                <p className='text-center'><strong>Example :</strong></p>
                                <p>ORDC_ITB_Andromeda_Blueprint_Septianus Putra Antonius</p>
                                <p>The presentation has to be submitted to IPFEST 2019’s official email which is <a href='https://ipfest2019@gmail.com'>ipfest2019@gmail.com</a> in PPTX format.</p>
                            </li>
                            <li>
                                <p>After submitting each of your file (blueprint and presentation), please verify immediately to our contact person</p>
                            </li>
                            <li>
                                <p>The rig model presented has to fulfill the requirement and must be the same with the blueprint that has been sent or there will be a 25% score deduction.</p>
                            </li>
                            <li>
                                <p>Each team is given 10 minutes to present their work and the further 15 minutes will be used as QnA session with the judges</p>
                            </li>
                            <li>
                                <p>There will be load test on the ground, buoyancy and heave test on water. Ballasting system is allowed to be used on the rig. An additional competition to get the favorite oil rig model based on voting will be held</p>
                            </li>
                        </ol>
                    </div>
                    
    },
    {
        'title': 'MODEL\'S CRITERIA',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>The rig is semi-submersible that must be floating on water</p>
                        </li>
                        <li>
                            <p>Participants must build the platform based on the criteria and constraints stated by the committee</p>
                        </li>
                        <li>
                            <p>Each team must build an oil rig model before the main event day based on an oil and gas platform technology</p>
                        </li>
                        <li>
                            <p>In the midpoint of the deck should be perforated by 0.8 cm diameter, in order to connect the rig to the measuring device of heave motion</p>
                        </li>
                        <li>
                            <p>The created and to be presented oil rig must be built by the respective team</p>
                        </li>
                        <li>
                            <p>Any indication of fraudulent behavior on the rig’s originality may lead to disqualification</p>
                        </li>
                        <li>
                            <p>Failure of complying with the committee’s rules may result in point deduction and disqualification</p>
                        </li>
                        <li>
                            <p>The budget of the rig making is Rp600,000</p>
                        </li>
                    </ol>
    },
    {
        'title': 'MODEL\'S SPECIFICATION',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>The materials to build the model are freed to the participants’ desire</p>
                        </li>
                        <li>
                            <p>The dimensional provisions of the model are as below:</p>
                            <ol type='a'>
                                <li>
                                    <p>Leg of the rig must be less than 25 cm</p>
                                </li>
                                <li>
                                    <p>Height of the rig must be less than 55 cm (without the legs)</p>
                                </li>
                                <li>
                                    <p>Length of the rig must be around 60 – 65 cm</p>
                                </li>
                                <li>
                                    <p>Width of the rig must be around 50 – 55 cm</p>
                                </li>
                                <li>
                                    <p>Maximum depth of the deck is 5 cm</p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>The rig has to be able to hold the load on the water without drowning (base touching water surface)</p>
                        </li>
                        <li>
                            <p>All of the equipment and features on the deck must be removable</p>
                        </li>
                        <li>
                            <p>The rig will not be allowed to participate in the load and buoyancy test if the size is not appropriate with the dimensional provisions</p>
                            <img 
                                width={'100%'}
                                src={require('../../../images/Competition/OilRig/menara.png')}
                            />
                        </li>
                    </ol>
    },
    {
        'title': 'JUDGING CRITERIAS',
        'content':  <div>
                        <p>The assessment will be based on the portion below :</p>
                        <ol className='list-notab'>
                            <li>
                                <p>Load Test (10%)</p>
                                <p>The rig will be loaded on the ground until the participants ask to stop. The weight of oil rig design will be measured. The smaller ratio of oil rig weight/load, higher score will be given.</p>
                            </li>
                            <li>
                                <p>Buoyancy Test (15%)</p>
                                <p>The rig will be loaded on water until the participants ask to stop or until the rig is started to drown. Buoyancy test will show us the feasibility of an oil rig design on water condition</p>
                            </li>
                            <li>
                                <p>Heave Test (10%)</p>
                                <p>A heave motion measurement device will be connected to the deck of mockups. The committees will measure the length up and down the mock-up which formed after giving wave motion. Only one person of the participating team who may participates in the heave test session.</p>
                            </li>
                            <li>
                                <p>Creativity and Build-Ability (25%)</p>
                                <p>The more efficient and logical innovation of the oil rig you made, higher score will be given</p>
                            </li>
                            <li>
                                <p>Detail of the model (20%)</p>
                                <p>The oil rig model should include any equipment used in real oil rig. More detail the model you made, higher score will be given</p>
                            </li>
                            <li>
                                <p>Presentation (20%)</p>
                                <p>How you sell your design in interesting way, content of the presentation, time management, systemic presentation, and ethic</p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'TOURNAMENT OFFICIALS',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>Judges (3 persons)</p>
                                <p>Judges will assess the participants’ efforts with points which will be used to count the final point based on the portion stated before</p>
                            </li>
                            <li>
                                <p>Helper</p>
                                <p>Helper is a committee member who will accompany the presenting team</p>
                            </li>
                            <li>
                                <p>Time Keeper</p>
                                <p>The time keeper will tell the participants about the time left for each team to participate in every tests</p>
                            </li>
                            <li>
                                <p>Operator</p>
                                <p>The operator will be the one who is responsible for the presentation media used in the competition</p>
                            </li>
                            <li>
                                <p>Moderator</p>
                                <p>Moderator is someone who moderates the whole process of judging by the judges during the presentation session</p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'EQUIPMENT REQUIREMENT',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>Oil rig model of each team</p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'TIME',
        'content':  <ol className='list-notab'>
                        <li>
                            <p>Tardiness of more than 5 minutes from the scheduled time may result in disqualification unless the lateness is caused by the officials or other cause which have satisfied the officials</p>
                        </li>
                        <li>
                            <p>The time used by officials are the official WIB time (GMT +7) and is not contestable</p>
                        </li>
                    </ol>
    },
    {
        'title': 'RESULT',
        'content':  <div>
                        <ol className='list-notab'>
                            <li>
                                <p>Officials’ decisions are absolute and final</p>
                            </li>
                            <li>
                                <p>The result of the competition will be announced on the Gala Dinner</p>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'AWARDS',
        'content':  <div>
                        <p>The winners of Oil Rig Design Competition will be awarded with fresh money and certificate:</p>
                        <p>1st Winner &ensp;&ensp;&ensp;&ensp; &nbsp; &nbsp; &nbsp;: IDR 5,000,000 + certificate</p>
                        <p>2nd Winner &ensp;&ensp;&ensp; &nbsp; &nbsp; &nbsp;: IDR 4,000.000 + certificate</p>
                        <p>3rd Winner &ensp;&ensp;&ensp; &nbsp; &nbsp; &nbsp; &nbsp;: IDR 3,000,000 + certificate</p>
                        <p>Favorite Winner &ensp; &nbsp;: IDR 500,000 + certificate</p>
                        <p><strong>Additional Notes &ensp;</strong>: The assessment for favorite oil rig model competition will be based on the direct voting for each oil rig model when it is being exhibited in the IPCONVEX 2019 at February 16th, 2019. If the votes’ number is still inadequate, there will be additional mechanism to assess the rig which is by using likes for instagram. The models will be posted on IPFEST 2019’s official instagram account at the comptition day and the likes from the post will be used to further assess the rig model.</p>
                    </div>
    },
    {
        'title': 'ASSESSMENT DETAIL CRITERIAS',
        'content':  <div>
                        <ol className='list-notab'> 
                            <li>
                                <p>Dimension and Weighing</p>
                                <ol type='a'>
                                    <li>
                                        <p>First of all, the dimensions of the model will be measured to ensure the dimensions are in accordance to the provisions. If the dimensions are not in accordance with the provisions, the team can not join the later tests which will make their test scores zero.</p>
                                    </li>
                                    <li>
                                        <p>The models with suitable dimensions will be weighed to determine the weight. There is no maximum weight for the model. The weight is measured with the condition of an empty deck therefore the deck must be portable. If the deck is not portable, the weighing is done with the deck on and there will be no compensation.</p>
                                    </li>
                                </ol>                                            
                            </li>
                            <li>
                                <p>Load Test</p>
                                <p>The test will be conducted on the ground. The mockups will be placed on the ground then the loads will be given on deck continuously. Loads will be discontinued when the mockups is collapsed. In this session, the assessment will be obtained from the weight ratio of the mockup with the maximum load that is able to be carried by the mock-up. The smaller value of the ratio will get the higher the value of the score for this session. The maximum score of the load test is 100.</p>
                            </li>
                            <li>
                                <p>Buoyancy Test</p>
                                <ol type='a'>
                                    <li>
                                        <p>The test will be conducted on the water of small pool.</p>
                                    </li>
                                    <li>
                                        <p>In the buoyancy test, the mechanism is similar with load test, which is only teams who are accordance to the dimensional provisions that can participate in buoyancy test. The mockups will be placed on the water then the loads will be given on deck continuously. Both the Buoyancy test and Load test, the committee will serve loads for the participants. Load test will stop if there are conditions such as the bottom of the deck touch the water surface, the deck is damaged, the mock-up is over tuned, and the mock-up sinks. In this session, the assessment will be obtained from the weight ratio of the mockup with the maximum load that is able to be carried by the mock-up. The smaller value of the ratio will get the higher the value of the score for this session. The maximum score of the buoyancy test is 100.</p>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <p>Heave Test</p>
                                <ol type='a'>
                                    <li>
                                        <p>Mockups will be connected to gauge heave motion which has been prepared by the committee, the gauge is connected to a deck that has been hollowed by participants.</p>
                                    </li>
                                    <li>
                                        <p>After mockups are connected, the committee will turn the wave on for 20 seconds.</p>
                                    </li>
                                    <li>
                                        <p>Heave motion measuring device will record the amount of up and down movement of mock-up caused by the waves and will be recorded on the paper</p>
                                    </li>
                                    <li>
                                        <p>After the wave maker is turned off, the committee will measure the length up and down the mock-up of the wave that has been recorded on paper. Representatives of the participants are able to watch and see the committee when making measurements. (1 decimal places)</p>
                                    </li>
                                    <li>
                                        <p>After 10 teams do the test of heave motion, there will be conducted Ranking of the test results and sorting heave motion is based on the smallest value of the distance up and down mock-up against the waves. The smallest distance value will get the biggest points</p>
                                    </li>
                                    <li>
                                        <p>Ballasting system is allowed in this test. However, the rig cannot be perforated to keep water inside, the stability will be coming from load (weight plates) which is used for the load test, attached to the rig. Black tape will be provided to attach the load.</p>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <p>Creativity and Build-ability</p>
                                <ol type='a'>
                                    <li>
                                        <p>Mockups will be scored based on creativity and aesthetics aspect of the scale model.</p>
                                    </li>
                                    <li>
                                        <p>Creativity and originality to build the scale model, implementing innovation feasibility aspect of features.</p>
                                    </li>
                                    <li>
                                        <p>The effectiveness and usefulness for all the features.</p>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <p>Detail of the model</p>
                                <ol type='a'>
                                    <li>
                                        <p>The judges will score based on the components that are placed on the model is compatible with those on the Offshore Drilling Rig.</p>
                                    </li>
                                    <li>
                                        <p>These components starting from : </p> 
                                        <ul> 
                                            <li>
                                                <p>Hoisting system</p>
                                            </li>
                                            <li>
                                                <p>Rotary system</p>
                                            </li>
                                            <li>
                                                <p>Circulating system</p>
                                            </li>
                                            <li>
                                                <p>Structure and Foundation</p>
                                            </li>
                                            <li>
                                                <p>Safety sytem</p>
                                            </li>
                                            <li>
                                                <p>Crane and Flare</p>
                                            </li>
                                            <li>
                                                <p>Living Quarter</p>
                                            </li>
                                            <li>
                                                <p>Power system</p>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p>The more complete and detail the model moreover if the components placement is right, then the score that will be given higher.</p>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <p>Presentation</p>
                                <ol type='a'>
                                    <li>
                                        <p>Media and quality of presentation</p>
                                    </li>
                                    <li>
                                        <p>Content of presentation</p>
                                        <ol>
                                            <li>
                                                <p>Quality and simplicity of the content</p>
                                            </li>
                                            <li>
                                                <p>    • Completeness of presentation ( name and type of platform, background, objective, capability, features and innovation )</p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <p>Verbal communication</p>
                                        <ol>
                                            <li>
                                                <p>Clear explanation</p>
                                            </li>
                                            <li>
                                                <p>Easy to understand and ability to answer all the questions</p>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </div>
    },
    {
        'title': 'KEY DATES',
        'content':  <div>
                        <p>Open Registration &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; : Novermber 1<sup>st</sup>, 2018 - November 25<sup>th</sup>, 2018</p>
                        <p>Blueprint Submission Deadline &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: December 24<sup>th</sup>, 2018 at 23:59 (GMT + 7)</p>
                        <p>Selection Phase Announcement &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &ensp; &ensp;: January 17<sup>th</sup>, 2019</p>
                        <p>Competition Day &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &ensp; : February 15<sup>th</sup>, 2019</p>
                    </div>
    },
    {
        'title': 'CONTACT PERSON',
        'content':  <div>
                        <p>Septianus Putra Antonius</p>
                        <p>Manager of IPFEST 2019 Oil Rig Design Competition</p>
                        <p>+62-896-2949-2208</p>
                        <p>septianusputraantonius@gmail.com</p>
                    </div>
    },
]

export default class OilRigCompetition extends Component {
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
                            src={require('../../../images/Competition/OilRig/oil-rig.png')}
                        />
                    </div>
                    <Row className='competition-detail-content'>
                        <Col sm={3}>
                            <img 
                                src={require('../../../images/Competition/ORDC.png')}
                            />
                        </Col>
                        <Col sm={9} className='competition-detail-content-explain'>
                            <p>
                            IPFEST 2019 Oil Rig Design Competition is a competition which combines the petroleum industry knowledge, engineering principal, and design concept to create a model of oil rigs. Participants hopefully can make a new innovative and creative design to create miniature of semi-submersible oil rig to achieve future energy demand satisfaction. Participants create a miniature of semi-submersible oil rig which similar to real semi-submersible oil rig by considering several fundamental factors, such as model effectiveness, stability and safety, and budget plan. 
                            </p>
                        </Col>
                    </Row>
                    <Row className='registration-rules'>
                        <Col  className='registration-title' sm='3'> 
                            <p onClick={() => this.setState({registrationContent: registration[0]})}>
                                <strong>Theme</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[1]})}>
                                <strong>Topic</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[2]})}>
                                <strong>Venue</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[3]})}>
                                <strong>General Rules</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[4]})}>
                                <strong>Competition Format</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[5]})}>
                                <strong>Model's Criteria</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[6]})}>
                                <strong>Model's Specification</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[7]})}>
                                <strong>Judging Criterias</strong>
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
                                <strong>Result</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[12]})}>
                                <strong>Awards</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[13]})}>
                                <strong>Assessment Detail Criterias</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[14]})}>
                                <strong>Key Dates</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[15]})}>
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