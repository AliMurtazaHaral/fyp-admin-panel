import { CContainer } from "@coreui/react";
import React, { useState } from "react";
import '../../scss/AddEntry.css';
import db from '../../firebase/Config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
const storage = getStorage();
function AddVendor() {
    const [imageUpload, setImageUpload] = useState(null);
    const [shopImageUpload, setShopImageUpload] = useState(null);
    const [fullName, setFullName] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [shopName, setShopName] = useState("");
    const [shopRegistrationNumber, setShopRegistrationNumber] = useState("");
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
        
        db.collection("users").doc(auth.currentUser.uid).set({
            fullName: fullName,
            email: email,
            address: address,
            city: city,
            shopName: shopName,
            shopRegistrationNumber: shopRegistrationNumber,
            mobileNumber: mobileNumber,
            password: password,
            profileImageReference: imageUpload,
            profession: "Vendor",
            status: "Checked",
            cnic: cnic,
            rating: "5",
            shopImageReference: shopImageUpload
        });
        
    }
    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `profileImages/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            setImageUpload(imageUpload.name);
            console.log("Image has been uploaded")
        });
    };
    const uploadShopImage = () => {
        if (shopImageUpload == null) return;
        const imageRef = ref(storage, `shopImages/${shopImageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            setShopImageUpload(shopImageUpload.name);
        });
    };
    const uploadfiles = () => {
        document.getElementById("selectFile").click();
    };
    const handleInputChange = (event) => {
        setImageUpload(event.target.files[0]);
        uploadFile();
    };
    const handleShopChange = (event) => {
        setShopImageUpload(event.target.files[0]);
        uploadShopImage();
    };
    return (
        <CContainer>
            <div class="login-box">
                <h2>Add Shop</h2>
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
                        <input value={shopName} onChange={(e) => setShopName(e.target.value)} type="text" name="" required="" />
                        <label>Shop Name</label>
                    </div>
                    <div class="user-box">
                        <input value={shopRegistrationNumber} onChange={(e) => setShopRegistrationNumber(e.target.value)} type="text" name="" required="" />
                        <label>Shop Registeration Number</label>
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
                    <input type='file' onChange={(event) => { setImageUpload(event.target.files[0]) }} className="form-control"></input>
                    <br />
                    <label>Add Shop Picture</label>
                    <input type='file' onChange={(event) => { setShopImageUpload(event.target.files[0]) }} className="form-control"></input>

                    <br></br>
                    <button onClick={(event)=>{
                        uploadFile();
                        uploadShopImage();
                        saveDatatoFirebase(event);
                        db.collection("users").doc(auth.currentUser.uid).set({
                            fullName: fullName,
                            email: email,
                            address: address,
                            city: city,
                            shopName: shopName,
                            shopRegistrationNumber: shopRegistrationNumber,
                            mobileNumber: mobileNumber,
                            password: password,
                            profileImageReference: imageUpload,
                            profession: "Vendor",
                            status: "Checked",
                            cnic: cnic,
                            rating: "5",
                            shopImageReference: shopImageUpload
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
    );
}
export default AddVendor;