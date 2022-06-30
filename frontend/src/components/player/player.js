
import { Col,Row,Button, Container} from 'react-bootstrap';
import './player.css'
//import demo from "../../videos/demo.mp4";
import { useEffect } from 'react';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player-react/dist/controls.css';

function Player(props)
{
  
  var stopflag=0;
  let canvas;
  let mediaRecorder;
  let recordedChunks=[];
  useEffect(()=>
  {
    canvas=document.getElementById('glCanvas');
  })
  function recordCanvas()
  {
     const stream=canvas.captureStream();
     let options = {mimeType: 'video/webm'};
      mediaRecorder=new MediaRecorder(stream,options);
      mediaRecorder.start(0);
      mediaRecorder.ondataavailable = function (event) {
        recordedChunks.push(event.data);
     console.log(mediaRecorder);
  }
}
   function utilFunc()
  {
    stopflag=0;
    const canvas=document.getElementById('glCanvas');
    var ctx=canvas.getContext('2d');
    const myFrame=document.getElementById('myFrame');
    function captureVid() {
       function step() {
         if(stopflag===1)
         {
           return;
         }
         ctx.imageSmoothingQuality = 'high';
       ctx.drawImage(myFrame, 0, 0, canvas.width, canvas.height);
        
         requestAnimationFrame(step)
       }
       if(stopflag===1)
       {
         return;
       }
       requestAnimationFrame(step);
     }
     captureVid();
    
  }
  function twoFunc()
  {
    utilFunc();
    recordCanvas();
  }
    function stopFunc()
    {
         stopflag=1;
         mediaRecorder.stop();
    }
    function download()
    {
      var blob = new Blob(recordedChunks, {type: "video/webm" });
      var url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'test.webm';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 100);
    }
  
    return(
        <div id="myCard">
        <div id="h2canvas">
     <u>  <h2>
            PLAYER
        </h2></u> 
        </div>
        <hr></hr>
        {/* <iframe width="90%" height="375" title="myFrame"  id="myframe" src="https://www.youtube.com/embed/xcJtL7QggTI">
        </iframe>  */}
         {/* <video width="90%" height="375" id="myFrame" controls>
  <source src={demo} type="video/mp4" />
   </video> */}
   <Container id="shakawrap">
   <ShakaPlayer  height="385" width="90" id="myFrame" autoPlay src={props.url} />
   </Container>
        <Row>
        <Col>
       <Button variant="secondary" onClick={twoFunc}>
        Start
       </Button>
       </Col>
       <Col>
       <Button variant="secondary" onClick={stopFunc}>
        Stop
       </Button>
       </Col>
       <Col>
       <Button  variant="secondary" onClick={download} >
        Download
       </Button>
       </Col>
       </Row>
          
        </div>
    )
}

export default Player;