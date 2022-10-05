import React, { useEffect, useState, createRef } from 'react'
import { CImage, CRow, CCol, CCard, CCardHeader, CCardTitle, CCardText, CCardBody } from '@coreui/react'
import db from '../../firebase/Config'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import '../../scss/ViewTable.scss'
const storage = getStorage();
function ViewMechanic() {
  const [mechanicData, setMechanicData] = useState([]);
  var [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setMechanicData(
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
            <div class="col col-3">Category</div>
            <div class="col col-4">Rating</div>
            <div class="col col-5">Action</div>
          </li>
          <li class="table-row">
                    <div class="col col-1" data-label="Name">Syed Faizan Raza</div>
                    <div class="col col-2" data-label="City">Islamabad</div>
                    <div class="col col-3" data-label="category">Automobile Mechanic</div>
                    <div class="col col-4" data-label="Rating">5 Star</div>
                    <div class="col col-5" data-label="Action"><button onClick={() => { deleteData(id); }}>
                      Delete
                    </button></div>
                  </li>
                  <li class="table-row">
                    <div class="col col-1" data-label="Name">Ameer Hamza Abbasi</div>
                    <div class="col col-2" data-label="City">Rawalpindi</div>
                    <div class="col col-3" data-label="category">Bike Mechanic</div>
                    <div class="col col-4" data-label="Rating">5 Star</div>
                    <div class="col col-5" data-label="Action"><button onClick={() => { deleteData(id); }}>
                      Delete
                    </button></div>
                  </li>
          {mechanicData?.map(({ id, data }) => (
            <>
              {data.profession === "Mechanic" ?
                <>
                  <li class="table-row">
                    <div class="col col-1" data-label="Name">{data.fullName}</div>
                    <div class="col col-2" data-label="City">{data.city}</div>
                    <div class="col col-3" data-label="category">{data.category}</div>
                    <div class="col col-4" data-label="Rating">5 Star</div>
                    <div class="col col-5" data-label="Action"><button onClick={() => { deleteData(id); }}>
                      Delete
                    </button></div>
                  </li>
                </>
                : null}

            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ViewMechanic
