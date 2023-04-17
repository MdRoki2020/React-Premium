import { useState } from "react";
import axios from "axios";
import { Fragment } from "react";

const PostVideo = () => {

    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleUpload = async () => {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", title);
  
      try {
        const res = await axios.post("http://localhost:5000/api/v1/postVideo", formData);
  
        console.log(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
  
    return (
      <Fragment>
          <h2 className='text-center'>Post Video</h2>
  
          <div className='container'>
              <div className='row'>
                  <div className='col-sm-4'></div>
                  <div className='col-sm-4'>
                  <div>
                      <div>
                          <label htmlFor="title">Title:</label>
                          <input className="form-control" type="text" id="title" value={title} onChange={handleTitleChange} />
                      </div>
                      <div>
                          <label htmlFor="file">File:</label>
                          <input className="form-control" type="file" id="file" onChange={handleFileChange} />
                      </div>
                      <div>
                          <button className="form-control mt-3" onClick={handleUpload} disabled={loading}>
                            {loading ? "Uploading..." : "Upload"}
                          </button>
                      </div>
                  </div>
                  </div>
                  <div className='col-sm-4'></div>
              </div>
          </div>
      </Fragment>
    )
};

export default PostVideo;
