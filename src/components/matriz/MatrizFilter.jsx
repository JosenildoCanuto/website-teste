import PropTypes from 'prop-types';
import { useMemo, useState, useRef, Fragment, useEffect } from 'react';
import { Box } from '@mui/system';
import { HeaderSort } from 'components/third-party/react-table';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

// material-ui
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TableFooter from '@mui/material/TableFooter';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';

// assets
import DownOutlined from '@ant-design/icons/DownOutlined';
import GroupOutlined from '@ant-design/icons/GroupOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import UngroupOutlined from '@ant-design/icons/UngroupOutlined';

// Add these imports at the top
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';

import MainStatus from './matriz-dashboard/MainStatus';
import {Collapse} from '@mui/material';

// third-party
import {
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedMinMaxValues,
  getFacetedUniqueValues,
  flexRender,
  useReactTable,
  sortingFns,
  getSortedRowModel,
  getGroupedRowModel,
  getExpandedRowModel,
} from '@tanstack/react-table';

import { useVirtualizer } from '@tanstack/react-virtual';
import { compareItems, rankItem } from '@tanstack/match-sorter-utils';

// project import
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import { CSVExport, DebouncedInput, EmptyTable } from 'components/third-party/react-table';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';

import getMatrizChipColors from 'utils/matriz-utils/matrizChipColors';


export const fuzzyFilter = (row, columnId, value, addMeta) => {
  // rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // store the ranking info
  addMeta(itemRank);

  // return if the item should be filtered in/out
  return itemRank.passed;
};

// Sample Data
let fakeMatrizData = [
  {
    id: 1,
    sector: 'Biotecnologia',
    tipo: 'item 01',
    objeto: 'Sistema HVAC Scada 298',
    related: [2, 5],
    status: 'Completado',
    gamp: '1',
    proyecto: true,
    riesgo: 363,
  },
  {
    id: 2,
    sector: 'Desarrollo',
    tipo: 'item 02',
    objeto: 'HPLC C22',
    related: [1, 3],
    status: 'Completado',
    gamp: '2',
    proyecto: false,
    riesgo: 2,
  },
  {
    id: 3,
    sector: 'Biotecnologia',
    tipo: 'item 03',
    objeto: 'Balanza Micro',
    related: [2],
    status: 'Iniciado',
    gamp: '3',
    proyecto: false,
    riesgo: 1,
  },
  {
    id: 4,
    sector: 'Biotecnologia',
    tipo: 'item 04',
    objeto: 'TOC XPTO',
    related: [],
    status: 'Pendiente',
    gamp: '1',
    proyecto: true,
    riesgo: 4,
  },
  {
    id: 5,
    sector: 'Biotecnologia',
    tipo: 'Maintenance',
    objeto: 'TOC de un producto super mega crítico',
    related: [1, 4],
    status: 'Crítico',
    gamp: '2',
    proyecto: false,
    riesgo: 3,
  },
];

const statusStyles = {
  Completado: {
    color: 'primary',
    backgroundColor: '#F6FFED',
  },
  Iniciado: {
    color: 'info',
    backgroundColor: '#E6FFFB',
  },
  Pendiente: {
    color: 'warning',
    backgroundColor: '#F0F0F0',
  },
  Crítico: {
    color: 'info',
    backgroundColor: '#FFF1F0',
  },
};

let linkColor = '#1890FF';

// Text Filter Component
export const TextFilter = ({ column }) => (
  <DebouncedInput
    type="text"
    value={column.getFilterValue() ?? ''}
    onChange={(value) => column.setFilterValue(value)}
    placeholder="Search..."
  />
);

// Custom Filter Component
export const CustomFilter = ({ column }) => {
  const { filterComponent } = column.columnDef.meta || {};
  const Component = filterComponent || TextFilter;

  return (
    <Box sx={{ minWidth: 100 }}>
      <Component column={column} />
    </Box>
  );
};

// Objeto Filter Component
export const ObjetoFilter = ({ column }) => {
  const [values, setValues] = useState({
    text1: '',
    relacionados: false,
  });

  useEffect(() => {
    column.setFilterValue(values);
  }, [values]);

  return (
    <Box sx={{ display: 'flex', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, alignItems: 'center' }}>
      <TextField
        size="medium"
        sx={{ width: '100%' }}
        value={values.text1}
        onChange={(e) => setValues((v) => ({ ...v, text1: e.target.value }))}
        placeholder="Nombre del Objeto"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 1, marginRight: 1 }}>
        <Typography variant="caption">Relacionados</Typography>
        <Switch
          checked={values.relacionados}
          onChange={(e) => setValues((v) => ({ ...v, relacionados: e.target.checked }))}
        />
      </Box>
    </Box>
  );
};

// Dropdown Filter Component
export const DropdownFilter = ({ column }) => {
  const filterValue = column.getFilterValue();

  return (
    <Select
      size="medium"
      fullWidth
      value={filterValue || 'All'}
      onChange={(e) => {
        const value = e.target.value === 'All' ? undefined : e.target.value;
        column.setFilterValue(value);
      }}
    >
      <MenuItem value="All">All</MenuItem>
      {column.columnDef.meta?.filterOptions?.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};

// Switch Filter Component
export const SwitchFilter = ({ column }) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Switch
      checked={column.getFilterValue() ?? false}
      onChange={(e) => column.setFilterValue(e.target.checked || undefined)}
    />
  </Box>
);


export const RiskFilter = ({ column }) => {
  const [filterState, setFilterState] = useState({
    level: 'all', // Show all levels initially
    min: '',      // Allow empty value for min
    max: '',      // Allow empty value for max
  });

  useEffect(() => {
    column.setFilterValue(filterState);
  }, [filterState]);

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
      {/* Level Select */}
      <Select
        size="small"
        value={filterState.level}
        onChange={(e) => setFilterState((f) => ({ ...f, level: e.target.value }))}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
        <MenuItem value="3">3</MenuItem>
        <MenuItem value="4">4</MenuItem>
        <MenuItem value="5">5</MenuItem>
      </Select>

      {/* Min Input */}
      <TextField
        type="number"
        size="medium"
        label="Min"
        value={filterState.min}
        onChange={(e) => setFilterState((f) => ({ ...f, min: e.target.value || '' }))}
        inputProps={{ min: 1 }}
        placeholder="Min"
      />

      {/* Max Input */}
      <TextField
        type="number"
        size="medium"
        label="Max"
        value={filterState.max}
        onChange={(e) => setFilterState((f) => ({ ...f, max: e.target.value || '' }))}
        inputProps={{ min: 1 }}
        placeholder="Max"
      />
    </Box>
  );
};


// React Table Component
function ReactTable({ columns, data = fakeMatrizData }) {
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [grouping, setGrouping] = useState([]);
  const [expanded, setExpanded] = useState({});

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      globalFilter,
      sorting,
      grouping,
      expanded,
    },
    onGroupingChange: setGrouping,
    getGroupedRowModel: getGroupedRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    onExpandedChange: setExpanded, // Função para atualizar o estado de expansão
    getSubRows: (row) => row.subRows, // Se você tiver sublinhas
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  

  const { rows } = table.getRowModel();


  return (
    <MainCard content={false}>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" sx={{ padding: 2 }}>
        <Typography variant="h5">Matriz de Validación</Typography>
      </Stack>

      <ScrollX>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableCell
                      key={header.id}
                      sx={{
                        width: header.column.getSize(),
                        cursor: header.column.getCanSort() ? 'pointer' : 'default',
                        userSelect: 'none',
                      }}
                    >
                      {header.isPlaceholder ? null : (
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Box>{flexRender(header.column.columnDef.header, header.getContext())}</Box>
                          {header.column.getCanSort() && <HeaderSort column={header.column} />}
                          {header.column.getCanGroup() && (
                            <IconButton
                              size="small"
                              onClick={header.column.getToggleGroupingHandler()}
                              color={header.column.getIsGrouped() ? 'primary' : 'default'}
                            >
                              {header.column.getIsGrouped() ? <UngroupOutlined /> : <GroupOutlined />}
                            </IconButton>
                          )}
                        </Stack>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>

            <TableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableCell key={header.id} sx={{ width: header.column.getSize() }}>
                      {header.column.getCanFilter() && <CustomFilter column={header.column} />} 
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>

            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <Fragment key={row.id}>
                  <TableRow
                  sx={{cursor: 'pointer'}}
                  onClick={() => row.toggleExpanded()}
                  >
                    {row.getVisibleCells().map((cell) => {
                      let bgcolor = 'background.paper';
                      if (cell.getIsGrouped()) bgcolor = 'primary.lighter';
                      if (cell.getIsAggregated()) bgcolor = 'warning.lighter';
                      if (cell.getIsPlaceholder()) bgcolor = 'error.lighter';

                      return (
                        <TableCell
                          key={cell.id}
                          sx={{
                            bgcolor,
                            width: cell.column.getSize(),
                          }}
                        >
                          {cell.getIsGrouped() ? (
                            <Stack direction="row" alignItems="center" spacing={0.5}>
                              <IconButton
                                color="secondary"
                                onClick={row.getToggleExpandedHandler()}
                                size="small"
                              >
                                {row.getIsExpanded() ? <DownOutlined /> : <RightOutlined />}
                              </IconButton>
                              <Box>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Box>
                              <Box>({row.subRows.length})</Box>
                            </Stack>
                          ) : cell.getIsAggregated() ? (
                            flexRender(cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell, cell.getContext())
                          ) : cell.getIsPlaceholder() ? null : (
                            // Conditionally render columns
                            (() => {
                              // List of columns that should display plain text
                              if (
                                ['sector', 'objeto', 'gamp'].includes(cell.column.id)
                              ) {
                                return <Typography>{cell.getValue()}</Typography>;
                              }

                              // Render the last column as three links
                              if (cell.column.id === 'proyecto') {
                                return (
                                  <Stack direction="row" spacing={3}>
                                    <Typography>{cell.getValue()}</Typography>
                                    <Link
                                      to={`/rota/${row.original.id}`} // Substitua pela sua rota
                                      style={{ textDecoration: 'none' }}>
                                        <Typography
                                          sx={{
                                            color: linkColor,
                                            cursor: 'pointer',
                                            '&:hover': {
                                              textDecoration: 'none',
                                            },
                                            '&:active': {
                                              color: linkColor,
                                            },}}>
                                          Abrir
                                        </Typography>
                                    </Link>
                                  </Stack>
                                );
                              }

                              // Render 'status' column as a Chip
                              if (cell.column.id === 'status') {
                                const status = cell.getValue();
                                const statusStyle = statusStyles[status] || { color: 'default', backgroundColor: '#f5f5f5' };
                                let customFontColor = 'default';


                                let colors = getMatrizChipColors(status)


                                return (
                                  <Chip
                                    
                                    label={status}
                                    color={statusStyle.color}
                                    sx={{
                                      backgroundColor: colors.backgroundColor,
                                      fontWeight: 'bold',
                                      textTransform: 'capitalize',
                                      color: colors.customFontColor,
                                    }}
                                  />
                                );
                              }

                              // Render the last column as three links
                              if (cell.column.id === 'riesgo') {
                                return (
                                  <Stack direction="row" spacing={3}>

                                    <Box sx={{ minWidth: 50, textAlign: 'right' }}>
                                      <Typography>{cell.getValue()}</Typography>
                                    </Box>
                                    
                                    <Link
                                      to={`/rota/${row.original.id}`} // Substitua pela sua rota
                                      style={{ textDecoration: 'none' }}>
                                        <Typography
                                          sx={{
                                            color: linkColor,
                                            cursor: 'pointer',
                                            '&:hover': {
                                              textDecoration: 'none',
                                            },
                                            '&:active': {
                                              color: linkColor,
                                            },}}>
                                          Ver
                                        </Typography>
                                    </Link>

                                    <Link
                                      to={`/rota/${row.original.id}`} // Substitua pela sua rota
                                      style={{ textDecoration: 'none' }}>
                                        <Typography
                                          sx={{
                                            color: linkColor,
                                            cursor: 'pointer',
                                            '&:hover': {
                                              textDecoration: 'none',
                                            },
                                            '&:active': {
                                              color: linkColor,
                                            },}}>
                                          Documentos
                                        </Typography>
                                    </Link>

                                    <Link
                                      to={`/rota/${row.original.id}`} // Substitua pela sua rota
                                      style={{ textDecoration: 'none' }}>
                                        <Typography
                                          sx={{
                                            color: linkColor,
                                            cursor: 'pointer',
                                            '&:hover': {
                                              textDecoration: 'none',
                                            },
                                            '&:active': {
                                              color: linkColor,
                                            },}}>
                                          Workflow
                                        </Typography>
                                    </Link>
                                  </Stack>
                                );
                              }

                              // Default fallback: use normal cell rendering
                              return flexRender(cell.column.columnDef.cell, cell.getContext());
                            })()
                          )}
                        </TableCell>
                        
                      );
                    })}
                  </TableRow>
                  
                  {/* Render the expanded row */}
                  <TableRow>
                    <TableCell colSpan={row.getVisibleCells().length} sx={{ padding: 0 }}>
                      <Collapse in={row.getIsExpanded()} timeout="auto" unmountOnExit>
                        <Box
                          sx={{
                            p: 2,
                            backgroundColor: 'background.paper',
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                          }}
                        >
                          <MainStatus
                            sector={row.original.sector}
                            tipo={row.original.tipo}
                            objeto={row.original.objeto}
                            gamp={row.original.gamp}
                            riesgo={row.original.riesgo}
                            proyecto={row.original.proyecto}
                            status={row.original.status}
                          />
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>


                </Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ScrollX>
    </MainCard>
  );
}

// MatrizFilter Component
export default function MatrizFilter({ data = fakeMatrizData }) {
  const columns = useMemo(
    () => [
      {
        header: 'Sector',
        accessorKey: 'sector',
        meta: {
          filterComponent: TextFilter,
        },
        size: 150,
        enableGrouping: false,
        enableSorting: false,
      },
      {
        header: 'Tipo',
        accessorKey: 'tipo',
        meta: {
          filterComponent: TextFilter,
        },
        size: 150,
        enableGrouping: false,
        enableSorting: false,
      },
      {
        header: 'Objeto',
        accessorKey: 'objeto',
        meta: {
          filterComponent: ObjetoFilter,
        },
        filterFn: (row, columnId, filterValue) => {
          const cellValue = row.getValue(columnId).toLowerCase();
          const searchText = (filterValue?.text1 || '').toLowerCase();
          const showRelated = filterValue?.relacionados || false;
          const hasRelated = row.original.related.length > 0;
          return cellValue.includes(searchText) && (!showRelated || hasRelated);
        },
        size: 300,
        enableGrouping: false,
        enableSorting: false,
      },
      {
        header: 'Status',
        accessorKey: 'status',
        meta: {
          filterComponent: DropdownFilter,
          filterOptions: ['Completado', 'Iniciado', 'Pendiente', 'Crítico'],
        },
        filterFn: (row, columnId, filterValue) => {
          if (!filterValue || filterValue === 'All') return true; // Show all if no filter is applied
          return row.getValue(columnId) === filterValue; // Match the filter value
        },
        size: 150,
        enableGrouping: false,
        enableSorting: false,
      },
      {
        header: 'Gamp',
        accessorKey: 'gamp',
        meta: {
          filterComponent: DropdownFilter,
          filterOptions: ['1', '2', '3', '4'],
        },
        filterFn: (row, columnId, filterValue) => {
          if (!filterValue || filterValue === 'All') return true; // Show all if no filter is applied
          return row.getValue(columnId) === filterValue; // Match the filter value
        },
        size: 150,
        enableGrouping: false,
        enableSorting: false,
      },
      {
        header: 'Proyecto',
        accessorKey: 'proyecto',
        meta: {
          filterComponent: SwitchFilter,
        },
        filterFn: (row, columnId, filterValue) => {
          // Show all when filter is undefined
          return filterValue === undefined ? true : row.getValue(columnId) === filterValue;
        },
        size: 100,
        enableGrouping: false,
        enableSorting: false,
      },
      {
        header: 'Riesgo',
        accessorKey: 'riesgo',
        meta: {
          filterComponent: RiskFilter,
        },
        filterFn: (row, columnId, filterValue) => {
          const riskLevel = row.getValue(columnId);
          const { level, min, max } = filterValue || {};
      
          // If no filter is applied, show all rows
          if (level === 'all' && !min && !max) return true;
      
          // Apply level filter if specified
          if (level && level !== 'all') {
            if (riskLevel !== parseInt(level, 10)) return false;
          }
      
          // Apply min filter if specified
          if (min && riskLevel < parseInt(min, 10)) return false;
      
          // Apply max filter if specified
          if (max && riskLevel > parseInt(max, 10)) return false;
      
          return true;
        },
        size: 300,
        enableGrouping: false,
        enableSorting: false,
      },
    ],
    []
  );

  return <ReactTable {...{ data, columns }} />;
}

ReactTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array.isRequired,
};