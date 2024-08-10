import React, { useState } from 'react';
import '../resources/home.css';
import CountUp from 'react-countup';
import logo from '../resources/logo/FRTrockenbau.png';
import VisibilitySensor from "react-visibility-sensor";
import Navbar from './Navbar';
import ScrollToTopButton from './ScrollToTopButton';
import { Link } from 'react-router-dom';
import icon1 from '../resources/logo/icon1.png';
import icon2 from '../resources/logo/icon2.png';
import icon3 from '../resources/logo/icon3.png';
import icon4 from '../resources/logo/icon4.png';
import icon5 from '../resources/logo/icon5.png';
import icon6 from '../resources/logo/icon6.png';
import icon7 from '../resources/logo/icon7.png';
import icon8 from '../resources/logo/icon8.png';

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
            {/* <Link to="/contact"><button className='btn btn-border-1'><i className="ri-arrow-right-s-line"></i>Kontakt</button></Link> */}
            <a  href="#services"><button className='btn btn-border-1'><i className="ri-arrow-right-s-line"></i>Usluge</button></a>
            </div>
          </div>
        </div>

        {/* Sekcija */}
        <div className='section d-flex flex-column w-100 justify-content-center text-center' >

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
          <div className='div-fixed d-flex w-100 p-0' >
            <div className='fixed-background w-100 m-0 p-0' >
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
  <div className="box">
  {/* <div className="inner">
    <div className="icon">
      <img title="Hidroizolacija podova" style={{ width: "60px" }} src={icon3} alt="waterproofing icon" />
    </div>
    <h3>Izolacija i hidroizolacija podova</h3>
   
  </div> */}
</div>

</div>

                  {/* <div className="box">
                    <div className="inner">
                      <div className="icon"><img title="Tavani" style={{ width: "60px" }} src={icon2} alt="icon2" /></div>
                      <h3>Tavani</h3>
                      <p>Naša građevinska firma iz Minhena nudi visokokvalitetne usluge za renoviranje i izgradnju tavana, koje vam omogućavaju maksimalno iskorišćenje prostora u vašem domu. Naš stručni tim će se pobrinuti da vaš tavan bude moderan, funkcionalan i udoban, prilagođen vašim individualnim potrebama. Kontaktirajte nas i saznajte kako možemo pretvoriti vaš tavan u prelep i koristan prostor.</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><img title="Malterisanje" style={{ width: "60px" }} src={icon3} alt="icon3" /></div>
                      <h3>Malterisanje</h3>
                      <p>Naša građevinska firma FR Trockenbau iz Minhena specijalizovana je za malterisanje. Nudimo profesionalne usluge u oblasti suve gradnje i u stanju smo da malterišemo sve vrste zidova u unutrašnjosti i spoljašnjosti objekata. Koristimo visokokvalitetne materijale i tehnologije kako bismo osigurali kvalitetan i precizan rad. Kontaktirajte nas za više informacija o našoj ponudi i fer cenama. Rado ćemo vam pomoći sa vašim sledećim građevinskim projektom u Minhenu i okolini.</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><img title="Oblaganje zidova" style={{ width: "60px" }} src={icon4} alt="icon4" /></div>
                      <h3>Oblaganje zidova</h3>
                      <p>Firma FR Trockenbau iz Minhena specijalizovana je za oblaganje zidova. Time se postiže dodatni sloj na spoljašnjem zidu objekta, kako bi se dobila estetski privlačna i čvrsta površina. Oblaganje različitim materijalima precizno i profesionalno izvode naši stručni radnici.</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><img title="Protivpožarna zaštita" style={{ width: "60px" }} src={icon5} alt="icon5" /></div>
                      <h3>Protivpožarna zaštita</h3>
                      <p>Mi vam pomažemo da vašu protivpožarnu zaštitu najbolje organizujete i sprovedete.</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><img title="Abakus plafoni" style={{ width: "60px" }} src={icon6} alt="icon6" /></div>
                      <h3>Abakus plafoni</h3>
                      <p>Abakus plafoni su naša specijalnost! Postavite upit, rado ćemo vas savetovati.</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><img title="Tektalan" style={{ width: "60px" }} src={icon7} alt="icon7" /></div>
                      <h3>Tektalan</h3>
                      <p>FR Trockenbau se bavi Tektalanom, negorivom troslojnom kompozitnom pločom od drvene vune sa jezgrom od visoko guste mineralne vune i obostranim oblaganjem drvenom vunom sa cementnim vezivom.</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><img title="Rušenje" style={{ width: "60px" }} src={icon8} alt="icon8" /></div>
                      <h3>Rušenje</h3>
                      <p>Građevinska firma FR Trockenbau bavi se rušenjem.</p>
                    </div>
                  </div> */}
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
                <div className='w-100 justify-content-center gap-3 d-flex flex-row p-0 m-0' >
                  <div className='d-flex flex-column align-items-center m-2' ><div className='count-font d-flex flex-row'><CountUp className='count-font' start={0} end={6} duration={3} delay={0} />+</div><p>Godina iskustva</p></div>
                  <div className='d-flex flex-column align-items-center m-2' ><div className='count-font d-flex flex-row'><CountUp className='count-font' start={30} end={52} duration={3} delay={0} />+</div><p>Uspešni projekti</p></div>
                  <div className='d-flex flex-column align-items-center m-2' ><div className='count-font d-flex flex-row'><CountUp className='count-font' start={0} end={2} duration={3} delay={0} /></div><p>Administrativni radnici</p></div>
                </div>
              ) : (
                <span style={{ color: "white" }} >.</span>
              )}
            </div>
          </VisibilitySensor>
        </div>

        {/* Footer */}
        <footer className="footer-distributed ">

          <div className="footer-left">
            <img style={{ width: "100px", margin: "0", padding: "0" }} title="FR-Trockenbau logo" src={logo} alt="Logo" />
          </div>

          <div className="footer-center">
            <div>
              <i className="ri-map-pin-line"></i>
              <p><span>Kej Mira</span> 36310 Sjenica, Srbija</p>
            </div>
            <div>
              <i className="ri-phone-line"></i>
              <a style={{ color: "black", textDecoration: "underline" }} href="tel:+49 017664415110">+381 62 8934 765  +381 63 8 343512</a>
            </div>
            <div>
              <i className="ri-mail-line"></i>
              <p><a style={{ color: "black", textDecoration: "underline" }} href="mailto:info@fr-trockenbau.de">sjenicaestrih@gmail.com</a></p>
            </div>
          </div>

          <div className="footer-right">
          <p className="footer-company-about">
  <span>O nama</span>
  Vaš stručnjak za izradu betonskih košuljica u Sjenici i okolini. Iskoristite više od 6 godina profesionalnog iskustva kod Estrih Sjenica. Naravno, rado ćemo vam dati fer ponudu. Sa apsolutnom posvećenošću kvalitetu i najvećom stručnosti, naš tim izvodi radove na izradi betonskih košuljica na visokom nivou i na čisto zadovoljavajući način. Estrih Sjenica - vaš pouzdan partner za stabilne temelje u Sjenici i okolini.
</p>

          </div>

        </footer>
      </div>

      {/* Dugme za povratak na vrh */}
      <ScrollToTopButton />
    </>
  )
}

export default Home
