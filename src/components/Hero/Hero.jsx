import React, { useContext, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'
import PortfolioContext from '../../context/context'
import AboutImg from '../Image/AboutImg'

const Header = () => {
  const { hero, about } = useContext(PortfolioContext)
  const { title, name, subtitle, aboutCta, portfolioCta } = hero
  const { img } = about

  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
  }, [])

  return (
    <section id='hero' className='jumbotron'>
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <Fade bottom duration={400} delay={200} distance='30px'>
              <div className='about-wrapper__image'>
                <AboutImg alt='profile picture' filename={img} />
              </div>
            </Fade>
          </Col>
          <Col
            md={6}
            sm={12}
            style={{ margin: 'auto' }}
          >
            <Fade left={isDesktop} bottom={isMobile} duration={400} delay={0} distance='30px'>
              <h1 className='hero-title'>
                {title} <span className='text-color-main'>{name}</span>
                <br />
                {subtitle}
              </h1>
            </Fade>
            <div style={{ display: 'flex' }}>
              <Fade bottom={isMobile} duration={400} delay={0} distance='30px'>
                <p className='hero-cta'>
                  <span className='cta-btn cta-btn--hero'>
                    <Link to='about' smooth duration={1000}>
                      {aboutCta}
                    </Link>
                  </span>
                </p>
                <p className='hero-cta'>
                  <span className='cta-btn cta-btn--hero'>
                    <Link to='projects' smooth duration={1000}>
                      {portfolioCta}
                    </Link>
                  </span>
                </p>
              </Fade>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Header
