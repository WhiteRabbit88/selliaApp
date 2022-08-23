import Nav from 'react-bootstrap/Nav';

const Footer = () => {
  return (
    <div id='footer' className='bg-third'>
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/">Aviso de privacidad</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Términos y condiciones</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Política de cookies</Nav.Link>
            </Nav.Item>
        </Nav>
        <p className="text-center mt-4 mb-4">Copyright © 2022 Sellia, All rights reserved.</p>
    </div>
  )
}

export default Footer