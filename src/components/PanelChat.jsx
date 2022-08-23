import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PrevChat from './PrevChat';


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
                <PrevChat title='Pendientes' />
                <PrevChat title='Resueltos' />
            </Tab>
            
            <Tab eventKey="archivados" title="Archivados">
                
            </Tab>
            </Tabs>
      </div>
  )
}

export default PanelChat