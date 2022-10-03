import React, { useEffect, useState } from "react";
import '../../scss/ViewTable.scss';
import db from '../../firebase/Config'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
const storage = getStorage();
function ViewRider() {
    const [riderData, setRiderData] = useState([]);
    var [imgUrl, setImgUrl] = useState("");
    
    
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setRiderData(
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
            <div class="col col-3">Bike Number</div>
            <div class="col col-4">Rating</div>
            <div class="col col-5">Action</div>
          </li>
          {riderData?.map(({ id, data }) => (
            <>
              {data.profession === "Rider" ?
                <>
                  <li class="table-row">
                    <div class="col col-1" data-label="Name">{data.fullName}</div>
                    <div class="col col-2" data-label="City">{data.city}</div>
                    <div class="col col-3" data-label="Bike Number">{data.bikeNumber}</div>
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

export default ViewRider;