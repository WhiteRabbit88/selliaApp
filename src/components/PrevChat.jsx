import '.././utils/chats.mock.jsx';
import { ExclamationCircle } from 'react-bootstrap-icons';
import { Clock } from 'react-bootstrap-icons';
import { CheckCircle } from 'react-bootstrap-icons';

const PrevChat = ( props ) => {
  return (
      <>      
        <div className='bg-secondary status-chat'>
            <h6> 
              { props.title  === "Nuevos chats" ? <ExclamationCircle size={24} />
              :   
              props.title  === "Pendientes" ? <Clock size={24} />
              :
              props.title  === "Resueltos" ? <CheckCircle size={24} />
              : ""
              }
             {props.title} </h6>
        </div>        
      </>
  )
}

export default PrevChat