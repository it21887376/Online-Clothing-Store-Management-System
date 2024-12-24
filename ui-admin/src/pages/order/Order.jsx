import "./order.css";
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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../components/spinner/Spinner";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

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

export default function OrderList() {
  const [data, setData] = useState([]);
  const getRequest = () => {
    axios
      .get(`http://localhost:4000/api/v1/NewOrder`)
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

  const [searchTerm, setSearchTerm] = useState("");

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="userList">
      <ToastContainer />
      <div>
        <h2>Order Details</h2>
        {data ? (
          data.map((row) => (
            <Accordion
              expanded={expanded === row.id}
              onChange={handleChange(row.id)}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography>{row.id}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell align="right">Image</StyledTableCell>
                        <StyledTableCell align="right">
                          ProductName
                        </StyledTableCell>
                        <StyledTableCell align="right">Brand</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        <StyledTableCell align="right">
                          ProductFor
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          isAvailable
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          quantity
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          itemTotal
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    {row.Items.map((item) => (
                      <TableBody>
                        <StyledTableRow key={item.id}>
                          <StyledTableCell align="right">
                            <img
                              src={item.Image}
                              alt="ProductImg"
                              width={"40px"}
                              style={{ borderRadius: 10 }}
                            ></img>
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {item.ProductName}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {item.Brand}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {item.price}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {item.ProductFor}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {item.isAvailable}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {item.quantity}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {item.itemTotal}
                          </StyledTableCell>
                        </StyledTableRow>
                      </TableBody>
                    ))}
                  </Table>
                </TableContainer>
              </AccordionDetails>
              <center>
              <h1>Total Price - {row.TotalPrice}</h1>
              </center>
            </Accordion>
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
