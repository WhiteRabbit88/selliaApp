import Card from 'react-bootstrap/Card';
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

        <Card>
            <Card.Img variant="center" src="https://randomuser.me/api/portraits/women/84.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        
      </>
  )
}

export default PrevChat