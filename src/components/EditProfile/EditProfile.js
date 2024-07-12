import './editprofile.css';
function Uploadimg() {
  const uploadInput = document.getElementById('upload-input');
  const uploadedImage = document.getElementById('uploaded-image');
  uploadInput.addEventListener('change', e => {
    const file = uploadInput.files[0];
    const reader = new FileReader();
    reader.onload = event => {
      const imageData = event.target.result;
      uploadedImage.src = imageData;
    };
    reader.readAsDataURL(file);
  });
}
function EditProfile(){
  
    return(
        <>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
       
         <div className="content">
  <div className="header-content">
    <a href="#" className="text-home">
      Home
    </a>{" "}
    <span>|</span>
    <a href="#" className="text-home">
      My profile
    </a>
  </div>
  <div className="title">
    <h2 style={{ textAlign: "center", margin: 30 }}>My profile</h2>
  </div>
  <div className="main-content">
    <div className="container">
      <div className="label">Name</div>
      <div>
        <input className="input" type="text" />
      </div>
      <div className="label">Password</div>
      <div>
        <input className="input" type="password" />
      </div>
      <div className="label">Phone number</div>
      <div>
        <input className="input" type="tel" />
      </div>
      <div className="label">Email</div>
      <div>
        <input className="input" type="email" />
      </div>
      <div className="label">Address</div>
      <div>
        <input className="input" type="text" />
      </div>
      <div className="label">State</div>
      <div>
        <select className="select">
          <option value="">Select State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
        </select>
      </div>
      <div className="label">Credit Card</div>
      <div>&nbsp;</div>
      <div className="label">Card number</div>
      <div>
        <input className="input" type="text" />
      </div>
      <div className="label">Expired date</div>
      <div>
        <input className="input" type="text" />
      </div>
      <div className="label">CVV</div>
      <div>
        <input className="input" type="text" />
      </div>
    </div>
    <div className="right-container">
      <div className="change">
        <div style={{ margin: "50% 0" }}>
          <label
            htmlFor="upload-input"
            className="upload-button"
            onClick={Uploadimg}
          >
            Change
          </label>
        </div>
      </div>
      <div>
        <div className="image-upload-container">
          <div className="image-preview">
            <img src="" alt="" id="uploaded-image" />
          </div>
          <div className="upload-actions">
            <input type="file" id="upload-input" />
          </div>
        </div>
        <div
          className="right-item"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            style={{ width: 30, height: 40, marginRight: 15 }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAL5JREFUSEvllLEJAkEQRd8FtmAoGBmZX2QLdqE1WIIlaCEWcJGxNqCpLRgoIyOsBy5/XA6EnWRZmPlv5i+zDQNHM7A+9QFWbuletTZiUQt0LrwAjgpEBYyBM2CnxQ2Y+5nlKICRd24TpGET2CT3HEEB7IC3930te4t1KSCtf/hFaeyVKie6cBFAKQ7npBOEi794/6FTH0BZ3iKL/htwBSZKi0LOBZj2F20JbIGZIJBLOQEb4PDLJofZ0a+iQsAT35YkGWEb0lUAAAAASUVORK5CYII="
          />
          <p className="">Upload avatar</p>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-container">
    <div className="button-container">
      <button className="button">Save</button>
      <button className="button">Cancel</button>
    </div>
  </div>
</div>
        
        </>
    );
}

export default EditProfile;