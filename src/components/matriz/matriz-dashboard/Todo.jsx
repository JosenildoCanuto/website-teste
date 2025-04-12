import React from 'react';
import { useReactTable, flexRender, getCoreRowModel } from '@tanstack/react-table';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
  Box,
  Stack,
  IconButton,
} from '@mui/material';

import { MoreOutlined } from '@ant-design/icons';
import Typography from '@mui/material/Typography';

// Sample data for the table
const data = [
  {
    todo: 'Criar SOPs',
    estado: 'Nueva',
    responsable: '',
    meta: '1 Dec 2022',
  },
  {
    todo: 'Aplicar OQ',
    estado: 'Pendiente',
    responsable: 'Barney Thea',
    meta: '7 Dec 2022',
  },
  {
    todo: 'Evento Pressión',
    estado: 'Cerrado',
    responsable: 'Barney Thea',
    meta: '27 Nov 2022',
  },
  {
    todo: 'URS',
    estado: 'Aprobación',
    responsable: 'John Doe',
    meta: '20 Dec 2022',
  },
];

// Define the columns
const columns = [
  {
    header: 'To Do',
    accessorKey: 'todo', // Maps to the "todo" key in the data
    cell: (cell) => (
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: '100%' }}
      >
        <Typography>{cell.getValue()}</Typography>
        <IconButton size="small">
        <MoreOutlined style={{ fontSize: '1.5rem' }} />

        </IconButton>
      </Stack>
    ),
  },
  {
    header: 'Estado',
    accessorKey: 'estado', // Maps to the "estado" key in the data
  },
  {
    header: 'Responsable',
    accessorKey: 'responsable', // Maps to the "responsable" key in the data
  },
  {
    header: 'Meta',
    accessorKey: 'meta', // Maps to the "meta" key in the data
  },
];

function TodoListTable() {
  // Create the table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <TableContainer
        component={Paper}
        sx={{
          flex: 1, // Expands to fill available height
          maxWidth: 800,
          marginTop: 0,
          boxShadow: 0,
          overflow: 'auto', // Enables scrolling if content overflows
        }}
      >
        <Table sx={{ height: '100%' }}>
          <TableHead sx={{ borderTop: 'none' }}>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} sx={{ borderTop: 'none' }}>
                {headerGroup.headers.map((header) => (
                  <TableCell
                    key={header.id}
                    sx={{
                      fontWeight: 'bold',
                      padding: '16px',
                      borderBottom: '1px solid rgba(224, 224, 224, 1)',
                      backgroundColor: 'white',
                      borderTop: 'none',
                    }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    sx={{
                      padding: '16px',
                      borderBottom: '1px solid rgba(224, 224, 224, 1)',
                      ...(cell.column.id === 'todo' && { paddingRight: 0 }), // Remove paddingRight if column is 'todo'
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TodoListTable;