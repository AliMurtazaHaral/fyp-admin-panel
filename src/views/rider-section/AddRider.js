import { CContainer } from "@coreui/react";
import React, { useState } from "react";
import '../../scss/AddEntry.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import db from '../../firebase/Config';
import { getStorage, ref, getDownloadURL,uploadBytes } from "firebase/storage";
const storage = getStorage();
function AddRider() {
    const [imageUpload, setImageUpload] = useState(null);
    const [fullName, setFullName] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [bikeNumber, setBikeNumber] = useState("");
    const [cnic, setCNIC] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [uiid, setUiid] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const auth = getAuth();
    const saveDatatoFirebase = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setUiid(user.uid);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
        uploadFile();
        db.collection("users").doc(auth.currentUser.uid).set({
            fullName: fullName,
            email: email,
            address: address,
            city: city,
            bikeNumber: bikeNumber,
            mobileNumber: mobileNumber,
            password: password,
            profession: "Rider",
            profileImageReference: imageUpload,
            cnic: cnic,
            rating:'5'
        });
        db.collection("users").doc(auth.currentUser.uid).set({
            fullName: fullName,
            email: email,
            address: address,
            city: city,
            bikeNumber: bikeNumber,
            mobileNumber: mobileNumber,
            password: password,
            profession: "Rider",
            profileImageReference: imageUpload,
            cnic: cnic,
            rating:'5'
        });
        alert("Data has been added successfully");
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
        <CContainer>
            <div class="login-box">
                <h2>Add Rider</h2>
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
                        <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" name="" required="" />
                        <label>Address</label>
                    </div>
                    
                    <div class="user-box">
                        <input value={bikeNumber} onChange={(e) => setBikeNumber(e.target.value)} type="text" name="" required="" />
                        <label>Bike Number</label>
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
                    <button onClick={saveDatatoFirebase}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </button>
                </form>
            </div>
        </CContainer>
    );
}
export default AddRider;