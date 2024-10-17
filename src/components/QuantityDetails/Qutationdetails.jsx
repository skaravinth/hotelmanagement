import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Divider from '@mui/material/Divider';
import TableHead from '@mui/material/TableHead';
import { Typography } from '@mui/material';

const QuotationSummary = () => {
  return (
   
    <Box
  
  
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '92%',
        height: '72%',
        bgcolor: 'white',
        borderRadius: '12px',
        padding: '16px',
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f5f7fa',
        fontFamily: "Nunito Sans",
      }}
    >
         
      <Box sx={{ flexGrow: 1 }}>
        <TableContainer>
          <Table size="small" aria-label="quotation details">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: '10px',
                    color: '#6B7280',
                    fontWeight: '600',
                    padding: '8px 0',
                    fontFamily: "Nunito Sans",
                  }}
                >
                  DESCRIPTION
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: '10px',
                    color: '#6B7280',
                    fontWeight: '600',
                    padding: '8px 0',
                    fontFamily: "Nunito Sans",
                  }}
                >
                  QTY
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: '10px',
                    color: '#6B7280',
                    fontWeight: '600',
                    padding: '8px 0',
                    fontFamily: "Nunito Sans",
                  }}
                >
                  AMOUNT
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{ fontSize: '14px', color: '#6B7280', borderBottom: 'none', padding: '8px 0', fontFamily: "Nunito Sans", fontWeight: 'bold' }}
                >
                  Total Amount
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: '14px', color: '#6B7280', borderBottom: 'none', padding: '8px 0', fontFamily: "Nunito Sans" }}
                >
                  3
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: 'bold', fontSize: '14px', color: '#1F2937', borderBottom: 'none', padding: '8px 0', fontFamily: "Nunito Sans" }}
                >
                  $ 3,600.00
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{ fontSize: '14px', color: '#6B7280', borderBottom: 'none', padding: '8px 0', fontWeight: 'bold', fontFamily: "Nunito Sans" }}
                >
                  Total Discount
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: '14px', color: '#6B7280', borderBottom: 'none', padding: '8px 0', fontFamily: "Nunito Sans" }}
                >
                  10%
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: '14px', borderBottom: 'none', padding: '8px 0', fontFamily: "Nunito Sans" }}
                >
                  - $ 100.00
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3} sx={{ padding: 0 }}>
                  <Divider />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{ fontSize: '14px', color: '#6B7280', borderBottom: 'none', padding: '8px 0', fontFamily: "Nunito Sans", fontWeight: 'bold' }}
                >
                  Total Refundable
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: '14px', color: '#6B7280', borderBottom: 'none', padding: '8px 0', fontFamily: "Nunito Sans" }}
                >
                  0%
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: 'bold', fontSize: '14px', color: '#1F2937', borderBottom: 'none', padding: '8px 0', fontFamily: "Nunito Sans" }}
                >
                  $ 0
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3} sx={{ padding: '0' }}>
                  <Divider />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{ fontSize: '14px', color: '#6B7280', borderBottom: 'none', padding: '8px 0', fontWeight: 'bold', fontFamily: "Nunito Sans" }}
                >
                  Total Tax
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: '14px', color: '#6B7280', borderBottom: 'none', padding: '8px 0', fontFamily: "Nunito Sans" }}
                >
                  18%
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: 'bold', fontSize: '14px', color: '#1F2937', borderBottom: 'none', padding: '8px 0', fontFamily: "Nunito Sans" }}
                >
                  $ 648.00
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3} sx={{ padding: 0 }}>
                  <Divider />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box>
        <Divider sx={{ marginY: 2 }} />
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#1F2937',
          }}
        >
          <Box>Quote Amount</Box>
          <Box>$ 4,148.00</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QuotationSummary;
