import { Container } from 'react-bootstrap';
import MyComments from '../components/Comments/comments';
import Grid from '../components/inputGrid/grid';
import MyNavbar from '../components/Navbar/navbar';
import './Sample.css';


function SamplePage()
{
    const footerText="THIS WEBSITE WILL HELP YOU IN DOWNLOADING A CLIP OF A VIDEOSTREAM&#169;"
    return(
        <div  id="cnt">
            <Container>
                <MyNavbar />
            </Container>
            <Grid />

            <Container id="h3score">
            <a href="/scores">
                <h3>
                    Have a video input...!
                    &#128556;
                </h3>
                </a>
            </Container>
            <MyComments text={footerText}/>
        </div>

    )
}
export default SamplePage;