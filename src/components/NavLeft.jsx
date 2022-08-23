import Nav from 'react-bootstrap/Nav';
import Profile from './Profile';
import { Person, Gear, QuestionCircle, ArrowBarRight } from 'react-bootstrap-icons';

const NavLeft = () => {
  return (
      <div className='navigation full-height'>
        <div className='container-nav bg-primary'>
          <Profile />

          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home"><Person color="white" size={24} /><span className='text-hidden'>Mi cuenta</span></Nav.Link>
            <Nav.Link eventKey="link-1"><Gear color="white" size={24} /><span className='text-hidden'>Configuración</span></Nav.Link>
            <Nav.Link eventKey="link-2"><QuestionCircle color="white" size={24} /><span className='text-hidden'>FAQs</span></Nav.Link>
            <Nav.Link eventKey="link-2"><ArrowBarRight color="white" size={24} /><span className='text-hidden'>Cerrar Sesión</span></Nav.Link>
          </Nav>
        </div>
    </div>
  )
}

export default NavLeft