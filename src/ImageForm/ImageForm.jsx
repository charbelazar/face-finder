import React from 'react';

const ImageForm = ({inputchange, onSubmit}) => {
    return (
        <div>
           <p className='f3'>Put your Image URL below to detect if the image contains a face !</p>
           <input className='f4 pa2 w-70 center' type='text' onChange={inputchange} />
           <button className='w3-30 grow f4 link ph3 pv2 dib white bg-light-red' onClick={onSubmit}>Detect Face</button>
        </div>
    );
};

export default ImageForm;