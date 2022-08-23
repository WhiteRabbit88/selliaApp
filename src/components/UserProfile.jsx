import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const UserProfile = () => {
    return(
        <div id='container-profile'>
            <Card border="light">
            <Card.Img variant="top" rounded src="https://randomuser.me/api/portraits/women/84.jpg" />
            <Card.Body>
                <Card.Title>Nombre: </Card.Title>
                <Card.Text>Valentina Díaz</Card.Text>

                <Card.Title>Teléfono: </Card.Title>
                <Card.Text>+5213300346789</Card.Text>

                <Card.Title>Ubicación: </Card.Title>
                <Card.Text>Ciudad de México</Card.Text>

                <Card.Title>Datos y hora de inicio de chat: </Card.Title>
                <Card.Text>Marzo 15, 2022 -3:10 pm</Card.Text>

                <Card.Title>Chat iniciado desde: </Card.Title>
                <Card.Text>Facebook</Card.Text>
              
              
                <Button variant="Light">Archivar</Button>
                <Button variant="primary">Resuelto</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default UserProfile;