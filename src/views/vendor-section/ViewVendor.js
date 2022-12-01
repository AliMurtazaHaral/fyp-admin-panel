import React, { useEffect, useState } from "react";
import '../../scss/ViewTable.scss';

import db from '../../firebase/Config';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
const storage = getStorage();
function ViewVendor() {
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
    const getImg = (s) => {
        const starsRef = ref(storage, 'profileImages/' + s);
        getDownloadURL(starsRef)
            .then((url) => {
                // Insert url into an <img> tag to "download"
                setImgUrl(url);
            });
        return imgUrl;
    }
    const updateData = (e) => {
        e.preventDefault();
        db.collection("users").doc(dataIdToBeUpdated).update({
            name: updatedCustomerName,
            password: updatedCustomerPassword,
        });
    };
    const deleteData = (id) => {
        db.collection("users").doc(id).delete();
    };
    return (
        <>
            <div class="container-view">
                <ul class="responsive-table">
                    <li class="table-header">
                        <div class="col col-1">Name</div>
                        <div class="col col-2">City</div>
                        <div class="col col-3">Shop Name</div>
                        <div class="col col-4">Rating</div>
                        <div class="col col-5">Action</div>
                    </li>

                    {vendorData?.map(({ id, data }) => (
                        
                        <>
                        {data.profession === "Vendor" ?
                        <>
                            {data.status === "Not Checked" ?
                            <li class="table-row">
                                <div class="col col-1" data-label="Name">{data.fullName}</div>
                                <div class="col col-2" data-label="City">{data.city}</div>
                                <div class="col col-3" data-label="Shop Name">{data.shopName}</div>
                                <div class="col col-4" data-label="Rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                                <div class="col col-5" data-label="Action"><button onClick={() => { deleteData(id); }}>
                                    
                                    Delete
                                </button></div>
                            </li>:null}
                            </>:null}
                        </>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ViewVendor;