import { Button, Col, Container, Row } from 'react-bootstrap';
import Player from '../player/player';
import Canvas from '../canvas/canvas';
import "./grid.css";
import { useState } from 'react';

function Grid()
{
    const [url,setUrl]=useState("https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd");
    const [emb,setEmb]=useState("https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd")
   function setFunc()
   {
     setEmb(url);
   }

return(
<Container id="grid">
<Row>
  <Container id="mycnt">
  <div id="h2canvas">
  <h2>ENTER YOUR URL</h2></div>
  <input type="text" id="myInput" onChange={(e)=>{setUrl(e.target.value)}} placeholder='TYPE/PASTE YOUR MANIFEST URL'>
  </input>
  <Button variant="dark" onClick={setFunc}>Submit</Button>
  </Container>
</Row>
<Row>
    <Col>
      <Player url={emb}/>
    </Col>
    <Col>
    <Canvas />
    </Col>
</Row>     
    </Container>
)

}
export default Grid;