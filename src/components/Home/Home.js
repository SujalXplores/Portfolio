import { Container, Row, Col } from 'react-bootstrap';
import Lottie from 'react-lottie-player/dist/LottiePlayerLight';
import animationData from '../../assets/home-programmer.json';
import Particle from '../Particle';
import Home2 from './Home2';
import Type from './Type';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{' '}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M<strong className="main-name"> SUJAL SHAH</strong>
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Lottie
                loop
                animationData={animationData}
                play
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
