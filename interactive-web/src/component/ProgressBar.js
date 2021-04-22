import React, {useEffect} from 'react';
import useStorage from '../hooks/useStorage';
import './ProgressBar.css'

const ProgressBar = ({ file, setFile, title, desc, cat}) => {
    const { url, progress } =  useStorage(file, title, desc, cat);
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])
    return (
        <div className='progress-bar' style={{ width: progress + '%'}}></div>
    )
}

export default ProgressBar;