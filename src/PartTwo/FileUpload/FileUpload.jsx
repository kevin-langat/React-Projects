import { useRef, useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState();
  const uploadReference = useRef();
  const progressRef = useRef();
  const statusRef = useRef();
  const loadRef = useRef();

  function handleUploadFile(e) {
    const file = uploadReference.current.files[0];
    setFile(URL.createObjectURL(file));
    let formData = new FormData();
    formData.append('image', file);
    let xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', handleProgress);
    xhr.addEventListener('load', handleSuccess, false);
    xhr.addEventListener('error', handleError, false);
    xhr.addEventListener('abort', handleAbort, false);

    xhr.open('POST', 'https://v2.convertapi.com/upload');
    xhr.send(formData);
  }

  function handleProgress(e) {
    loadRef.current.innerHTML = `Uploaded ${e.loaded} bytes of ${e.total}`;
    const percentage = (e.loaded / e.total) * 100;
    progressRef.current.value = Math.round(percentage);
    statusRef.current.innerHTML = `${Math.round(percentage)}% uploaded`;
  }

  function handleSuccess(e) {
    statusRef.current.innerHTML = e.target.reponseText;
    progressRef.current.value = 0;
  }

  function handleError() {
    statusRef.current.innerHTML = 'Upload failed! Please try again.';
  }
  function handleAbort() {
    statusRef.current.innerHTML = 'Upload aborted! Please try again.';
  }
  return (
    <div className='w-full items-center flex flex-col'>
      <h2>File Upload Component</h2>
      <div className='w-1/2 py-4 flex flex-col gap-3 bg-gray-950 text-white items-center justify-center'>
        <input
          onChange={handleUploadFile}
          type='file'
          name="'file"
          ref={uploadReference}
          className=' file:bg-blue-600 file:px-2 file:py-1 file:rounded-[0.3em]'
        />
        <label>
          {' '}
          File progress: <progress ref={progressRef} value={'0'} max={'100'} />
        </label>
        <p ref={statusRef}></p>

        <p ref={loadRef}></p>
        <img src={file} alt='file-upload' className='' />
      </div>
    </div>
  );
}
export default FileUpload;
