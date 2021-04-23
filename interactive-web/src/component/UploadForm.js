import React, { useState, useEffect } from 'react';
import ProgressBar from '../component/ProgressBar';
import './UploadForm.css';
import { projectFirestore, timestamp, projectStorage } from '../firebase/config';
import { Button } from './Button';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [cat, setCat] = useState("");




    const handleChange = (e) => {
        let selected = e.target.files[0];

        const types = ['image/png', 'image/jpeg'];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file of format (png or jpeg)');
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        setTitle("");
        setDesc("");
        setCat("");
        setFile(null);
      };

      const [button, setButton] = useState(true);
      const showButton = () => {
          if (window.innerWidth <= 960) {
              setButton(false);
          } else {
              setButton(true);
          }
      };
  
      useEffect(() => {
          showButton();
      }, []);
    



    return (
        <form>

            <h3 style={{marginTop: '5px'}}>Title</h3>
            <input
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <h3 style={{marginTop: '30px'}}>Category</h3>
            <input
                placeholder='Category'
                value={cat}
                onChange={(e) => setCat(e.target.value)}
            />

           <h3 style={{marginTop: '30px'}}>Description</h3>
            <textarea
                placeholder='Decription of your post'
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            <div className='output'>
                {error && <div className='error'> {error} </div>}
                {file && <div> {file.name} </div>}
                {file && <ProgressBar file={file} setFile={setFile}
                title={title} desc={desc} cat={cat}>
                    </ProgressBar>}
            </div>
            { button && <Button onClick={handleSubmit} buttonStyle='btn--primary' buttonSize="btn--large">Submit</Button>}


        </form>
    )
}

export default UploadForm;