import React from 'react';
import './FaceRecognition.css';
const FaceRecognition = ({imgUrl, box}) => {
    return (
        <div className='center ma pa2'>
        <div  id='imgdiv'>
      {imgUrl === '' ?  <p></p> : <img alt='s' id='inputimage' src ={imgUrl} width='500px' height='auto' />}  
       {imgUrl === '' ? <p></p> : <div className='facebox' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left:box.leftCol}}></div> } 
        </div>                                   
        </div>
    );
};

export default FaceRecognition;