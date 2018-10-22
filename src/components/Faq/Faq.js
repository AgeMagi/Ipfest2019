import React, { Component } from 'react';

import { 
    Container,
    } from 'reactstrap';

import './Faq.css';

export default class Faq extends Component {
    render() {
        return(
            <div className='faq-container'>
                <Container>
                    <h1 className='faq-theme'>
                        Delegate Relations FAQ
                    </h1>
                    <div className='faq-content'>
                        <h5>
                            <strong><i>Q: I would like to join IPFEST 2019, how do I register myself?</i></strong>
                        </h5>
                        <p className='answer'>
                            The only way to register yourself is through our website, ipfest2019.com/registration and by filling the registration form and uploading the required documents. After you submit your registration, you will receive your ID and payment guidelines through your email. After you complete your payment and upload your payment confirmation through bit.ly/IPFEST2019PaymentConfirmation, you will soon receive a registration confirmation through your email. 
                        </p>
                    </div>
                    <div className='faq-content'>
                        <h5>
                            <strong><i>Q: May I pay the registration fee separately?</i></strong> 
                        </h5>
                        <p className='answer'>
                            Please complete your payment jointly (as a group, with your team members), all at once, and in one receipt.
                        </p>
                    </div>
                    <div className='faq-content'>
                        <h5>
                            <strong><i>Q: I’m not Indonesian, how do I pay for my registration fee?</i></strong>
                        </h5>
                        <p className='answer'>
                            For international delegates, please refer to bit.ly/InternationalPaymentGuideIPFEST and follow the steps according through your nationality. If you encounter a problem during the payment, please contact us through delegaterelations.ipfest@gmail.com or by messaging our Delegate Relations Manager (Ivy) by whatsapp +6281394619995 or line ID: olivinia.
                        </p>
                    </div>
                    <div className='faq-content'>
                        <h5>
                            <strong><i>Q: I have completed my payment but I haven’t received any email regarding my registration confirmation. What should I do?</i></strong>
                        </h5>
                        <p className='answer'>
                            Please contact us through delegaterelations.ipfest@gmail.com or by messaging our Delegate Relations Manager (Ivy) through by +6281394619995 or line ID: olivinia.
                        </p>
                    </div>
                    <div className='faq-content'>
                        <h5>
                            <strong><i>Q: When and where will IPFEST 2019 be held? </i></strong>
                        </h5>
                        <p className='answer'>
                            IPFEST 2019 will be held in February 15-16th, 2019 in Institut Teknologi Bandung campus. You will be guided by our Liaison Officer throughout your stay in Bandung. 
                        </p>
                    </div>
                    <div className='faq-content'>
                        <h5>
                            <strong><i>Q: Where will I be staying at Bandung?</i></strong>
                        </h5>
                        <p className='answer'>
                            If you chose the package that includes accommodation and transportation, we will provide you a hotel to stay in Bandung.
                        </p>
                    </div>
                    <div className='faq-content'>
                        <h5>
                            <strong><i>Q: How do I go to ITB from my hotel? Will there be any transportation for me?</i></strong>
                        </h5>
                        <p className='answer'>
                            Transportation is only provided in Bandung (including picking up the delegates from airport/train station/bus station). Arrival and departure itineraries (train/plane tickets, etc) are participants’ own responsibilities. We will only provide transportation needed from hotel to IPFEST 2019’s venues.
                        </p>
                    </div>                    
                </Container>
            </div>
        )
    }
}