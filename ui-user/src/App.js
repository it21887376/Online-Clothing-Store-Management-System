import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Delivery from "./pages/Delivery/Delivery";
import Promotion from "./pages/Promotion/Promotion";
import DeliveryList from "./pages/DeliveryList/DeliveryList";
import DeliveryMethod from "./pages/DeliveryMethod/DeliveryMethod";
import Inventory from "./pages/Inventory/index";
import Product from "./pages/Inventory/Product/index";
import Products from "./pages/Inventory/Product/Products";
import ProductType from "./pages/Inventory/Product/ProductType";
import Material from "./pages/Inventory/Material";
import MaterialType from "./pages/Inventory/Material/MaterialType";
import AddToCard from "./pages/AddToCard/AddToCard";
import { CartProvider } from "react-use-cart";
import OutlinedCard from "./components/Suppliers/Suppliers";
import SignIn from "./components/Auth/SignInSide";
import SignUp from "./components/Auth/SignUpSide";
import Profile from "./components/Auth/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container fluid="md">
          <CartProvider>
            <Switch>
              <Route exact path="/" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              <Route path="/home" component={Home} />
              <Route path="/suppliers" component={OutlinedCard} />
              <Route path="/delivery" component={Delivery} />
              <Route path="/promotion" component={Promotion} />
              <Route path="/DeliveryList" component={DeliveryList} />
              <Route path="/DeliveryMethod" component={DeliveryMethod} />
              <Route path="/Product" component={Product} />
              <Route path="/Products" component={Products} />
              <Route path="/ProductType/:id" component={ProductType} />
              <Route path="/Material" component={Material} />
              <Route path="/MaterialType" component={MaterialType} />
              <Route path="/Inventory" component={Inventory} />
              <Route path="/AddToCard" component={AddToCard} />
              <Route path="/Profile" component={Profile} />
            </Switch>
          </CartProvider>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
