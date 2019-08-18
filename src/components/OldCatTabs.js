import React from "react";


function OldCatTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <button
          onClick={() => props.handleOccChange("Cook")}
          className={props.currentOcc === "Cook" ? "nav-link active" : "nav-link"}
        >
          Cook
        </button>
      </li>
      <li className="nav-item">
        <button
         
         onClick={() => props.handleOccChange("Owner")}
         className={props.currentOcc === "Owner" ? "nav-link active" : "nav-link"}
        >
          Owner
        </button>
      </li>
      <li className="nav-item">
        <button
          
          onClick={() => props.handleOccChange("Cashier")}
          className={props.currentOcc === "Cashier" ? "nav-link active" : "nav-link"}
        >
          Cashier
        </button>
      </li>
      <li className="nav-item">
        <button
          
          onClick={() => props.handleOccChange("All")}
          className={props.currentOcc === "All" ? "nav-link active" : "nav-link"}
        >
          All
        </button>
      </li>
    </ul>
  );
}

export default OldCatTabs;
