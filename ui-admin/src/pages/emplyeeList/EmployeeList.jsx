import "./employeeList.css";
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
import Spinner from "../../components/spinner/Spinner";
import { useHistory } from "react-router-dom";

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

export default function UserList() {
  const [data, setData] = useState([]);
  const getRequest = () => {
    axios
      .get(`http://localhost:4000/api/v1/employee`)
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

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/api/v1/employee/${id}`)
      .then((response) => {
        getRequest();
        toast.success("Employee has been Successfully Deleted...!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong, Please try again...!");
      });
  };

  const history = useHistory();

  const handleEdit = (id) => {
    window.localStorage.setItem("employee-id", id);
    history.push("/editEmployee");
  };

  return (
    <div className="userList">
      <ToastContainer />
      <Link to="/newEmployee">
        <button
          className="userAddButton"
          style={{ marginLeft: "90%", marginBottom: "20px", width: "100px" }}
        >
          Add Employee
        </button>
      </Link>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">First Name</StyledTableCell>
              <StyledTableCell align="right">Last Name</StyledTableCell>
              <StyledTableCell align="right">User Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">NIC</StyledTableCell>
              <StyledTableCell align="right">DOB</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data ? (
              data.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell align="right">
                    {row.FirstName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.LastName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.UserName}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.Email}</StyledTableCell>
                  <StyledTableCell align="right">{row.NIC}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.DOB.substring(0, 10)}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.Address}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Link onClick={() => handleEdit(row._id)}>
                      <button className="productListEdit">Edit</button>
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <DeleteOutline
                      className="productListDelete"
                      onClick={() => handleDelete(row._id)}
                    />
                  </StyledTableCell>
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
