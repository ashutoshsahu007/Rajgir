import React, { useState, useEffect } from "react";
import Plans from "./Plans";
import Proceed from "./Proceed";
import classes from "./Body.module.css";
import Other from "./Other";
import Modal from "../Booth/Modal";

const Body = () => {
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    setMinDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const [showModal, setShowModal] = useState(false);

  return (
    <main className={classes.body}>
      <div>
        <div className={classes.second}>
          <div>
            <h1 className={classes.title}>Your Safari Awaits:</h1>
            <h1 className={classes.ticket}>Book Your Tickets</h1>
            <h1 className={classes.safari}>for a Safari Adventure!</h1>
            <div className={classes.section}>
              <div className={classes.date}>
                <input type="date" min={minDate} />
              </div>
              <div className={classes.visit}>
                <button onClick={() => setShowModal(true)}>Add Visitors</button>
              </div>
            </div>
          </div>
          <div>
            <img src="src\assets\heroimg.png" className={classes.heroimg} />
          </div>
        </div>
      </div>
      <div>
        <Plans />
      </div>

      <Other />

      <div className="proceed">
        <Proceed />
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </main>
  );
};

export default Body;
