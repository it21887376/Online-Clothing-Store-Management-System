import "./deliveryReport.css";
import { useState, useEffect,useRef } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../../components/spinner/Spinner";
import { useHistory } from "react-router-dom";
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function DeliveryList() {
  const [data, setData] = useState([]);
  const getRequest = () => {
    axios
      .get(`http://localhost:4000/api/v1/delivery`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRequest();
  }, [data]);

  const ref = useRef(null)

  const printRef = useRef()


  const handleDownloadImage = async () => {
    const element = printRef.current
    const canvas = await html2canvas(element, {
      backgroundColor: "white",
      logging: true,
      useCORS: true, //to enable cross origin perms
    })

    const data = canvas.toDataURL("image/jpg")
    // const link = document.createElement('a');
    var doc = new jsPDF("l", "mm", [680, 310])

    doc.addImage(data, "PNG", 10, 10)
    doc.save("sample-file.pdf")
  }

  return (
    <div className="userList">
      <ToastContainer />
      <div className="userTitleContainer" style={{ marginRight :"30px", marginLeft: "30px"}}>
        <h1 className="userTitle">{" "}</h1>
        {/* <Link to="/newDelivery">
          <button className="userAddButton">Create</button>
        </Link> */}
        <>
          <button className="userAddButton" onClick={handleDownloadImage}>Download Report</button>
        </>
      </div>
      <TableContainer component={Paper} ref={printRef}>
      <center>
          <h1>Delivery Report</h1>
        </center>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">OrderID</StyledTableCell>
              <StyledTableCell align="right">FirstName</StyledTableCell>
              <StyledTableCell align="right">LastName</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">PhoneNumber</StyledTableCell>
              <StyledTableCell align="right">Country</StyledTableCell>
              <StyledTableCell align="right">ShippingAddress</StyledTableCell>
              <StyledTableCell align="right">DeliveryStatus</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data ? (
              data.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell align="right">
                    {row.OrderID}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.FirstName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.LastName}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.Email}</StyledTableCell>
                  <StyledTableCell align="right">{row.PhoneNumber}</StyledTableCell>
                  <StyledTableCell align="right">{row.Address}</StyledTableCell>
                  <StyledTableCell align="right">{row.ShippingAddress}</StyledTableCell>
                  <StyledTableCell align="right">{row.DeliveryStatus}</StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <Spinner />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
