import "./featuredInfo.css";
import w1 from "../../assets/images/cash-on-delivery.png";
import w2 from "../../assets/images/delivery-location.png";
import employee from "../../assets/images/businessman-working-on-laptop.png";
import user from "../../assets/images/user.png";
import { useHistory } from "react-router-dom";

export default function FeaturedInfo() {
  const history = useHistory();

  function handleClickDevivery() {
    history.push("/delivery");
  }

  function handleClickPromotion() {
    history.push("/promotion");
  }

  function handleClickInventory() {
    history.push("/inventoryList");
  }

  function handleClickProduction() {
    history.push("/ProductionList");
  }

  function handleClickOrder() {
    history.push("/OrderList");
  }

  function handleClickEmployee() {
    history.push("/employee");
  }

  function handleClickCustomer() {
    history.push("/viewuser");
  }

  function handleClickReOrder() {
    history.push("/reordersview");
  }

  function handleClickSuppier() {
    history.push("/supplier");
  }

  return (
    <div>
      <div className="featured">
        <div className="featuredItem" onClick={handleClickDevivery}>
          <div className="featuredMoneyContainer">
            <img src={w2} alt="delivery" width={200} />
          </div>
          <span className="featuredTitle">Delivery</span>
        </div>
        <div className="featuredItem" onClick={handleClickPromotion}>
          <div className="featuredMoneyContainer">
            <img
              src="https://image.shutterstock.com/image-vector/promotion-rubber-stamp-seal-vector-260nw-1437143363.jpg"
              alt="promotion"
              width={230}
            />
          </div>
          <span className="featuredTitle">Promotion</span>
        </div>
        <div className="featuredItem" onClick={handleClickInventory}>
          <div className="featuredMoneyContainer">
            <img
              src="https://www.camcode.com/wp-content/uploads/2021/08/stockfresh_2261803_inventory-word-stockpile-cardboard-boxes-oversupply-surplus_sizeXS.jpg"
              alt="promotion"
              width={200}
            />
          </div>
          <span className="featuredTitle">Inventory</span>
        </div>
      </div>
      <div className="featured" style={{ marginTop: 20 }}>
        <div className="featuredItem" onClick={handleClickProduction}>
          <div className="featuredMoneyContainer">
            <img
              src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX17790162.jpg"
              alt="promotion"
              width={200}
            />
          </div>
          <span className="featuredTitle">Production</span>
        </div>
        <div className="featuredItem" onClick={handleClickOrder}>
          <div className="featuredMoneyContainer">
            <img
              src="https://thumbs.dreamstime.com/b/order-red-stamp-text-white-44561786.jpg"
              alt="promotion"
              width={200}
            />
          </div>
          <span className="featuredTitle">Orders</span>
        </div>
        <div className="featuredItem" onClick={handleClickSuppier}>
          <div className="featuredMoneyContainer">
            <img src={employee} alt="employee" width={200} />
          </div>
          <span className="featuredTitle">Supplier</span>
        </div>
      </div>
      <div
        className="featured"
        style={{ marginTop: "50px", marginBottom: "30px" }}
      >
        <div className="featuredItem" onClick={handleClickCustomer}>
          <div className="featuredMoneyContainer">
            <img src={w1} alt="employee" width={200} />
          </div>
          <span className="featuredTitle">Customer</span>
        </div>
        <div className="featuredItem" onClick={handleClickReOrder}>
          <div className="featuredMoneyContainer">
            <img src={w2} alt="employee" width={200} />
          </div>
          <span className="featuredTitle">Re-Order Material</span>
        </div>
        <div className="featuredItem" onClick={handleClickEmployee}>
          <div className="featuredMoneyContainer">
            <img src={user} alt="employee" width={200} />
          </div>
          <span className="featuredTitle">Employee</span>
        </div>
      </div>
    </div>
  );
}
