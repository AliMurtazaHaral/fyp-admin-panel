import React, { useEffect, useState } from "react";
import './DeleteVendor.css'
import db from '../../firebase/Config';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
const storage = getStorage();
function DeleteVendor() {
    const [vendorData, setVendorData] = useState([]);
    var [imgUrl, setImgUrl] = useState("");
    useEffect(() => {
        db.collection("users").onSnapshot((snapshot) => {
            setVendorData(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });

    }, []);
    const deleteData = (id) => {
        db.collection("users").doc(id).delete();
    };
    const getImg = (s) => {
        const starsRef = ref(storage, 'profileImages/' + s);
        getDownloadURL(starsRef)
            .then((url) => {
                // Insert url into an <img> tag to "download"
                setImgUrl(url);
            });
        return imgUrl;
    }
    return (
        <>
            {vendorData?.map(({ id, data }) => (
                <>
                    {data.profession === "Vendor" ?
                        <>
                            <div className="container2">
                                <div className="card2">
                                    <div className="imgBx">
                                        <img src={getImg(data.profileImageReference)} />
                                    </div>
                                    <div className="contentBx">
                                        <h2>{data.fullName}</h2>
                                        <div className="size">
                                            <h3>Shope Name : {data.shopName}</h3>
                                        </div>
                                        <div className="color">
                                            <h3>City : {data.city}</h3>
                                        </div>
                                        <button onClick={() => { deleteData(id); }}>Delete</button>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <hr></hr>
                            <br></br>
                        </>
                        : null}
                </>
            ))}
        </>
    );
}
export default DeleteVendor