import React from "react";
import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useCurrentProduct from "../../Hooks/useCurrentProduct";

const ProductTable = () => {
  const obj = useCurrentProduct("productTable");

  const renderTable = () => {
    return Object.entries(obj).map((list) => (
      <TableRow
        key={list[0]}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
          th: { p: 1, fontSize: "13px", borderBottom: "unset" },
          "th:last-child": { color: "gray" },
          "th:first-of-type": { pl: 0 },
        }}
      >
        <TableCell component="th" scope="row">
          {list[0]}
        </TableCell>
        <TableCell component="th" scope="row">
          {list[1]}
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <Box>
      <Box sx={{ maxWidth: "350px", pt: 1 }}>
        <TableContainer sx={{ boxShadow: "unset" }} component={Paper}>
          <Table aria-label="simple table">
            <TableBody>{renderTable()}</TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default ProductTable;
