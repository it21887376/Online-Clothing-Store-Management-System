import "./sidebar.css";
import { LineStyle } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Sidebar() {

  const history = useHistory();
  const logout = () =>{
    localStorage.removeItem("Valid-User");
    history.push("/SignIn");
    window.location.reload(false);
  }

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/promotion" className="link">
              <li className="sidebarListItem">
                Promotion
              </li>
            </Link>
            <Link to="/delivery" className="link">
              <li className="sidebarListItem">
                Delivery
              </li>
            </Link>
            <Link to="/inventoryList" className="link">
              <li className="sidebarListItem">
                Inventory
              </li>
            </Link>
            <Link to="/ProductionList" className="link">
              <li className="sidebarListItem">
                Production
              </li>
            </Link>
            <Link to="/OrderList" className="link">
              <li className="sidebarListItem">
                Order
              </li>
            </Link>
            <Link to="/employee" className="link">
              <li className="sidebarListItem">
                Employee
              </li>
            </Link>
            <Link to="/supplier" className="link">
              <li className="sidebarListItem">
                Supplier
              </li>
            </Link>
            <Link to="/reordersview" className="link">
              <li className="sidebarListItem">
                Re-Order
              </li>
            </Link>
            <Link to="/viewuser" className="link">
              <li className="sidebarListItem">
                Customer
              </li>
            </Link>
            <Link className="link" onClick={logout}>
              <li className="sidebarListItem">
                Logout
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
