
import './App.css';
import {React} from 'react';
import {useState} from 'react';
import ImageForm from  './ImageForm/ImageForm';
import  FaceRecognition  from './FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const particleoptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}

const appC = new Clarifai.App({
  apiKey: 'e45f043921714a60b0a64f1a7db67a93'
 });

function App() {

 const [input, setInput] = useState('');
 const [box, Setbox] =useState({});

 const CalculateFaceLocation = (data) => {
 const Region =  data.outputs[0].data.regions[0].region_info.bounding_box ;
 const image = document.getElementById('inputimage')
 const width = Number(image.width);
 const height = Number(image.height);
 return {
  leftCol: Region.left_col * width,
  topRow: Region.top_row * height,
  rightCol: width - (Region.right_col * width),
  bottomRow: height - (Region.bottom_row * height)
}

 };


// useEffect(() => axios.get('https://jsonplaceholder.typicode.com/users').then(data => setmyax(data.data) ), []) ; 




const inputchange = (e) => setInput(e.target.value) ;
const onSubmit = () => {
  appC.models
.predict(
Clarifai.FACE_DETECT_MODEL,
    // URL
    input
)
.then(function(response) {
   //console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
   //console.log(response);
   Setbox(CalculateFaceLocation(response));
   console.log(box);
    },
    function(err) {console.log('error')}
);}
 



  return (
    <div className="App">      
          <Particles className='Particles' params={particleoptions}  />
          <ImageForm inputchange={inputchange} onSubmit={onSubmit} /> 
           <FaceRecognition box={box} imgUrl ={input} />        
     </div>       
  );
}


export default App;
