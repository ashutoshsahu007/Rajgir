import React, { useState } from "react";
import classes from "./AddPerson.module.css";
import { BsBack } from "react-icons/bs";

const AddPerson = ({ onClose }) => {
  const [isAdult, setAdult] = useState();
  const [isChild, setChild] = useState();
  const [isInfant, setInfant] = useState();

  const handleAdd = () => {
    onClose();
    console.log(isAdult);
    console.log(isChild);
    console.log(isInfant);
  };

  return (
    <div style={{ border: "1px solid black", borderRadius: "10px" }}>
      <h4 className={classes.head}>Add Person</h4>
      <div>
        <div className={classes.adults}>
          <h3 className={classes.heading1}>ADULTS (12y+)</h3>
          <div className={classes.buttons}>
            <button
              className={classes.button}
              style={{
                backgroundColor: `${
                  isAdult === 1 ? "rgb(25, 118, 210)" : "white"
                }`,
                color: `${isAdult === 1 ? "white" : "rgb(25, 118, 210)"}`,
                cursor: "pointer",
              }}
              onClick={() => setAdult(1)}
            >
              1
            </button>
            <button
              className={classes.button}
              style={{
                backgroundColor: `${
                  isAdult === 2 ? "rgb(25, 118, 210)" : "white"
                }`,
                color: `${isAdult === 2 ? "white" : "rgb(25, 118, 210)"}`,
                cursor: "pointer",
              }}
              onClick={() => setAdult(2)}
            >
              2
            </button>
            <button
              className={classes.button}
              style={{
                backgroundColor: `${
                  isAdult === 3 ? "rgb(25, 118, 210)" : "white"
                }`,
                color: `${isAdult === 3 ? "white" : "rgb(25, 118, 210)"}`,
                cursor: "pointer",
              }}
              onClick={() => setAdult(3)}
            >
              3
            </button>
            <button
              className={classes.button}
              style={{
                backgroundColor: `${
                  isAdult === 4 ? "rgb(25, 118, 210)" : "white"
                }`,
                color: `${isAdult === 4 ? "white" : "rgb(25, 118, 210)"}`,
                cursor: "pointer",
              }}
              onClick={() => setAdult(4)}
            >
              4
            </button>
            <button
              className={classes.button}
              style={{
                backgroundColor: `${
                  isAdult === 5 ? "rgb(25, 118, 210)" : "white"
                }`,
                color: `${isAdult === 5 ? "white" : "rgb(25, 118, 210)"}`,
                cursor: "pointer",
              }}
              onClick={() => setAdult(5)}
            >
              5
            </button>
            <button
              className={classes.button}
              style={{
                backgroundColor: `${
                  isAdult === 6 ? "rgb(25, 118, 210)" : "white"
                }`,
                color: `${isAdult === 6 ? "white" : "rgb(25, 118, 210)"}`,
                cursor: "pointer",
              }}
              onClick={() => setAdult(6)}
            >
              6
            </button>
          </div>
        </div>
        <div className={classes.children}>
          <h3 className={classes.heading2}>CHILDREN (6-12y)</h3>
          <div className={classes.buttons}>
            <button
              className={classes.button}
              style={{
                backgroundColor: `${
                  isChild === 0 ? "rgb(25, 118, 210)" : "white"
                }`,
                color: `${isChild === 0 ? "white" : "rgb(25, 118, 210)"}`,
                cursor: "pointer",
              }}
              onClick={() => setChild(0)}
            >
              0
            </button>
            <button
              className={classes.button}
              style={{
                backgroundColor: `${
                  isChild === 1 ? "rgb(25, 118, 210)" : "white"
                }`,
                color: `${isChild === 1 ? "white" : "rgb(25, 118, 210)"}`,
                cursor: "pointer",
              }}
              onClick={() => setChild(1)}
            >
              1
            </button>
            <button
              className={classes.button}
              style={{
                backgroundColor: `${
                  isChild === 2 ? "rgb(25, 118, 210)" : "white"
                }`,
                color: `${isChild === 2 ? "white" : "rgb(25, 118, 210)"}`,
                cursor: "pointer",
              }}
              onClick={() => setChild(2)}
            >
              2
            </button>
            <button
              className={classes.button}
              style={{
                backgroundColor: `${
                  isChild === 3 ? "rgb(25, 118, 210)" : "white"
                }`,
                color: `${isChild === 3 ? "white" : "rgb(25, 118, 210)"}`,
                cursor: "pointer",
              }}
              onClick={() => setChild(3)}
            >
              3
            </button>
            <button
              className={classes.button}
              style={{
                backgroundColor: `${
                  isChild === 4 ? "rgb(25, 118, 210)" : "white"
                }`,
                color: `${isChild === 4 ? "white" : "rgb(25, 118, 210)"}`,
                cursor: "pointer",
              }}
              onClick={() => setChild(4)}
            >
              4
            </button>
            <button
              className={classes.button}
              style={{
                backgroundColor: `${
                  isChild === 5 ? "rgb(25, 118, 210)" : "white"
                }`,
                color: `${isChild === 5 ? "white" : "rgb(25, 118, 210)"}`,
                cursor: "pointer",
              }}
              onClick={() => setChild(5)}
            >
              5
            </button>
          </div>
        </div>
        <div className={classes.infacts}>
          <h3 className={classes.heading3}>INFANTS (below 2y)</h3>
          <div className={classes.buttons}>
            <button
              className={classes.button}
              style={{
                backgroundColor: `${
                  isInfant === 0 ? "rgb(25, 118, 210)" : "white"
                }`,
                color: `${isInfant === 0 ? "white" : "rgb(25, 118, 210)"}`,
                cursor: "pointer",
              }}
              onClick={() => setInfant(0)}
            >
              0
            </button>
            <button
              className={classes.button}
              style={{
                backgroundColor: `${
                  isInfant === 1 ? "rgb(25, 118, 210)" : "white"
                }`,
                color: `${isInfant === 1 ? "white" : "rgb(25, 118, 210)"}`,
                cursor: "pointer",
              }}
              onClick={() => setInfant(1)}
            >
              1
            </button>
            <button
              className={classes.button}
              style={{
                backgroundColor: `${
                  isInfant === 2 ? "rgb(25, 118, 210)" : "white"
                }`,
                color: `${isInfant === 2 ? "white" : "rgb(25, 118, 210)"}`,
                cursor: "pointer",
              }}
              onClick={() => setInfant(2)}
            >
              2
            </button>
            <button
              className={classes.button}
              style={{
                backgroundColor: `${
                  isInfant === 3 ? "rgb(25, 118, 210)" : "white"
                }`,
                color: `${isInfant === 3 ? "white" : "rgb(25, 118, 210)"}`,
                cursor: "pointer",
              }}
              onClick={() => setInfant(3)}
            >
              3
            </button>
            <button
              className={classes.button}
              style={{
                backgroundColor: `${
                  isInfant === 4 ? "rgb(25, 118, 210)" : "white"
                }`,
                color: `${isInfant === 4 ? "white" : "rgb(25, 118, 210)"}`,
                cursor: "pointer",
              }}
              onClick={() => setInfant(4)}
            >
              4
            </button>
            <button
              className={classes.button}
              style={{
                backgroundColor: `${
                  isInfant === 5 ? "rgb(25, 118, 210)" : "white"
                }`,
                color: `${isInfant === 5 ? "white" : "rgb(25, 118, 210)"}`,
                cursor: "pointer",
              }}
              onClick={() => setInfant(5)}
            >
              5
            </button>
          </div>
        </div>
      </div>
      <div className={classes.other_btn}>
        <button
          className={classes.button1}
          onClick={() => {
            onClose();
          }}
          style={{ borderRadius: "10px", cursor: "pointer" }}
        >
          cancle
        </button>
        <button
          className={classes.button2}
          onClick={handleAdd}
          style={{ borderRadius: "10px", cursor: "pointer" }}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default AddPerson;
