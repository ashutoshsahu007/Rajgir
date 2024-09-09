import React, { useContext, useEffect, useRef, useState } from "react";
import classes from "./Body2.module.css";
import { Link } from "react-router-dom";
import { HiArrowSmUp } from "react-icons/hi";
import Modal2 from "../Booth/Modal2";
import { TouristDataProvider } from "../App";
import { FaPencil } from "react-icons/fa6";

const Body2 = () => {
  const [showPreview, setShowPreview] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { touristData, setTouristData } = useContext(TouristDataProvider);
  const [childrenVisitCount, setChildrenVisitCount] = useState(0);
  const [adultVisitCount, setAdultVisitCount] = useState(0);
  const [editStatus, setEditStatus] = useState(false);
  const [category, setCategory] = useState("");
  const [showAdult, setShowAdult] = useState(false);
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    console.log("i am use eeffect");
    setTouristData({
      ...touristData,
      adultAdd: touristData.adultCount,
      childAdd: touristData.childCount,
      initialRenderBody2:
        touristData.initialRenderBody2 === false ? true : true,
    });
  }, []);

  // const options = touristData.visitorData.filter(
  //   (item) => item.category === "adult"
  // );

  console.log("tourist data : \t", touristData);

  // const [adultAdd, setAdultAdd] = useState(touristData.adultCount);
  const [childAdd, setChildAdd] = useState(touristData.childCount);

  const emailRef = useRef("");
  const mobileRef = useRef("");
  const personRef = useRef("");
  const proofRef = useRef("");
  const proofNumberRef = useRef("");

  const [updateData, setUpdateData] = useState([]);

  // console.log(options);

  const [unKnown, setUnKnown] = useState("");

  console.log(touristData);

  return (
    <div className={classes.body2}>
      <div className={classes.preview}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
          onClick={() => setShowPreview(!showPreview)}
        >
          <h1 className={classes.pre}>Preview</h1>
          <h1 style={{ marginRight: "20px", marginTop: "14px" }}>
            <HiArrowSmUp />
          </h1>
        </div>
        {showPreview && (
          <div className={classes.section}>
            <div className={classes.div1} style={{ display: "flex" }}>
              <div>Visiting Date:</div>
              <div style={{ width: "90px" }}>
                {touristData?.visitingDate || 0}
              </div>
            </div>
            <div className={classes.div1} style={{ display: "flex" }}>
              <div style={{}}> Number of Adults:</div>
              <div>{touristData?.adultCount || 0}</div>
            </div>
            <div className={classes.div1} style={{ display: "flex" }}>
              <div style={{}}> Number of Children:</div>
              <div>{touristData?.childCount || 0}</div>
            </div>
            <div className={classes.div1} style={{ display: "flex" }}>
              <div style={{}}> Number of Infants:</div>
              <div>{touristData?.infantCount || 0}</div>
            </div>
          </div>
        )}
      </div>
      {(touristData.adultCount || touristData.childCount) && (
        <h2
          style={{
            color: "green",
            marginLeft: "auto",
            marginRight: "auto",
            width: "800px",
            height: "25px",
          }}
        >
          Total Price :
          {touristData.planPriceAdult * touristData.adultCount +
            touristData.planPriceChild * touristData.childCount}
        </h2>
      )}
      <div className={classes.visitor}>
        <h1 className={classes.pre}>Visitor Details</h1>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "5px",
              color: "blue",
              backgroundColor: "rgb(203, 216, 233)",
              borderRadius: "5px",
              margin: "10px",
            }}
          >
            Adults {touristData?.adultAdd}
            <>&#8725;</>
            {touristData?.adultCount}
          </div>

          <div
            style={{
              padding: "5px",
              color: "blue",
              backgroundColor: "rgb(203, 216, 233)",
              borderRadius: "5px",
              margin: "10px",
            }}
          >
            children {touristData?.childAdd}
            <>&#8725;</>
            {touristData?.childCount}
          </div>
        </div>
        <div>
          {showAdult && <h1>Adult</h1>}
          {touristData?.visitorData && (
            <>
              {touristData.visitorData.map((item) => {
                if (item.category === "adult") {
                  return (
                    <>
                      <span
                        style={{
                          height: "20px",
                          border: "1px solid gray",
                          display: "flex",
                          borderRadius: "10px",
                          padding: "5px",
                          width: "fit-content",
                        }}
                      >
                        <div>Name: {item.name} &nbsp;</div>
                        <div>Gender: {item.gender} &nbsp;</div>
                        <div>Age: {item.age} &nbsp;</div>
                        {/* <button
                          item={item}
                          onClick={() => {
                            setShowModal(true);
                            setEditStatus(!editStatus);
                          }}
                        >
                          <FaPencil />
                        </button> */}
                      </span>
                    </>
                  );
                }
              })}
            </>
          )}
        </div>
        <div>
          {showChild && <h1>Child</h1>}
          {touristData?.visitorData && (
            <>
              {touristData.visitorData.map((item) => {
                if (item.category === "child") {
                  return (
                    <>
                      <div
                        style={{
                          height: "20px",
                          border: "1px solid gray",
                          display: "flex",
                          borderRadius: "10px",
                          padding: "5px",
                          width: "fit-content",
                        }}
                      >
                        <div>Name: {item.name}</div>
                        <div>Gender: {item.gender}</div>
                        <div>Age: {item.age} </div>
                        {/* <button
                          item={item}
                          onClick={() => {
                            setShowModal(true);
                            setEditStatus(!editStatus);
                          }}
                        >
                          <FaPencil />
                        </button> */}
                      </div>
                    </>
                  );
                }
              })}
            </>
          )}
        </div>

        {touristData?.adultAdd && (
          <button
            style={{
              padding: "10px",
              color: "blue",
              backgroundColor: "rgb(203, 216, 233)",
              borderRadius: "5px",
              margin: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              setShowModal(true);
              setUnKnown("Add Adult");
              setCategory("adult");
            }}
          >
            +Add Adults
          </button>
        )}

        {touristData?.childAdd && (
          <button
            style={{
              padding: "10px",
              color: "blue",
              backgroundColor: "rgb(203, 216, 233)",
              borderRadius: "5px",
              margin: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              setShowModal(true);
              setUnKnown("Add Child");
              setCategory("child");
              showAdult(true);
            }}
          >
            +Add Child
          </button>
        )}
      </div>
      <div className={classes.details}>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            setTouristData({
              ...touristData,
              formDetails: [
                {
                  email: emailRef.current.value,
                  mobile: mobileRef.current.value,
                  person: personRef.current.value,
                  proofRef: proofRef.current.value,
                  proofNumberRef: proofNumberRef.current.value,
                },
              ],
            });

            console.log(touristData.formDetails);
          }}
        >
          <h4
            style={{
              marginLeft: "30px",
              paddingTop: "10px",
              color: "rgb(70 145 242)",
              fontSize: "20px",
            }}
          >
            Communication Details
          </h4>
          <div style={{ margin: "10px" }}>
            <input
              ref={emailRef}
              type="emial"
              placeholder="Email"
              style={{ padding: "10px", marign: "5px" }}
            />
            <input
              ref={mobileRef}
              type="number"
              placeholder="Mobile"
              style={{ padding: "10px", margin: "10px" }}
            />
          </div>
          <h4
            style={{
              marginLeft: "30px",
              paddingTop: "10px",
              color: "rgb(70 145 242)",
              fontSize: "20px",
            }}
          >
            Identity Proof
          </h4>
          <div style={{ margin: "10px", display: "flex" }}>
            <div style={{ marginLeft: "10px" }}>
              <select
                id="select1"
                style={{ padding: "10px", marign: "5px" }}
                ref={personRef}
              >
                <option value="" disabled selected>
                  Person
                </option>
                <option value="Aadhar">Aadhar</option>
                <option value="Passport">Passport</option>
                {/* if(touristData.adultAdd && options)
                {options.map((item) => {
                  return <option value="Aadhar">{item.name}</option>;
                })} */}
              </select>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <select
                id="select2"
                style={{ padding: "10px", marign: "5px" }}
                ref={proofRef}
              >
                <option value="" disabled selected>
                  Proof Type
                </option>
                <option value="Aadhar">Aadhar</option>
                <option value="Passport">Passport</option>
                <option value="Driving Licnence">Driving Licence</option>
                <option value="Bank Passbook">Bank Passbook</option>
              </select>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <input
                ref={proofNumberRef}
                type="text"
                placeholder="Proof Number"
                style={{ padding: "10px", marign: "5px" }}
              />
              <button
                type="submit"
                style={{ marginLeft: "30px", padding: "10px 30px" }}
              >
                save
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className={classes.submit}>
        <Link to="/">
          <button
            style={{
              padding: "8px",
              margin: "10px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Back
          </button>
        </Link>
        <Link to="/body3">
          <button
            style={{
              padding: "8px",
              backgroundColor: "rgb(0,0,255)",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Save & Continue
          </button>
        </Link>
      </div>
      {showModal && (
        <Modal2
          childrenVisitCount={childrenVisitCount}
          adultVisitCount={adultVisitCount}
          onClose={() => setShowModal(false)}
          unKnown={unKnown}
          editStatus={editStatus}
          setEditStatus={setEditStatus}
          category={category}
          setShowAdult={setShowAdult}
          setShowChild={setShowChild}
          setChildAdd={setChildAdd}
        />
      )}
    </div>
  );
};

export default Body2;
