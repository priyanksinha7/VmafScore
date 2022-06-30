import { Container,Row,Col,Button } from "react-bootstrap";
import MyNavbar from "../components/Navbar/navbar";
import "./Home.css";
import MyComments from "../components/Comments/comments";



function Home()
{
    function tomanifest()
    {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = "/create";
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
        }, 100);
    }
    function tocalci()
    {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = "/scores";
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
        }, 100);
    }
    return(
        <div  id="cnt">
       <Container>
        <MyNavbar/>
       </Container>
       <Container id="homecnt">
        <Row>
            <Col id="createscore">
                <div>
                <u>
                <a href="/create" >
                <h3>
                    ENTER MANIFEST AND CREATE A SAMPLE
                </h3>
                </a>
                </u>
                <hr></hr>
                    <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </h4>
                </div>
                <Button variant="dark" onClick={tomanifest}>Have a Manifest</Button>
            </Col>
            <Col id="createscore">
            <div>
                <u>
                <a href="/scores" >
                <h3>
                    COMPUTE SCORES
                </h3>
                </a>
                </u>
                <hr></hr>
                    <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </h4>
                </div>
                <Button variant="dark" onClick={tocalci}>Calculate scores</Button>
            </Col>
        </Row>
       </Container>
       <MyComments text="This is Home.Redirect Yourself to anywhere." />
      </div>
    )
}
export default Home;