import Form from 'react-bootstrap/Form';
import { Paperclip, EmojiSmile, Send } from 'react-bootstrap-icons';


function InputChat() {
  return (
    <div className='container-input'>
        <Form>
            <EmojiSmile size={24} />
            <Paperclip size={24} />
            <Form.Control as="textarea" size="sm" rows={1} placeholder="Escribe tu mensaje aquí" />
            <Send size={24} />
        </Form>
    </div>
  );
}

export default InputChat;