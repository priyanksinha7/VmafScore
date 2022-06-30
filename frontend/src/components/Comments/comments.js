
import {Container} from "react-bootstrap";
import './comments.css';

function MyComments(props)
{ 
    return(
        <footer>
        <Container id="comments">
        <h5>{props.text}</h5>
   </Container>
   </footer>
    )
}
export default MyComments;