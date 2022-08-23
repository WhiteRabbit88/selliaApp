import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PrevChat from './PrevChat';
import CardChat from './CardChat';

const PanelChat = () => {
    const [key, setKey] = useState('chats');

  return (
      <div className='full-height'>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="bg-third"
            >
            <Tab eventKey="chats" title="Chats">
                <PrevChat title="Nuevos chats" />
                  <CardChat title="Nuevos chats" name="Valentina Diaz" photo="https://randomuser.me/api/portraits/women/84.jpg" text="Buenas tardes!" />
                  <CardChat title="Nuevos chats"  name="Ricardo Flores" photo="https://randomuser.me/api/portraits/men/11.jpg" text="No puedo ingresar" />
                <PrevChat title='Pendientes' />
                  <CardChat title='Pendientes'  name="Lionel Messi" photo="https://randomuser.me/api/portraits/men/17.jpg" text="Confirmo" />
                <PrevChat title='Resueltos' />
                  <CardChat title='Resueltos'  name="Steve Jobs" photo="https://randomuser.me/api/portraits/men/21.jpg" text="Muchas gracias!" />
                  <CardChat title='Resueltos'  name="Elon Musk" photo="https://randomuser.me/api/portraits/men/70.jpg" text="Gracias" />
            </Tab>
            
            <Tab eventKey="archivados" title="Archivados">
                
            </Tab>
            </Tabs>
      </div>
  )
}

export default PanelChat