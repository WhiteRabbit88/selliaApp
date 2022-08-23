import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown';


const Profile = () => {
  return (
      <div className='text-center'> 
          <Image src='https://randomuser.me/api/portraits/men/86.jpg' roundedCircle thumbnail />

          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <span className='profile-status green'><span className='text-hidden'>Conectado</span></span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1"><span className='profile-status yellow'><span className='text-hidden'>Ausente</span></span></Dropdown.Item>
              <Dropdown.Item href="#/action-2"><span className='profile-status blue'><span className='text-hidden'>Ocupado</span></span></Dropdown.Item>
              <Dropdown.Item href="#/action-3"><span className='profile-status red'><span className='text-hidden'>Desconectado</span></span></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </div>
  )
}

export default Profile