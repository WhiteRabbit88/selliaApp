import Card from 'react-bootstrap/Card';
import '.././utils/chats.mock.jsx';

const CardChat = ( props ) => {
  return (
      <>      
        <Card className={
             props.title  === "Nuevos chats" ? "nuevos"
              : 
              props.title  === "Pendientes" ? "pendientes"
              :
              props.title  === "Resueltos" ? "resueltos"
              : ""
        }>
            <Card.Img variant="center" src={ props.photo } />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
      </>
  )
}

export default CardChat