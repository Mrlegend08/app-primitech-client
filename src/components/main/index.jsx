import React from 'react'
import { Link, useAsyncError } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import imgs and icons
import siteLogo from "../../assets/icons/site-logo.svg"
import arrowDown from "../../assets/icons/arrow_bottom.svg"
import arrowDownLang from "../../assets/icons/arrow-bottom-lang.svg"
import phone from "../../assets/icons/mobile.svg"
import web from "../../assets/icons/web.svg"
import crm from "../../assets/icons/crm.svg"
import bot from "../../assets/icons/bot.svg"
import portfolioImgOne from "../../assets/images/portfolio-img-1.jpg"
import portfolioImgTwo from "../../assets/images/portfolio-img-2.jpg"
import portfolioImgThree from "../../assets/images/portfolio-img-3.jpg"
import portfolioImgFour from "../../assets/images/portfolio-img-4.jpg"
import portfolioClickImg from "../../assets/images/portfolio-click-img.jpg"
import portfolioClickImgMini from "../../assets/images/portfolio-click-img-2.jpg"
import axon from "../../assets/images/axon.png"
import jetstar from "../../assets/images/jestar.png"
import expedia from "../../assets/images/expedia.png"
import qantas from "../../assets/images/qantas.png"
import litaliya from "../../assets/images/litai.png"
import componyImg from "../../assets/images/compony-logo.svg"
import callImg from "../../assets/icons/call-img.png"
import mobile from "../../assets/icons/phone.svg"
import user from "../../assets/icons/user.svg"

import './index.scss'
const Main = () => {

  const languages = ["EN", "RU", "UZ"]
  const [langIndex, setLangIndex] = React.useState(0)

  const handleClick = () => {
    const dropdown = document.querySelector('.site-header__end-lang-dropdown')
    dropdown.classList.toggle('display-block')
  }

  const handleDropdown = () => {
    const dropdown = document.querySelector('.site-header__nav-dropdown')
    dropdown.classList.toggle('display-block')
  }

  const openPortfolio = () => {
    const card = document.querySelector(".portfolio-section__card")
    const click = document.querySelector(".portfolio-section__click-block")
    card.classList.toggle("display-none")
    click.classList.toggle("display-flex")
  }

  const num = [1, 2, 3, 4, 5, 8, 4, 4, 4, 5,]
  const tests = num.map(() => {
    return (
      <SwiperSlide className='test-section__item'>
        <h3 className='test-section__item-title'>Compony name</h3>
        <p className='test-section__item-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <img
          className='test-section__item-img'
          src={componyImg}
          alt="Compony icon"
          width={61}
          height={61}
        />
      </SwiperSlide>
    )
  })

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="site-header__wrapper">
            <div className="site-header__start">
              <Link to="/" className="site-header__logo-link">
                <img
                  className="site-header__logo"
                  src={siteLogo}
                  alt="Primitech site logo"
                  width="57"
                  height="57" />
              </Link>
            </div>
            <nav className="site-header__nav">
              <ul className="site-header__nav-list">
                <li className="site-header__nav-item">
                  <Link className="site-header__nav-link" to="/">Home</Link>
                </li>
                <li className='site-header__nav-item' onClick={() => handleDropdown()}>
                  <a className="site-header__nav-link" href="#about">About</a>
                  <img
                    className='site-header__nav-link-img'
                    src={arrowDown}
                    alt="Arrow down" />
                  <ul className='site-header__nav-dropdown'>
                    <li className='site-header__nav-dropdown-item'>
                      <Link className='site-header__nav-dropdown-link' to="/clients">Clients</Link>
                    </li>
                    <li className='site-header__nav-dropdown-item'>
                      <Link className='site-header__nav-dropdown-link' to="/ourteam">Our team</Link>
                    </li>
                    <li className='site-header__nav-dropdown-item'>
                      <Link className='site-header__nav-dropdown-link' to="/testimonials">Testimonials</Link>
                    </li>
                  </ul>

                </li>
                <li className="site-header__nav-item">
                  <a className="site-header__nav-link" href='#services'>Service</a>
                </li>
                <li className='site-header__nav-item'>
                  <Link className='site-header__nav-link' to="/portfolio">Portfolio</Link>
                </li>
                <li className='site-header__nav-item'>
                  <a className='site-header__nav-link' href="#achi">Achievements</a>
                </li>
              </ul>
            </nav>

            <div className="site-header__end">
              <div className="site-header__end-lang" onClick={() => handleClick()}>
                <ul className='site-header__end-list'>
                  <li className='site-header__end-item'>
                    {languages[langIndex]}
                  </li>
                </ul>
                <ul className='site-header__end-lang-dropdown'>
                  {
                    languages.map((lang, index) => (
                      <li
                        key={index}
                        className='site-header__end-lang-item'
                        onClick={() => setLangIndex(index)}>
                        {lang}
                      </li>
                    ))
                  }
                </ul>
                <img
                  className='site-header__end-lang-img'
                  src={arrowDownLang}
                  alt="Arrow down"
                  width={12}
                  height={6} />
              </div>
              <a className='site-header__end-num' href="tel: 0000000000">+(000) 000 00 00</a>
            </div>
          </div>
        </div>
      </header>

      <main className="site-main">
        <section className="hero-section">
          <div className="container">
            <div className="hero-section__wrapper">
              <h1 className='hero-section__title'>Raqamli muammolarga zamonaviy yechimlar</h1>
              <p className='hero-section__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
              <div className="hero-section__button-flex">
                <Link className='hero-section__connection-btn' to="/connection">
                  Bog’lanish
                </Link>
                <Link className='hero-section__more-btn' to="/more">
                  Buyurtma berish
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className='services-section'>
          <div className="container">
            <div className="services-section__wrapper">
              <h2 id='services' className='services-section__title'>Xizmatlar</h2>
              <ul className='services-section__list'>
                <li className='services-section__item'>
                  <img
                    className='services-section__item-img'
                    src={phone}
                    alt="Mobile app img"
                    width={59}
                    height={59}
                  />

                  <h3 className='services-section__item-title'>Mobile app</h3>
                  <span className='services-section__rectangle-left'></span>
                  <span className='services-section__rectangle-center'></span>
                  <span className='services-section__rectangle-right'></span>
                </li>
                <li className='services-section__item'>
                  <img
                    className='services-section__item-img'
                    src={web}
                    alt="Mobile app img"
                    width={59}
                    height={59}
                  />

                  <h3 className='services-section__item-title'>Web Sayt</h3>
                  <span className='services-section__rectangle-left'></span>
                  <span className='services-section__rectangle-center'></span>
                  <span className='services-section__rectangle-right'></span>
                </li>
                <li className='services-section__item'>
                  <img
                    className='services-section__item-img'
                    src={crm}
                    alt="Mobile app img"
                    width={59}
                    height={59}
                  />

                  <h3 className='services-section__item-title'>CRM</h3>
                  <span className='services-section__rectangle-left'></span>
                  <span className='services-section__rectangle-center'></span>
                  <span className='services-section__rectangle-right'></span>
                </li>
                <li className='services-section__item'>
                  <img
                    className='services-section__item-img'
                    src={bot}
                    alt="Mobile app img"
                    width={59}
                    height={59}
                  />

                  <h3 className='services-section__item-title'>Telegram bot</h3>
                  <span className='services-section__rectangle-left'></span>
                  <span className='services-section__rectangle-center'></span>
                  <span className='services-section__rectangle-right'></span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='about-section'>
          <div className="container">
            <div className="about-section__wrapper">
              <h2 id="about" className='about-section__title'>Biz haqimizda</h2>
              <iframe
                className='about-section__video'
                width="1124"
                height="422"
                src="https://www.youtube.com/embed/7e90gBu4pas"
                title="YouTube video player"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </section>

        <section className='achi-section'>
          <div className="container">
            <div className="achi-section__wrapper">
              <h2 id='achi' className='achi-section__title'>Achievements</h2>
              <ul className='achi-section__list'>
                <li className='achi-section__item'>
                  <span className='achi-section__item-count'>1560+</span>
                  <span className='achi-section__item-diagramma'></span>
                  <span className='achi-section__item-title'>Project Delivered</span>
                </li>
                <li className='achi-section__item'>
                  <span className='achi-section__item-count'>100+</span>
                  <span className='achi-section__item-diagramma'></span>
                  <span className='achi-section__item-title'>Clients</span>
                </li>
                <li className='achi-section__item'>
                  <span className='achi-section__item-count'>950+</span>
                  <span className='achi-section__item-diagramma'></span>
                  <span className='achi-section__item-title'>Happy Client</span>
                </li>
                <li className='achi-section__item'>
                  <span className='achi-section__item-count'>2 yrs</span>
                  <span className='achi-section__item-diagramma'></span>
                  <span className='achi-section__item-title'>Experience</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='portfolio-section'>
          <div className="container">
            <div className="portfolio-section__wrapper">
              <h2 className='portfolio-section__title'>Portfolio</h2>
              <div className="portfolio-section__card">
                <div className="portfolio-section__card-start">
                  <div className="portfolio-section__start-top">
                    <div className="portfolio-section__top-start" onClick={() => openPortfolio()}>
                      <img
                        className='portfolio-section__top-start-img'
                        src={portfolioImgOne}
                        alt="Portfolio rasm 1"
                        width={450}
                        height={316}
                      />
                    </div>
                    <div className="portfolio-section__top-end" onClick={() => openPortfolio()}>
                      <img
                        className='portfolio-section__top-end-img'
                        src={portfolioImgTwo}
                        alt="Portfolio rasm 2"
                        width={289}
                        height={316}
                      />
                    </div>
                  </div>
                  <div className="portfolio-section__start-bottom" onClick={() => openPortfolio()}>
                    <img
                      className='portfolio-section__start-bottom-img'
                      src={portfolioImgThree}
                      alt="Portfolio img 3"
                      width={759}
                      height={316}
                    />
                  </div>
                </div>
                <div className="portfolio-section__card-end" onClick={() => openPortfolio()}>
                  <img
                    className='portfolio-section__card-end-img'
                    src={portfolioImgFour}
                    alt="Portfolio img 4"
                    width={349}
                    height={652}
                  />
                </div>
              </div>

              <div className="portfolio-section__click-block">
                <img
                  className='portfolio-section__click-img'
                  src={portfolioClickImg}
                  alt="Portfolio click img"
                  width={1132}
                  height={830}
                />
                <div className="portfolio-section__click-flex">
                  <p className='portfolio-section__click-desc'>Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Description:
                    <br /> <br />
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Description:"Lorem ipsum dolor sit amet,
                    <br /> <br />
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Description:"Lorem ipsum dolor
                    <br />
                    <br />
                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <img className='portfolio-section__click-img' src={portfolioClickImgMini} alt="" width={440} height={633} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='clients-section'>
          <div className="container">
            <div className="clients-section__wrapper">
              <h2 className='clients-section__title'>Clients</h2>
              <ul className='clients-section__list'>
                <li className='clients-section__item'>
                  <img className='clients-section__item-img' src={axon} alt="Axon icon" width={130} height={130} />
                </li>
                <li className='clients-section__item'>
                  <img className='clients-section__item-img' src={jetstar} alt="Jetstar icon" width={172} height={110} />
                </li>
                <li className='clients-section__item'>
                  <img className='clients-section__item-img' src={expedia} alt="Expedia icon" width={241} height={86} />
                </li>
                <li className='clients-section__item'>
                  <img className='clients-section__item-img' src={qantas} alt="Qantas icon" width={162} height={32} />
                </li>
                <li className='clients-section__item'>
                  <img className='clients-section__item-img' src={litaliya} alt="Axon icon" width={94} height={21} />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='ourTeam-section'>
          <div className="container">
            <div className="ourTeam-section__wrapper">
              <h2 className='ourTeam-section__title'>Our Team</h2>
              <ul className='ourTeam-section__list'>
                <li className='ourTeam-section__item'>
                  <h3 className='ourTeam-section__item-title'>Azizov Said</h3>
                  <span className='ourTeam-section__item-info'>Programmer</span>
                </li>
                <li className='ourTeam-section__item'>
                  <h3 className='ourTeam-section__item-title'>Azizov Said</h3>
                  <span className='ourTeam-section__item-info'>Manager</span>
                </li>
                <li className='ourTeam-section__item'>
                  <h3 className='ourTeam-section__item-title'>Azizov Said</h3>
                  <span className='ourTeam-section__item-info'>Copy wrighter</span>
                </li>
                <li className='ourTeam-section__item'>
                  <h3 className='ourTeam-section__item-title'>Azizov Said</h3>
                  <span className='ourTeam-section__item-info'>UX/UI designer</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='test-section'>
          <div className="container">
            <div className="test-section__wrapper">
              <h2 className='test-section__title'>Testimonials</h2>
              <Swiper
                spaceBetween={87}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}

              >
                {tests}
              </Swiper>
            </div>
          </div>
        </section>

        <section className='call-section'>
          <div className="container">
            <div className="call-section__wrapper">
              <div className="call-section__start">
                <img className='call-section__start-img' src={callImg} alt="" width={474} height={437} />
              </div>
              <div className="call-section__end">
                <h2 className='call-section__title'>Call us to solve your problem</h2>
                <form className='call-section__form'>
                  <div className="call-section__form-group">
                    <label className='call-section__form-label' htmlFor="number">Phone number</label>
                    <input className='call-section__form-input' type="text" id='number' name='number' placeholder='Enter your phone number' required />
                    <img className='call-section__form-img' src={mobile} alt="User icon" />
                  </div>
                  <div className="call-section__form-group">
                    <label className='call-section__form-label' htmlFor="name">Enter your name</label>
                    <input className='call-section__form-input' type="text" id='name' name='name' placeholder='Nafisa' required />
                    <img className='call-section__form-img' src={user} alt="User icon" />
                  </div>

                  <button className='call-section__form-btn'>Confirm</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Main