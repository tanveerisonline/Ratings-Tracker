import React, { useState } from "react";
import Snapshot from "./snapshot";
export default function Content() {
  const [dateSelected, setdateSelected] = useState("six_months");
  // const [sitesSelected, setSitesSelected] = useState(null);
  const [groupBy, setGroupBy] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [sitesSelected, setSitesSelected] = useState("");

  return (
    <div style={{}}>
        <Snapshot
          
        />
    
     
    </div>
  );
}
