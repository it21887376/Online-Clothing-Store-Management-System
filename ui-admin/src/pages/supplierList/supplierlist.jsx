import "./supplierlist.css";
import { useState, useEffect } from "react";
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
// import Spinner from "../../components/spinner/Spinner";

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

export default function SupplierList() {
  const [supply, setSupply] = useState([]);
  const getRequest = () => {
    axios
      .get(`http://localhost:4000/api/v1/supply/`)
      .then((response) => {
        setSupply(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRequest();
  }, [supply]);

  const handleDelete = (_id) => {
    axios
      .delete(`http://localhost:4000/api/v1/supply/${_id}`)
      .then((response) => {
        getRequest();
        toast.success("Supplier has been Successfully Deleted...!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong, Please try again...!");
      });
  };

  function editSupplier(_id) {
    console.log("supplier" + _id);
    window.sessionStorage.setItem("supplierID", _id);
    window.location("/editsupplier");
  }

  return (
    <div className="userList">
      <Link to="/newsupplier">
        <button
          className="userAddButton"
          style={{ marginLeft: "90%", marginBottom: "20px", width: "100px" }}
        >
          Add Supplier
        </button>
      </Link>
      <ToastContainer />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Supplier Name</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Supply Item</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Contact number</StyledTableCell>

              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {supply.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell align="right">
                  {row.SupplierName}
                </StyledTableCell>
                <StyledTableCell align="right">{row.Address}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.SupplyItem}
                </StyledTableCell>
                <StyledTableCell align="right">{row.Email}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.ContactNumber}
                </StyledTableCell>

                <StyledTableCell align="right">
                  <Link to="/editsupplier">
                    <button
                      className="productListEdit"
                      onClick={() => editSupplier(row._id)}
                    >
                      Edit
                    </button>
                  </Link>
                  <DeleteOutline
                    className="productListDelete"
                    onClick={() => handleDelete(row._id)}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}