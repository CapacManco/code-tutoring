import React from 'react';
import Nav from '../src/components/Nav';
import Form from '../src/components/Form';
import Image from 'next/image';
import Head from 'next/head';

import advantage1 from '../public/img/4565.jpg';
import advantage2 from '../public/img/5278.jpg';
import advantage3 from '../public/img/10168.jpg';

import promotion from '../public/img/13239.jpg';

import logoHtml from '../public/img/logo-html.png';
import logoCss from '../public/img/logo-css.png';
import logoJs from '../public/img/logo-js.png';

import testimony1 from '../public/img/testimony-1.jpg';
import testimony2 from '../public/img/testimony-2.jpg';
import testimony3 from '../public/img/testimony-3.jpg';

import { ImQuotesLeft as QuoteImg } from 'react-icons/im';
import {
  BsInstagram as IgIcon,
  BsTwitter as TwitterIcon,
} from 'react-icons/bs';

const App = () => {
  return (
    <>
      <Head>
        <title>Coding Tutors Online | Codingtutors.io </title>
        <meta
          name="description"
          content="Experienced coding tutors giving you programming lessons. HTML, CSS, Javascript !"
        />
      </Head>
      <div className="layout">
        <header className="home">
          <Nav />
          <div className="home__left">
            <p className="heading__big">
              <span className="hidden">→</span> Coding{' '}
              <span className="heading__big__underline">tutors</span> adapted to
              your needs !
            </p>
            <p className="heading__medium">
              Exclusive offer : the first session is FREE !
            </p>
            <button className="button--cta">
              <a href="#booking">Take a lesson →</a>
            </button>
          </div>
        </header>
        <div className="advantages" id="advantages">
          <div className="advantage">
            <div className="advantage__image__container">
              <Image
                src={advantage1}
                layout="responsive"
                width="800"
                height="457"
              />
            </div>
            <div className="advantage__box">
              <p className="advantage__title">
                Learn with experienced programmers
              </p>
              <p className="advantage__text">
                We select carefully our tutors to ensure that you have the best
                teaching experience.
              </p>
              <button className="advantage__button button--cta">
                <a href="#booking">Take a lesson</a>
              </button>
            </div>
          </div>
          <div className="advantage">
            <div className="advantage__box advantage__box__reverse">
              <p className="advantage__title">
                A personalized <br /> learning experience
              </p>
              <p className="advantage__text">
                Our programming lessons allow us to make a fully custom pathway
                based on your own needs and goals, at your own pace.
              </p>
            </div>
            <div className="advantage__image__container advantage__image__container__reverse">
              <Image
                src={advantage2}
                layout="responsive"
                width="800"
                height="488"
              />
            </div>
          </div>
          <div className="advantage">
            <div className="advantage__image__container">
              <Image
                src={advantage3}
                layout="responsive"
                width="800"
                height="500"
              />
            </div>
            <div className="advantage__box">
              <p className="advantage__title">
                One-on-one live <br />
                programming sessions
              </p>
              <p className="advantage__text">
                Our tutoring sessions are all online and one-on-one. It gives
                you more flexibility and personalization.
              </p>
              <button className="advantage__button button--cta">
                <a href="#booking">Take a lesson</a>
              </button>
            </div>
          </div>
        </div>
        <div className="courses" id="courses">
          <div className="courses__card">
            <div className="courses__image__container">
              <Image
                src={logoHtml}
                layout="responsive"
                width="100"
                height="113"
              />
            </div>
            <div className="courses__title">HTML</div>
            <div className="courses__text">
              Learn the basics of HTML to build a website with the help of
              semantics markup !
            </div>
          </div>
          <div className="courses__card">
            <div className="courses__image__container">
              <Image
                src={logoCss}
                layout="responsive"
                width="100"
                height="113"
              />
            </div>
            <div className="courses__title">CSS</div>
            <div className="courses__text">
              Learn how to design a website with CSS and the preprocessor SASS !
            </div>
          </div>
          <div className="courses__card">
            <div className="courses__image__container">
              <Image
                src={logoJs}
                layout="responsive"
                width="100"
                height="100"
              />
            </div>
            <div className="courses__title">Javascript</div>
            <div className="courses__text">
              Learn Javascript to add interactivity to your web application !
            </div>
          </div>
        </div>
        <div className="promotion">
          <div className="promotion__box">
            <p className="promotion__title">
              The first coding session is entirely free !{' '}
            </p>
            <p className="promotion__text">
              For your convenience, we offer the first 30 minutes session in
              order to identify your needs and establish goals.{' '}
            </p>
            <p className="promotion__button button--cta">
              <a href="#booking">Take a lesson</a>
            </p>
          </div>
          <div className="promotion__img__container">
            <Image
              className="promotion__img"
              src={promotion}
              layout="responsive"
              width="800"
              height="470"
            />
          </div>
        </div>
        <div className="testimony" id="testimony">
          <div className="testimony__slider">
            <div className="testimony__card">
              <div className="testimony__card--first">
                <QuoteImg className="testimony__quote" />
                <p className="testimony__box">
                  <em>
                    This was my first experience with codingtutors.io and the
                    tutor was very professional and adjusted the lesson to my
                    level so I don't feel lost.
                  </em>
                </p>
              </div>
              <div className="testimony__author">
                <div className="testimony__image__container">
                  <Image
                    src={testimony1}
                    layout="responsive"
                    className="testimony__image"
                    width="150"
                    height="150"
                  />
                </div>
                <div className="testimony__author__text">
                  <p className="testimony__author__text__name">Semih Bekki</p>
                  <p className="testimony__author__text__occupation">
                    Web Developer
                  </p>
                </div>
              </div>
            </div>
            <div className="testimony__card">
              <div className="testimony__card--first">
                <QuoteImg className="testimony__quote" />
                <p className="testimony__box">
                  <em>
                    The lessons were a good introduction to programming. As a
                    person who had never coded before, it was easy to follow
                    along. Tutors are very good !
                  </em>
                </p>
              </div>
              <div className="testimony__author">
                <div className="testimony__image__container">
                  <Image
                    src={testimony2}
                    layout="responsive"
                    className="testimony__image"
                    width="150"
                    height="150"
                  />
                </div>
                <div className="testimony__author__text">
                  <p className="testimony__author__text__name">Matthew Hue</p>
                  <p className="testimony__author__text__occupation">
                    Film Editor
                  </p>
                </div>
              </div>
            </div>
            <div className="testimony__card">
              <div className="testimony__card--first">
                <QuoteImg className="testimony__quote" />
                <p className="testimony__box">
                  <em>
                    I was surprised by the quality of the content proposed by
                    the tutors. I would highly recommend this very efficient
                    guided method of learning.
                  </em>
                </p>
              </div>
              <div className="testimony__author">
                <div className="testimony__image__container">
                  <Image
                    src={testimony3}
                    layout="responsive"
                    className="testimony__image"
                    width="150"
                    height="150"
                  />
                </div>
                <div className="testimony__author__text">
                  <p className="testimony__author__text__name">Alex Zang</p>
                  <p className="testimony__author__text__occupation">
                    Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="prices" id="prices">
          <div className="prices__card">
            <div className="prices__card__box--top">
              <p className="prices__card__title">Single session</p>
              <p className="prices__card__description">
                A single online tutoring session
              </p>
            </div>
            <p className="prices__card__price prices__card__price--1">
              <span className="prices__card__sup">$</span>24.99
            </p>
            <div className="prices__card__features">
              <p className="prices__card__feature">30 minutes session</p>
              <p className="prices__card__feature">
                One-to-one session tutoring
              </p>
              <p className="prices__card__feature">Quick session</p>
              <p className="prices__card__feature">Support</p>
            </div>
            <div className="prices__card__box--bottom">
              <button className="button--card button--card--1">
                <a href="#booking">BOOK A SESSION</a>
              </button>
              <p className="prices__card__promotion prices__card__promotion--1">
                The first lesson is free !
              </p>
            </div>
          </div>
          <div className="prices__card">
            <div className="prices__card__box--top">
              <p className="prices__card__title">Student</p>
              <p className="prices__card__description">
                One hour lesson per week
              </p>
            </div>
            <p className="prices__card__price prices__card__price--2">
              <span className="prices__card__sup">$</span>189
              <span className="prices__card__sub">/ mo</span>
            </p>
            <div className="prices__card__features">
              <p className="prices__card__feature">1 hour/week</p>
              <p className="prices__card__feature">
                One-to-one session tutoring
              </p>
              <p className="prices__card__feature">Personalized lessons</p>
              <p className="prices__card__feature">Personal tutor</p>
            </div>
            <div className="prices__card__box--bottom">
              <button className="button--card button--card--2">
                <a href="#booking">BOOK A SESSION</a>
              </button>
              <p className="prices__card__promotion prices__card__promotion--2">
                The first lesson is free !
              </p>
            </div>
          </div>
          <div className="prices__card">
            <div className="prices__card__box--top">
              <p className="prices__card__title">Personalizable student</p>
              <p className="prices__card__description">
                A number of lessons per week based on your needs
              </p>
            </div>
            <p className="prices__card__price prices__card__price--3">
              <span className="prices__card__sup">$</span>NaN
              <span className="prices__card__sub">/ mo</span>
            </p>
            <div className="prices__card__features">
              <p className="prices__card__feature">Flexible learning</p>
              <p className="prices__card__feature">
                One-to-one session tutoring
              </p>
              <p className="prices__card__feature">Personalized lessons</p>
              <p className="prices__card__feature">Personal tutor</p>
            </div>
            <div className="prices__card__box--bottom">
              <button className="button--card button--card--3">
                <a href="#booking">BOOK A SESSION</a>
              </button>
              <p className="prices__card__promotion prices__card__promotion--3">
                The first lesson is free !
              </p>
            </div>
          </div>
        </div>
        <div className="booking" id="booking">
          <div className="booking__container">
            <Form />
          </div>
        </div>
        <footer className="footer">
          <div className="footer__box">
            <p className="footer__title">Codingtutors.io</p>
            <ul className="footer__nav">
              <li className="footer__link">
                <a href="#advantages">Why codingtutors.io ?</a>
              </li>
              <li className="footer__link">
                <a href="#courses">Courses</a>
              </li>
              <li className="footer__link">
                <a href="#testimony">Testimonies</a>
              </li>
              <li className="footer__link">
                <a href="#prices">Prices</a>
              </li>
              <li className="footer__link">
                <a href="#booking">Book a lesson</a>
              </li>
            </ul>
            <p className="footer__email">
              <a href="mailto: contact@codingtutors.io">
                contact@codingtutors.io
              </a>
            </p>
            <div className="footer__socials">
              <IgIcon className="footer__icon" />
              <TwitterIcon className="footer__icon" />
            </div>
          </div>
          <p className="footer__copyright">
            Copyright ©2022 All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default App;
