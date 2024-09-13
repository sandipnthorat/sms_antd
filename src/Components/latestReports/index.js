import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import reportData from "../../assets/report_data.json"
import Report from "./report";

const LatestReport = (props) => {
  const { state } = useLocation();

  return <>
    {state ? <Report id={state.reportId} /> : <h1>LatestReport</h1>}
  </>
};


export default LatestReport;