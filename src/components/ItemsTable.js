import React from 'react'
import {TableContainer, Table, TableHead, TableRow, TableBody, TableCell} from "carbon-components-react";

const ItemsTable = ({rows}) => {

    const cells = (rows) => {
        return rows.map((r, i) =>{
            return (
            <TableRow key={i}>
                <TableCell>{i}</TableCell>
                <TableCell>{r}</TableCell>
            </TableRow>
            )
        })
    };

  return (
      <TableContainer title={""} description={""}>
          <Table className="table table-striped">
              <TableHead>
                  <TableRow>
                      <TableCell key={1}>Index</TableCell>
                      <TableCell key={2}>ItemName</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {cells(rows)}
              </TableBody>
          </Table>

      </TableContainer>
  )
};

export default ItemsTable;