import "./viewuser.css";
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

export default function ViewUser() {
  const [user, setUser] = useState([]);
  const getRequest = () => {
    axios
      .get(`http://localhost:4000/api/v1/user/`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRequest();
  }, [user]);

  const handleDelete = (_id) => {
    axios
      .delete(`http://localhost:4000/api/v1/user/${_id}`)
      .then((response) => {
        getRequest();
        toast.success("Supplier has been Successfully Deleted...!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong, Please try again...!");
      });
  };

  return (
    <div className="userList">
      <Link to="/newsupplier">
        <button
          className="userAddButton"
          style={{ marginLeft: "90%", marginBottom: "20px", width: "100px" }}
        >
          Add Customer
        </button>
      </Link>
      <ToastContainer />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right"> Name</StyledTableCell>

              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Contact Number</StyledTableCell>

              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell align="right">{row.Name}</StyledTableCell>

                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.Number}</StyledTableCell>

                <StyledTableCell align="right">
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
