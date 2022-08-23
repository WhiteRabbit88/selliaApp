import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import Footer from './components/Footer';
import PanelChat from './components/PanelChat';
import Conversation from './components/Conversation';
import { ArrowRightShort } from 'react-bootstrap-icons';
import { useState } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import './App.scss';
  
function App() {
  const [style, setStyle] = useState("off");
  
  const changeBlock = () => {
      setStyle("on");
  };

  const changeOff = () => {
      setStyle("off");
  };

  return (
    <>
      <Header />

      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
          <Container fluid="xxxl">
            <Row>
              <Col md={2} id="colapsed" className={style}>
                <CloseButton variant="white" onClick={changeBlock} />
                <NavLeft />
                <a onClick={changeOff} className='open bg-primary'><ArrowRightShort color="white" size={20} /></a>
              </Col>
              <Col md={3}>
                <PanelChat />
              </Col>
              <Col md={7} className="flex">
                <Conversation />
              </Col>
            </Row>
          </Container>
      </ThemeProvider>

      <Footer />
    </>
  );
}

export default App;
