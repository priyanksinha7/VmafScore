import { Container, Row } from 'react-bootstrap';
import MyComments from '../components/Comments/comments';
import Grid from '../components/Grid/grid';
import MyNavbar from '../components/Navbar/navbar';
import Title from '../components/Title/title';
import './Scores.css';



function ScoresPage()
{
    
    const footerText="This Website will help in measuring quality of the video in different standards";
    return (
        <div  id="cnt">
            <Container>
             <MyNavbar/>
          </Container>
          <Container>
        <Row id="title-row">
          <Title/>
         </Row>
        </Container>
        <Grid/>
        <MyComments text={footerText}/>
      </div>
    );
}

export default ScoresPage;