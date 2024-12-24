import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./production.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Promotion() {
  const [productionData, setProductionData] = useState();

  const productionID = window.localStorage.getItem("production-id");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/Production/${productionID}`)
      .then((response) => {
        setProductionData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const [TypeofGarment, setTypeofGarment] = useState("");
  const [Gender, setGender] = useState("");
  const [Size_XS, setSize_XS] = useState(0);
  const [Size_S, setSize_S] = useState(0);
  const [Size_M, setSize_M] = useState(0);
  const [Size_L, setSize_L] = useState(0);
  const [Size_XL, setSize_XL] = useState(0);
  const [Design, setDesign] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [RequiredBy, setRequiredBy] = useState("");
  const [Location, setLocation] = useState("");
  const [Status, setStatus] = useState("");

  const UpdatePromotion = () => {
    axios
      .put(`http://localhost:4000/api/v1/Production/${productionID}`, {
        TypeofGarment: TypeofGarment
          ? TypeofGarment
          : productionData?.TypeofGarment,
        Gender: Gender ? Gender : productionData?.Gender,
        Size: [
          {
            XS: Size_XS ? Size_XS : productionData?.Size[0].XS,
            S: Size_S ? Size_S : productionData?.Size[0].S,
            M: Size_M ? Size_M : productionData?.Size[0].M,
            L: Size_L ? Size_L : productionData?.Size[0].L,
            XL: Size_XL ? Size_XL : productionData?.Size[0].XL,
          },
        ],
        Design: Design ? Design : productionData?.Design,
        CompanyName: CompanyName ? CompanyName : productionData?.CompanyName,
        RequiredBy: RequiredBy ? RequiredBy : productionData?.RequiredBy,
        Location: Location ? Location : productionData?.Location,
        Status: Status ? Status : productionData?.Status,
      })
      .then((response) => {
        console.log("response : ", response);
        toast.success("Promotion Details has been Successfully Updated...!");
      })
      .catch((error) => {
        toast.error("Something went wrong, Please try again...!");
        console.log(error);
      });
  };

  return (
    <div className="user">
      <ToastContainer />
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Production</h1>
      </div>
      <div className="userContainer">
        <div className="userUpdate">
          <div className="newUserForm">
            <div className="newUserItem">
              <label>Type of Garment</label>
              <input
                type="text"
                placeholder="Type of Garment"
                defaultValue={productionData?.TypeofGarment}
                onChange={(e) => setTypeofGarment(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Gender</label>
              <input
                type="text"
                placeholder="Gender"
                defaultValue={productionData?.Gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Size - XS</label>
              <input
                type="number"
                placeholder="Size - XSS"
                defaultValue={productionData?.Size[0].XS}
                onChange={(e) => setSize_XS(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Size - S</label>
              <input
                type="number"
                placeholder="Size - S"
                defaultValue={productionData?.Size[0].S}
                onChange={(e) => setSize_S(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Size - M</label>
              <input
                type="number"
                placeholder="Size - M"
                defaultValue={productionData?.Size[0].M}
                onChange={(e) => setSize_M(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Size - L</label>
              <input
                type="number"
                placeholder="Size - L"
                defaultValue={productionData?.Size[0].L}
                onChange={(e) => setSize_L(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Size - XL</label>
              <input
                type="number"
                placeholder="Size - XL"
                defaultValue={productionData?.Size[0].XL}
                onChange={(e) => setSize_XL(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Design</label>
              <input
                type="text"
                placeholder="Design"
                defaultValue={productionData?.Design}
                onChange={(e) => setDesign(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Company Name</label>
              <input
                type="text"
                placeholder="Company Name"
                defaultValue={productionData?.CompanyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>RequiredBy</label>
              <input
                type="date"
                placeholder="RequiredBy"
                defaultValue={productionData?.RequiredBy}
                onChange={(e) => setRequiredBy(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Location</label>
              <input
                type="text"
                placeholder="Location"
                defaultValue={productionData?.Location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Status</label>
              <select
                id="cars"
                name="cars"
                value={Status ? Status : productionData?.Status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="select_status">Select Available Type</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
                <option value="Processing">Processing</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <button className="newUserButton" onClick={UpdatePromotion}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
