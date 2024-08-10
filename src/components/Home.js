import React, { useState } from 'react';
import '../resources/home.css';
import CountUp from 'react-countup';
import logo from '../resources/logo/FRTrockenbau.png';
import VisibilitySensor from "react-visibility-sensor";
import Navbar from './Navbar';
import ScrollToTopButton from './ScrollToTopButton';
import icon1 from '../resources/logo/icon1.png';
import icon2 from '../resources/logo/icon2.png';
// import icon8 from '../resources/logo/icon8.png'; 
function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <>
      <div className='global d-flex flex-column w-100 p-0 m-0'>
        {/* Kontaktna traka */}
        <div className='contact-bar w-100 gap-3 d-flex flex-row'>
          <i className="ri-phone-fill"></i>
          <p className='p-1 m-0'> +381 62 8934 765   +381 63 8 343512</p>
          <i className="ri-map-pin-line"></i>
          <p className='p-1 m-0'>Kej Mira 36310 Sjenica</p>
          <i className="ri-mail-line"></i>
          <p className='p-1 m-0'>sjenicaestrih@gmail.com</p>
        </div>

        {/* Navigaciona traka */}
        <Navbar />

        {/* Baner */}
        <div className='banner d-flex p-0 m-0'>
          <div className='banner-card d-flex flex-column'>
            <b><h3 className='p-0 m-2'>Da li imate projekat kojim možemo pomoći?</h3></b><br /><br />
            <div className='d-flex justify-content-center'>
              <p style={{width: "70%"}}>Iskoristite više od 6 godina profesionalnog iskustva firme Estrih Sjenica</p>
            </div>
            <br />
            <br />
            <div className='div-button d-flex w-100 p-0 m-0 justify-content-center'>
              <a href="#services"><button className='btn btn-border-1'><i className="ri-arrow-right-s-line"></i>Usluge</button></a>
            </div>
          </div>
        </div>

        {/* Sekcija */}
        <div className='section d-flex flex-column w-100 justify-content-center text-center'>
          {/* O nama */}
          <div className='section-card d-flex flex-column p-0 m-0'>
            <h1 style={{ color: "#645124" }}>Izrada betonskih kosuljica (Estrih) </h1><br /><br />
            <b><p style={{ fontSize: "16px", margin: "auto" }}>Vaš specijalista za sve vrste suve gradnje u Sjenici i okolini</p></b><br /><br /><br />
            <p>
              Dobrodošli na veb stranicu Estrih Sjenica - Vaš pouzdan partner za izradu betonskih košuljica u Sjenici i okolini.<br/> Više od 6 godina iskustva u izradi betonskih košuljica i mnogi zadovoljni klijenti svedoče o našem kvalitetu! Naš moto: "Sve na čvrstim temeljima" - Naše sveobuhvatne usluge obuhvataju postavljanje betonskih košuljica koje su osnova za svaki stabilan i dugotrajan pod, kao i dodatne radove koji osiguravaju dugovečnost vašeg objekta.<br/> Estrih Sjenica se zalaže za fer cene, brzu, čistu i pravovremenu realizaciju svih projekata.
            </p><br />
            <p>
              "Zadovoljstvo naših klijenata u Sjenici je naš prioritet!<br/><br/> Uvek uvažavamo vaše ideje i uključujemo ih u planiranje izrade betonskih košuljica - ali ćemo vas iskreno posavetovati na osnovu našeg dugogodišnjeg iskustva ako nešto nije optimalno. Nudimo vam fer i transparentnu cenovnu strukturu, kao i profesionalno i pravovremeno izvođenje radova u Sjenici i okolini. <br/><br/> Rado ćemo vam pokazati gde možete uštedeti i gde se investicije isplate. Mi smo specijalisti za izradu betonskih košuljica i sledeće dodatne usluge:
            </p>
          </div>

          {/* Fiksirana pozadina */}
          <div className='div-fixed d-flex w-100 p-0'>
            <div className='fixed-background w-100 m-0 p-0'>
              {/* CSS POZADINA */}
            </div>
          </div>

          {/* Usluge */}
          <div id="services" className='services-glob w-100 d-flex justify-content-center p-0 m-0'>
            <div className="services">
              <div className="container">
                <div className="heading">
                  <h1 style={{ color: "#645124" }}>Usluge</h1>
                </div>
                <div className="content">
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><img title="Radovi suve gradnje" style={{ width: "60px" }} src={icon1} alt="icon1" /></div>
                      <h3>Radovi suve gradnje</h3>
                      <p style={{ fontSize: "14px" }}>Dobro poznajemo građevinski materijal i savetujemo vas kompetentno i jednostavno o tome koji građevinski materijali za suvu gradnju su najpogodniji za vas i vaš objekat u Minhenu.</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon">
                        <img title="Industrijski podovi" style={{ width: "60px" }} src={icon2} alt="industrial floor icon" />
                      </div>
                      <h3>Izrada industrijskih podova</h3>
                      <p>
                        Specijalizovani smo za izradu industrijskih podova visokih performansi, koji su idealni za fabrike, skladišta i druge komercijalne objekte. Naše betonske košuljice pružaju čvrstinu i otpornost neophodnu za teške industrijske uslove. Koristimo napredne tehnike i materijale kako bismo osigurali dugotrajne i izdržljive podove koji mogu podneti intenzivnu upotrebu. Kontaktirajte nas i osigurajte pouzdanu osnovu za vaš industrijski objekat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brojač */}
        <div className='counter d-flex gap-3 p-2 justify-content-center'>
          <VisibilitySensor onChange={onVisibilityChange}>
            <div className='counter-global d-flex flex-column justify-content-center p-0 m-0'>
              {isVisible ? (
                <div className='w-100 justify-content-center gap-3 d-flex flex-row p-0 m-0'>
                  <div className='d-flex flex-column align-items-center m-2'>
                    <div className='count-font d-flex flex-row'>
                      <CountUp className='count-font' start={0} end={6} duration={3} delay={0} />+
                    </div>
                    <p>Godina iskustva</p>
                  </div>
                  <div className='d-flex flex-column align-items-center m-2'>
                    <div className='count-font d-flex flex-row'>
                      <CountUp className='count-font' start={30} end={52} duration={3} delay={0} />+
                    </div>
                    <p>Uspešni projekti</p>
                  </div>
                  <div className='d-flex flex-column align-items-center m-2'>
                    <div className='count-font d-flex flex-row'>
                      <CountUp className='count-font' start={0} end={2} duration={3} delay={0} />
                    </div>
                    <p>Administrativni radnici</p>
                  </div>
                </div>
              ) : (
                <span style={{ color: "white" }}>.</span>
              )}
            </div>
          </VisibilitySensor>
        </div>

        {/* Footer */}
        <footer className="footer-distributed">
          <div className="footer-left">
            <img style={{ width: "100px", margin: "0", padding: "0" }} src={logo} alt="Logo" />
            <p className="footer-company-name">FR Trockenbau &copy; 2023</p>
          </div>
          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker"></i>
              <p><span>Kei Mira 36310 Sjenica</span></p>
            </div>
            <div>
              <i className="fa fa-phone"></i>
              <p>+381 63 8343512</p>
            </div>
            <div>
              <i className="fa fa-envelope"></i>
              <p><a href="mailto:sjenicaestrih@gmail.com">sjenicaestrih@gmail.com</a></p>
            </div>
          </div>
          <div className="footer-right">
            <p className="footer-company-about">
              <span>O nama</span>
              Specijalizovani smo za suvu gradnju, industrijske podove, molerske radove i izolaciju. Obratite nam se za više informacija.
            </p>
            <div className="footer-icons">
              <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
              <a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a>
            </div>
          </div>
        </footer>
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default Home;
