import "./newProduction.css";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function NewPromotion() {

  const [TypeofGarment, setTypeofGarment] = useState('');
  const [Gender, setGender] = useState('');
  const [Size_XS, setSize_XS] = useState(0);
  const [Size_S, setSize_S] = useState(0);
  const [Size_M, setSize_M] = useState(0);
  const [Size_L, setSize_L] = useState(0);
  const [Size_XL, setSize_XL] = useState(0);
  const [Design, setDesign] = useState('');
  const [CompanyName, setCompanyName] = useState('');
  const [RequiredBy, setRequiredBy] = useState('');
  const [Location, setLocation] = useState('');

  const createProduction = () => {
    if(TypeofGarment === '' || Gender === '' || Size_XS === 0 || Size_S === 0 || Size_M === 0 || Size_L === 0 || Size_XL === 0 || Design === '' || CompanyName === '' || RequiredBy === '' || Location === ''){
      toast.warn("Please fill all required fields...!");
    }else{
      axios.post('http://localhost:4000/api/v1/Production',{
        TypeofGarment : TypeofGarment,
        Gender : Gender,
        Size: [
            {
                XS : Size_XS,
                S : Size_S,
                M : Size_M,
                L : Size_L,
                XL : Size_XL
            }
        ],
        Design : Design,
        CompanyName : CompanyName,
        RequiredBy : RequiredBy,
        Location : Location
      }).then((res)=>{
        toast.success("New Production Successfully Created...!");
        setTypeofGarment('');
        setGender('');
        setSize_XS(0);
        setSize_S(0);
        setSize_M(0);
        setSize_L(0);
        setSize_XL(0);
        setDesign('');
        setCompanyName('');
        setRequiredBy('');
        setLocation('');
      }).catch((err)=>{
        console.log(err);
        toast.error("Something went wrong, Please try again...!");
      })
    }
  }

  return (
    <div className="newUser">
      <ToastContainer/>
      <h1 className="newUserTitle">New Production</h1>
      <div className="newUserForm">
        <div className="newUserItem">
          <label>Type of Garment</label>
          <input type="text" placeholder="Type of Garment" value={TypeofGarment} onChange={(e) => setTypeofGarment(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <input type="text" placeholder="Gender" value={Gender} onChange={(e) => setGender(e.target.value)}/>
        </div>
        <div className="newUserItem">
            <label>Size - XS</label>
            <input type="number" placeholder="Size - XSS" value={Size_XS} onChange={(e) => setSize_XS(e.target.value)}/>
        </div>
        <div className="newUserItem">
            <label>Size - S</label>
            <input type="number" placeholder="Size - S" value={Size_S} onChange={(e) => setSize_S(e.target.value)}/>
        </div>
        <div className="newUserItem">
            <label>Size - M</label>
            <input type="number" placeholder="Size - M" value={Size_M} onChange={(e) => setSize_M(e.target.value)}/>
        </div>
        <div className="newUserItem">
            <label>Size - L</label>
            <input type="number" placeholder="Size - L" value={Size_L} onChange={(e) => setSize_L(e.target.value)}/>
        </div>
        <div className="newUserItem">
            <label>Size - XL</label>
            <input type="number" placeholder="Size - XL" value={Size_XL} onChange={(e) => setSize_XL(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Design</label>
          <input type="text" placeholder="Design" value={Design} onChange={(e) => setDesign(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Company Name</label>
          <input type="text" placeholder="Company Name" value={CompanyName} onChange={(e) => setCompanyName(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>RequiredBy</label>
          <input type="date" placeholder="RequiredBy" value={RequiredBy} onChange={(e) => setRequiredBy(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Location</label>
          <input type="text" placeholder="Location" value={Location} onChange={(e) => setLocation(e.target.value)}/>
        </div>
        <button className="newUserButton" onClick={createProduction}>Create</button>
      </div>
    </div>
  );
}
