import Sidebar from "../../../components/admin/slidebar/slidebar";
import Navbar from "../../../components/admin/navbar/navbar";
import "./index.scss";
import Widget from "../../../components/admin/Widget/Widget";
import { Outlet } from "react-router-dom";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
// import Table from "../../components/table/Table";

const Admin = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
