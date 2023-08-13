import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

// import imgs and icons
import siteLogo from "../../assets/icons/site-logo.svg"
import arrowDown from "../../assets/icons/arrow_bottom.svg"
import arrowDownLang from "../../assets/icons/arrow-bottom-lang.svg"
import phone from "../../assets/icons/mobile.svg"
import web from "../../assets/icons/web.svg"
import crm from "../../assets/icons/crm.svg"
import bot from "../../assets/icons/bot.svg"

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
                  <Link className='site-header__nav-link' to="/achievements">Achievements</Link>
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
      </main>
    </>
  )
}

export default Main
