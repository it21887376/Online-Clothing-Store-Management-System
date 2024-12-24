import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./index.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PromotionList from "./pages/Promotion/promotionList/PromotionList";
import Promotion from "./pages/Promotion/promotion/Promotion";
import NewPromotion from "./pages/Promotion/newpromotion/NewPromotion";
import Delivery from "./pages/Delivery/delivery/Delivery";
import DeliveryList from "./pages/Delivery/deliveryList/deliveryList";
import NewDelivery from "./pages/Delivery/newdelivery/NewDelivery";
import NewInventory from "./pages/Inventory/newInventory/NewInventory";
import InventoryList from "./pages/Inventory/InventoryList/InventoryList";
import Inventory from "./pages/Inventory/Inventory/Inventory";
import Production from "./pages/Production/production/Production";
import ProductionList from "./pages/Production/productionList/ProductionList";
import NewProduction from "./pages/Production/newproduction/NewProduction";
import OrderList from "./pages/order/Order";
import PromotionReportGen from "./pages/Promotion/promotionReport/promotionReport";
import InventoryReport from "./pages/Inventory/InventoryReport/InventoryReport";
import DeliveryReport from "./pages/Delivery/deliveryReport/deliveryReport";
import ProductionReport from "./pages/Production/productionReport/ProductionReport";

import EmployeeList from "./pages/emplyeeList/EmployeeList";
import Employee from "./pages/employee/Employee";
import NewEmployee from "./pages/newEmployee/NewEmployee";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import NewSupplier from "./pages/NewSupplier/newsupplier";
import SupplierList from "./pages/supplierList/supplierlist";
import EditSupplier from "./pages/editsupplier/editsupplier";
import ViewUser from "./pages/user/viewuser";
import SignIn from "./Auth/SignInSide";
import Reorder from "./pages/reordermaterial/Reorder";
import ReOrderList from "./pages/reordermaterial/Vieworder";
import ReOrderEdit from "./pages/reordermaterial/EditOrder";

function App() {
  const validUser = localStorage.getItem("Valid-User");

  return (
    <Router>
      {!validUser ? (
        <div className="container">
          <>
            <Route path="/" element={<Redirect to="/SignIn" />}>
              <SignIn />
            </Route>
          </>
        </div>
      ) : (
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/promotion">
                <PromotionList />
              </Route>
              <Route path="/editPromotion">
                <Promotion />
              </Route>
              <Route path="/newPromotion">
                <NewPromotion />
              </Route>
              <Route path="/delivery">
                <DeliveryList />
              </Route>
              <Route path="/editDelivery">
                <Delivery />
              </Route>
              <Route path="/newDelivery">
                <NewDelivery />
              </Route>
              <Route path="/newInventory">
                <NewInventory />
              </Route>
              <Route path="/inventoryList">
                <InventoryList />
              </Route>
              <Route path="/Inventory">
                <Inventory />
              </Route>
              <Route path="/editProduction">
                <Production />
              </Route>
              <Route path="/ProductionList">
                <ProductionList />
              </Route>
              <Route path="/NewProduction">
                <NewProduction />
              </Route>
              <Route path="/OrderList">
                <OrderList />
              </Route>
              <Route path="/promotionReport">
                <PromotionReportGen />
              </Route>
              <Route path="/InventoryReport">
                <InventoryReport />
              </Route>
              <Route path="/deliveryReport">
                <DeliveryReport />
              </Route>
              <Route path="/ProductionReport">
                <ProductionReport />
              </Route>
              <Route path="/employee">
                <EmployeeList />
              </Route>
              <Route path="/editEmployee">
                <Employee />
              </Route>
              <Route path="/newEmployee">
                <NewEmployee />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
              <Route path="/supplier">
                <SupplierList />
              </Route>
              <Route path="/newsupplier">
                <NewSupplier />
              </Route>
              <Route path="/editsupplier">
                <EditSupplier />
              </Route>
              <Route path="/viewuser">
                <ViewUser />
              </Route>
              <Route path="/vieworders">
                <OrderList />
              </Route>
              <Route path="/reordermaterial">
                <Reorder />
              </Route>
              <Route path="/reordersview">
                <ReOrderList />
              </Route>
              <Route path="/editorder">
                <ReOrderEdit />
              </Route>
            </Switch>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
