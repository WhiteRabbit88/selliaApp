import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <Navbar bg="light">
        <Container>
            <Navbar.Brand href="#home">
                <img
                src="/assets/logo.svg"
                width="140"
                height="45"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                />
            </Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default Header