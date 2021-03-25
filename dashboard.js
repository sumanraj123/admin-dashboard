import React, { useState } from "react";
import Notification from "./notification";
function Dashboard() {
    let cardDetails = [
        {
          name: "EARNINGS(MONTHLY)",
          value: 40000,
          currency: "$",
          icon: "fa-calendar",
          color: "primary",
          isProgress: false
        },
    
        {
          name: "EARNINGS(ANNUAL)",
          value: 215000,
          currency: "$",
          icon: "fa-dollar-sign",
          color: "success",
          isProgress: false
        },
        {
          name: "TASKS",
          value: 50,
          percentage: "%",
          icon: "fa-clipboard-list",
          color: "info",
          isProgress: true
        },
        {
          name: "PENDING REQUESTS",
          value: 18,
          icon: "fa-comments",
          color: "warning",
          isProgress: false
        },
      ]
    
      function methodExe(value) {
        setCurrentCard(value);
      }
      const [currentCard, setCurrentCard] = useState("None");
    return (
        <>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>
         <div className="row">
         {
             cardDetails.map((item, index) => {
                 return <Notification key={index} property={item} handleClick={methodExe}></Notification>
             })
         }
         {currentCard}
     </div>
     </>
    );
}
export default Dashboard;