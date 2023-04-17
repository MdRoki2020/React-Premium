import { useRef, useState } from "react";
import { Fragment } from "react";
import { ErrorToast, IsEmpty, SuccessToast } from "../helper/FormHelper";
import { PostADsRequest } from "../ApiRequest/APIRequest";

const PostVideo = () => {
  const [loading, setLoading] = useState(false);
  const TitleRef = useRef(null);
  const FileRef = useRef(null);

  const handleUpload = () => {
    const Title = TitleRef.current.value;
    const Video = FileRef.current.files[0];

    if (IsEmpty(Title)) {
      ErrorToast("Title Is Required");
      return;
    }

    if (!Video) {
      ErrorToast("Video Is Required");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", Video);
    formData.append("title", Title);

    PostADsRequest(formData)
      .then((result) => {
        if (result === true) {
          SuccessToast("Video Upload success !");
          setLoading(false);
          TitleRef.current.value = "";
          FileRef.current.value = "";
        } else {
          setLoading(false);
          ErrorToast("Something Went Wrong");
          console.log("something went wrong");
        }
      });
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
                <input ref={TitleRef} className="form-control" type="text" id="title" />
              </div>
              <div>
                <label htmlFor="file">File:</label>
                <input ref={FileRef} className="form-control" type="file" id="file" />
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
  );
};

export default PostVideo;
