import React, {Component} from 'react';

import {
    Container,
    Row,
    Col,
    } from 'reactstrap';

import './Sponsor.css';

export default class Sponsor extends Component {
    render() {
        return(
            <Container>
                <div className='sponsor'>
                    <div className='title'>
                        <img 
                            src={require('../../images/Sponsor/Sponsors.png')}
                        />
                    </div>
                    <div className="sponsors">
                        <h1>GOLD</h1>
                        <img 
                            src={require('../../images/Sponsor/logo/piep.png')}
                        />
                        <p><strong>Pertamina Internasional EP (PIEP)</strong> didirikan berdasarkan kebutuhan untuk manajemen aset internasional yang berfokus pada pengelolaan aset luar negeri PT Pertamina (Persero). Untuk itu, dipandang perlu untuk mendirikan anak perusahaan dengan cakupan internasional sebagai pemegang aset di luar negeri yang kegiatannya dapat disesuaikan dengan karakteristik dari aset yang dimiliki.</p>
                        <p>Pada 18 November 2013, PIEP didirikan di Jakarta sebagai perusahaan yang menjalankan bisnis di bidang minyak, gas alam dan energi lainnya dengan area kerja internasional. Hingga kini, PIEP telah memiliki 11 (sebelas) wilayah kerja yang tersebar di 3 (tiga) region yaitu Afrika, Asia, dan Timur Tengah.</p>
                        <img 
                            src={require('../../images/Sponsor/logo/phi.png')}
                        />
                        <p><strong>PT Pertamina Hulu Indonesia atau "PHI"</strong> merupakan salah satu anak perusahaan Badan Usaha Milik Negara (BUMN), yaitu PT Pertamina (Persero).  Dalam kegiatannya, perusahaan BUMN sebagai pilar perekonomian nasional memainkan peran penting dalam meningkatkan daya saing Indonesia.</p>
                        <p>PHI yang didirikan sebagai Operation holding company untuk mengendalikan, mengelola aset dan mengelola kegiatan usaha hulu pertamina di dalam negeri untuk wilayah eks terminasi pengelolaan wilayah kerja Mahakam, wilayah kerja sanga Sanga dan wilayah kerja Kalimantan Timur.</p>
                        <p>Tahun 2017 dan 2018, selain merupakan tahun yang penuh tantangan, namun juga tahun untuk melakukan pembuktian.  Ditengah kondisi penguatan ekonomi nasional, PHI harus menunjukkan jati dirinya dengan memberikan kinerja yang baik. Yaitu pencapain produksi Minyak sebesar BOPD: 63.400 dan Gas sebesar MMSCFD: 968 di tahun 2018. Kinerja baik perusahaan selama ini merupakan anugrah yang harus disyukuri dan ditingkatkan, karena hanya perusahaan yang terbaik yang akan mampu mencetak pertumbuhan kiner-kinerja gemilang di tahun-tahun mendatang.</p>
                        <img 
                            src={require('../../images/Sponsor/logo/ophir.png')}
                        />
                        <img 
                            src={require('../../images/Sponsor/logo/phm.png')}
                        />
                        <h1>SILVER</h1>
                        <Row>
                            <Col sm={4}>
                                <img src={require('../../images/Sponsor/logo/purnomo yusgiantoro.png')} />
                            </Col>
                            <Col sm={8}>
                                <p>The Purnomo Yusgiantoro Center (PYC) is an independent, non-govermental think tank which was established as an initiative on June 2016. PYC’s headquarter is based in Jakarta and its main goal is to promote independent, unbiased, systematic, professional analysis and research on the field of energy and natural resources</p>
                                <p>The center aims to participate in a wide range of research spectrum and to provide policy solutions and/or recommendations inside the energy and natural resources sectors. The center emphasizes on reviewing and identifying current issues revolving the energy sector at local, national, and global level. PYC also plays the bridging role in connecting various entities in the energy and natural resources sector.</p>
                                <p>PYC always uphold independency, integrity, objectivity, and diversity as the core values of its work.</p>
                                <p></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <img src={require('../../images/Sponsor/logo/medcoenergi.png')} />
                            </Col>
                            <Col sm={8}>
                                <p>Medco E&P merupakan unit bisnis PT Medco Energi Internasional Tbk (MedcoEnergi) yang sejak tahun 1980 berkomitmen untuk menyediakan energi bagi masyarakat. Kami mengelola dan mengoperasikan seluruh kegiatan usaha eksplorasi dan produksi (E&P) minyak dan gas di Indonesia serta internasional di darat dan lepas pantai. Kegiatan eksplorasi, pengembangan dan produksi, dikelola secara langsung oleh PT Medco E&P bersama mitra strategis.</p>
                                <p>Medco E&P berkomitmen, mendukung strategi Pemerintah dalam memenuhi kebutuhan energi yang terus meningkat dengan melakukan eksplorasi, pengembangan dan produksi pada seluruh bloknya.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <img src={require('../../images/Sponsor/logo/premier oil.png')} />
                            </Col>
                            <Col sm={8}>
                                <p>Premier Oil is a leading independent exploration and production company with oil and gas interests in the North Sea, South East Asia, Pakistan the Falkland Islands and Latin America. Premier seeks to maintain the highest standards of corporate responsibility.</p>
                                <p>Indonesia continues to form a critical part of Premier’s portfolio. Today it accounts for around 20 per cent of the company’s production and around 15 per cent of the company’s global reserves. Premier continue to invest in the country to bring on-stream the next phase of its projects on Natuna Sea Block A and to actively pursue exploration with the Anoa Lama play for subsequent development phase</p>     
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <img src={require('../../images/Sponsor/logo/pertamina gas.png')} />
                            </Col>
                            <Col sm={8}>
                                <p>Pertamina Gas is a company who has focus in midstream sector and downstream of gas industry in Indonesia. This company was a subsidiary of PT Pertamina (Persero) which has a role in gas trading, gas transportation, gas process and gas distribution and other business who has related with natural gas and their inheritance products.</p>
                                <p>PT Pertamina Gas start to operate in February 23 2007. This is the starting point of an answer for UU No. 22 / 2001 and also to increase demand of gas commodity in Indonesia as an environmentally safe energy alternative to replace fuel oil. To increase of value added in gas market is also one of the objectives.</p>
                                <p>This effort will provide value-added to gas business. Pertamina’s competence and 30 years experiences in managing the gas business stimulated for establishment of a separate focus and professional company. Pertamina Gas relies on the existing resources, assets and business networks to develop business in line with Good Corporate Governance’s values.</p>
                                <p>PT Pertamina Gas has strong business support from its holding, PT Pertamina (Persero) and from the other affiliates. That collaboration generates strong synergy in the oil and gas business. Business of Pertamina Gas consist of:</p>
                                <ol>
                                    <li><p>Gas Transportation</p></li>
                                    <li><p>Gas Trading</p></li>
                                    <li><p>Gas Processing</p></li>
                                    <li><p>LNG Regasification</p></li>
                                    <li><p>Oil Transportation</p></li>
                                </ol>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col sm={4}>
                                <img 
                                    src={require('../../images/Sponsor/logo/pep.png')}
                                />
                            </Col>

                            <Col sm={4}>
                                <img 
                                    src={require('../../images/Sponsor/logo/pgn saka.png')}
                                />
                            </Col>

                            <Col sm={4}>
                                <img 
                                    src={require('../../images/Sponsor/logo/exxonmobil.png')}
                                />
                            </Col>

                            <Col sm={4}>
                                <img 
                                    src={require('../../images/Sponsor/logo/fastron.png')}
                                />
                            </Col>

                            <Col sm={4}>
                                <img 
                                    src={require('../../images/Sponsor/logo/skk migas.png')}
                                />
                            </Col>
                        </Row>
                        <h1>BRONZE</h1>
                        <Row className='justify-content-center'>
                            <Col sm={3}>
                                <img 
                                    src={require('../../images/Sponsor/logo/pep cepu.png')}
                                />
                            </Col>
                            <Col sm={3}>
                                <img 
                                    src={require('../../images/Sponsor/logo/sinerco.png')}
                                />
                            </Col>
                            <Col sm={3}>
                                <img 
                                    src={require('../../images/Sponsor/logo/digital energy asia.png')}
                                />
                            </Col>
                            <Col sm={3}>
                                <img 
                                    src={require('../../images/Sponsor/logo/badak lng.png')}
                                />
                            </Col>
                            <Col sm={3}>
                                <img 
                                    src={require('../../images/Sponsor/logo/copi.png')}
                                />
                            </Col>
                            <Col sm={3}>
                                <img 
                                    src={require('../../images/Sponsor/logo/bni.png')}
                                />
                            </Col>
                            <Col sm={3}>
                                <img 
                                    src={require('../../images/Sponsor/logo/tirta anugrah.png')}
                                />
                            </Col>

                        </Row>
                    </div>                
                    
                </div>
            </Container>
        )
    }
}