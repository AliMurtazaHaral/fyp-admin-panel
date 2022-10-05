import React, { useEffect, useState } from "react";
import '../../scss/ViewTable.scss';
import './ViewVendor.scss';
import db from '../../firebase/Config';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import ApproveVendors from "./ApproveVendor";
import { Navigate } from "react-router-dom";
const storage = getStorage();
function ManageVendors() {
    const [vendorData, setVendorData] = useState([]);
    const [toggle, setToggle] = useState(false);
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
    const updateData = (id) => {
        db.collection("users").doc(id).update({
            'status': "Approved"
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
                        <div class="col col-2">Shop Name</div>
                        <div class="col col-3">Action</div>
                        <div class="col col-4">Action</div>
                        <div class="col col-5">Action</div>
                    </li>
                    <li class="table-row">
                                        <div class="col col-1" data-label="Name">Syed Faizan Raza</div>
                                        <div class="col col-2" data-label="Shope Name">Syed AutoMobile</div>
                                        <div class="col col-3" data-label="Action"><button onClick={() => { updateData(id) }}>
                                            APPROVE
                                        </button></div>
                                        <div class="col col-4" data-label="Action"><button onClick={() => { deleteData(id) }}>
                                            DISAPPROVE
                                        </button></div>
                                        <div class="col col-5" data-label="Action"><button onClick={() => { setToggle(true) }}>

                                            View More
                                        </button></div>

                                    </li>
                                    <li class="table-row">
                                        <div class="col col-1" data-label="Name">Ali Murtaza Haral</div>
                                        <div class="col col-2" data-label="Shope Name">Haral Dealers</div>
                                        <div class="col col-3" data-label="Action"><button onClick={() => { updateData(id) }}>
                                            APPROVE
                                        </button></div>
                                        <div class="col col-4" data-label="Action"><button onClick={() => { deleteData(id) }}>
                                            DISAPPROVE
                                        </button></div>
                                        <div class="col col-5" data-label="Action"><button onClick={() => { setToggle(true) }}>

                                            View More
                                        </button></div>

                                    </li>
                                    <li class="table-row">
                                        <div class="col col-1" data-label="Name">Ameer Hamza Abbasi</div>
                                        <div class="col col-2" data-label="Shope Name">Abbasi Spare parts</div>
                                        <div class="col col-3" data-label="Action"><button onClick={() => { updateData(id) }}>
                                            APPROVE
                                        </button></div>
                                        <div class="col col-4" data-label="Action"><button onClick={() => { deleteData(id) }}>
                                            DISAPPROVE
                                        </button></div>
                                        <div class="col col-5" data-label="Action"><button onClick={() => { setToggle(true) }}>

                                            View More
                                        </button></div>

                                    </li>
                    {vendorData?.map(({ id, data }) => (
                        <>
                            {data.status === "Not Checked" ?
                                <>
                                    <li class="table-row">
                                        <div class="col col-1" data-label="Name">{data.fullName}</div>
                                        <div class="col col-2" data-label="Shope Name">{data.shopName}</div>
                                        <div class="col col-3" data-label="Action"><button onClick={() => { updateData(id) }}>
                                            APPROVE
                                        </button></div>
                                        <div class="col col-4" data-label="Action"><button onClick={() => { deleteData(id) }}>
                                            DISAPPROVE
                                        </button></div>
                                        <div class="col col-5" data-label="Action"><button onClick={() => { setToggle(true) }}>

                                            View More
                                        </button></div>

                                    </li>
                                    {toggle === true ?
                                        <>
                                            <div class="container">

                                                <div class="card">
                                                    <div class="face face1">
                                                        <img src={getImg(data.profileImageReference)} height={'80%'} width={200} />
                                                        <div class="content">
                                                            <span class="stars"></span>
                                                            <p class="java">CNIC: {data.cnic}</p>
                                                            <p class="java">EMAIL: {data.email}</p>
                                                            <p class="java">MOBILE NUMBER: {data.mobileNumber}</p>
                                                            <p class="java">SHOP NAME: {data.shopName}</p>
                                                            <p class="java">SHOP REGISTRATION NUMBER: {data.shopRegistrationNumber}</p>
                                                            <p class="java">CITY: {data.city}</p>
                                                            <p class="java">ADDRESS: {data.address}</p>
                                                            <button onClick={() => { setToggle(false) }}>

                                                                View Less
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="face face2">
                                                        <h2>{data.fullName}</h2>
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                        : null}
                                </>
                                : null}
                        </>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ManageVendors;