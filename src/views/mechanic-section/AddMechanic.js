import React, { useState } from 'react'
import {
  CContainer,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import '../../scss/AddEntry.css';
import db from '../../firebase/Config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, getDownloadURL,uploadBytes } from "firebase/storage";
const storage = getStorage();
function AddMechanic() {
  // State to store uploaded file
  const [imageUpload, setImageUpload] = useState(null);
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [uiid, setUiid] = useState("");
  const [cnic, setCNIC] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mechanicProfile, setMechanicProfile] = useState({
    fullName: "",
    email: "",
    city: "",
    mobileNumber: "",
    password: "",
    profession: "",
    cnic: "",
  });
  const user = null;
  const auth = getAuth();
  const saveDatatoFirebase = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
      
    
    
  }
  
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `profileImages/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      console.log("Image has been uploaded")
    });
  };
  const uploadfiles = () => {
    document.getElementById("selectFile").click();
  };
  const handleInputChange = (event) => {
    setImageUpload(event.target.files[0]);
  };
  return (
    <div className="">
      <CContainer>
        
        <div class="login-box">
          <h2>Add Mechanic</h2>
          <form>
            <div class="user-box">
              <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" name="" required="" />
              <label>Full Name</label>
            </div>
            <div class="user-box">
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="" required="" />
              <label>Email</label>
            </div>
            <div class="user-box">
              <input value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} type="text" name="" required="" />
              <label>Mobile Number</label>
            </div>
            <div class="user-box">
              <input value={cnic} onChange={(e) => setCNIC(e.target.value)} type="text" name="" required="" />
              <label>CNIC</label>
            </div>
            <div class="user-box">
              <input value={city} onChange={(e) => setCity(e.target.value)} type="text" name="" required="" />
              <label>City</label>
            </div>
            <div class="user-box">
              <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="" required="" />
              <label>Category</label>
            </div>
            <div class="user-box">
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="" required="" />
              <label>Password</label>
            </div>
            <div class="user-box">
              <input type="password" name="" required="" />
              <label>Confirm Password</label>
            </div>
            <label>Add Profile Picture</label>
          
      <input type='file' onChange={(event)=>{setImageUpload(event.target.files[0])}} className="form-control"></input>
          
                    <br></br>
            
            <button onClick={(event)=>{
              uploadFile();
              saveDatatoFirebase(event);
              db.collection("users").doc(auth.currentUser.uid).set({
                fullName: fullName,
                email: email,
                city: city,
                mobileNumber: mobileNumber,
                password: password,
                category: category,
                profession: "Mechanic",
                profileImageReference: imageUpload.name,
                cnic: cnic,
                rating: '5'
              });
              alert("Data has been added successfully");
              }}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </form>
        </div>
      </CContainer>
    </div>
  );
  
}

export default AddMechanic
