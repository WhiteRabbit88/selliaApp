import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import '.././utils/chats.mock.jsx';
import CloseButton from 'react-bootstrap/CloseButton';
import UserProfile from './UserProfile.jsx';
import InputChat from './InputChat.jsx';

const Conversation = () => {
    const [style, setStyle] = useState("width-hidden");
  
    const changeBlock = () => {
        setStyle("width-full");
    };

  return (
      <>      
        <div className='container-conversation'>
            <div className='bg-primary card-chat'>
                <Card>
                    <a onClick={changeBlock}><Image src='https://randomuser.me/api/portraits/women/84.jpg' roundedCircle thumbnail /></a>
                    <Card.Body>
                        <Card.Title>Valentina Díaz</Card.Title>
                        <Card.Text>+5213300330037</Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className='bg-grey conversation-chat'>
                <div className='date'>Marzo 15, 2022</div>

                <InputChat />
            </div>
        </div>

        <div id='user-profile-sidebar' className={style}>
            <CloseButton variant="black" onClick={()=>setStyle("width-hidden")} />
            <UserProfile />
        </div>
      </>
  )
}

export default Conversation