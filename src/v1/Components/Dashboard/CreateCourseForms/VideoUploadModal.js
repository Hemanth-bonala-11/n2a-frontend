import { useState } from 'react';
import './VideoUploadModal.scss'
import { FileUploader } from "react-drag-drop-files";

export const VideoUploadModal = ()=>{
    const fileTypes = ["mp4", "mkv"];
    const [video, setVideo] = useState()
    const changeHandler = (file)=>{
        setVideo(file)

    }
    return (
        <div className='video-uploader-wrapper'>
            <div className='video-uploader'>
            <FileUploader  handleChange={changeHandler} name="file"  type={fileTypes} maxSize={10240}/>
            <div className='video-uploader-submit-button'>
                    <button>Upload</button>
            </div>

            </div>
           
            
            

        </div>
    )
}