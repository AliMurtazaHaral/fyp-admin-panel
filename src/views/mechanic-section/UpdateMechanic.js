import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CImage, CRow, CCol, CCard, CCardHeader, CCardTitle, CCardText, CCardBody } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'
import './DeleteMechanic.css'
import db from '../../firebase/Config'; 
import { getStorage, ref, getDownloadURL } from "firebase/storage";
const storage = getStorage();

function UpdateMechanic () {
  const [mechanicData, setMechanicData] = useState([]);
  var [imgUrl,setImgUrl] = useState("");
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
  const getImg = (s) =>{
    const starsRef = ref(storage,  'profileImages/'+s);
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
  return (
    <>
  
          {mechanicData?.map(({ id, data }) => (
            <>
            <CCard className='card-bg'>
            <CRow >
              <CCol md={4} lg = {4}>
                <CImage rounded src={getImg(data.profileImageReference)} width = {300} height={400} />
              </CCol>
              <CCol md={8} lg = {8}>
                <CCardBody>
                  <h4>{data.fullName}</h4>
                  <h4>CNIC: {data.cnic}</h4>
                  <h4>Profession: {data.profession}</h4>
                  <h4>Cell Number: {data.mobileNumber}</h4>
                  <h4>City: {data.city}</h4>
                  <button class="button-63" onClick={() => {updateData(id);}}>Update</button>
                </CCardBody>
              </CCol>
            </CRow>
          </CCard>
          <br></br>
          <hr></hr>
          <br></br>
          </>
          ))}

    </>
  )
}

export default UpdateMechanic
