import React, { useContext, useState } from "react";
import classes from "./Body2.module.css";
import { Link } from "react-router-dom";
import { HiArrowCircleUp } from "react-icons/hi";
import { HiArrowSmUp } from "react-icons/hi";
import Modal2 from "../Booth/Modal2";
import { TouristDataProvider } from "../App";
import { FaLeaf } from "react-icons/fa";

const Body2 = () => {
  const [showPreview, setShowPreview] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { touristData, setTouristData } = useContext(TouristDataProvider);
  const [childrenVisitCount, setChildrenVisitCount] = useState(0);
  const [adultVisitCount, setAdultVisitCount] = useState(0);

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
            Adults {touristData?.adultCount}
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
            children{touristData?.adultCount}
            <>&#8725;</>
            {touristData?.adultCount}
          </div>
        </div>
        <div>
          {touristData?.adultCount && (
            <button
              style={{
                padding: "10px",
                color: "blue",
                backgroundColor: "rgb(203, 216, 233)",
                borderRadius: "5px",
                margin: "10px",
              }}
              id="adult"
              onClick={(e) => {
                setShowModal(true);
                console.log(e.target.id);
                setTouristData({ ...touristData, id: e.target.value });
              }}
            >
              + Add adults
            </button>
          )}

          {touristData?.childCount && (
            <button
              style={{
                padding: "10px",
                color: "blue",
                backgroundColor: "rgb(203, 216, 233)",
                borderRadius: "5px",
                margin: "10px",
              }}
              id="child"
              onClick={(e) => {
                setShowModal(true);
                console.log(e.target.id);
                setTouristData({ ...touristData, id: e.target.value });
              }}
            >
              + Add Child
            </button>
          )}
        </div>
      </div>
      <div className={classes.details}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
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
              type="emial"
              placeholder="Email"
              style={{ padding: "10px", marign: "5px" }}
            />
            <input
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
              <select id="select1" style={{ padding: "10px", marign: "5px" }}>
                <option value="" disabled selected>
                  Person
                </option>
                <option value="option1">Aadhar</option>
              </select>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <select id="select2" style={{ padding: "10px", marign: "5px" }}>
                <option value="" disabled selected>
                  Proof Type
                </option>
                <option value="option1">Aadhar</option>
                <option value="option2">Passport</option>
                <option value="option3">Driving Licence</option>
                <option value="option3">Bank Passbook</option>
              </select>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <input
                type="text"
                placeholder="Proof Number"
                style={{ padding: "10px", marign: "5px" }}
              />
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
        />
      )}
    </div>
  );
};

export default Body2;
