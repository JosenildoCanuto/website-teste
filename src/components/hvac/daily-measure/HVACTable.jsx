import PropTypes from 'prop-types';
import { useMemo, useState, useRef, Fragment } from 'react';
import { Box } from '@mui/system';
import { HeaderSort } from 'components/third-party/react-table';

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
import makeHVACTableData from 'utils/HVACMockDataGen';
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import { CSVExport, DebouncedInput, EmptyTable, Filter } from 'components/third-party/react-table';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';

export const fuzzyFilter = (row, columnId, value, addMeta) => {
  // rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // store the ranking info
  addMeta(itemRank);

  // return if the item should be filtered in/out
  return itemRank.passed;
};

export const fuzzySort = (rowA, rowB, columnId) => {
  let dir = 0;

  // only sort by rank if the column has ranking information
  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(rowA.columnFiltersMeta[columnId], rowB.columnFiltersMeta[columnId]);
  }

  // provide an alphanumeric fallback for when the item ranks are equal
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data }) {
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [grouping, setGrouping] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      globalFilter,
      sorting,
      grouping
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
    globalFilterFn: fuzzyFilter
  });

  let headers = [];
  table.getAllColumns().map((columns) =>
    headers.push({
      label: typeof columns.columnDef.header === 'string' ? columns.columnDef.header : '#',
      // @ts-ignore
      key: columns.columnDef.accessorKey
    })
  );

  const { rows } = table.getRowModel();

  const tableContainerRef = useRef(null);
  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 34,
    overscan: 10
  });

  const virtualRows = rowVirtualizer.getVirtualItems();
  const totalSize = rowVirtualizer.getTotalSize();

  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const paddingBottom = virtualRows.length > 0 ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0) : 0;

  return (
    <MainCard content={false}>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" sx={{ padding: 2 }}>
        <DebouncedInput
          value={globalFilter ?? ''}
          onFilterChange={(value) => setGlobalFilter(String(value))}
          placeholder={`Search ${data.length} measurements...`}
        />
          {grouping.length === 0 && (
    <CSVExport
      {...{
        data: table.getRowModel().rows.map((d) => d.original),
        headers,
        filename: 'filtering.csv',
      }}
    />
  )}
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
                    {...header.column.columnDef.meta}
                    onClick={header.column.getToggleSortingHandler()}
                    sx={{ 
                      cursor: header.column.getCanSort() ? 'pointer' : 'default', // Aplicação direta via sx
                      userSelect: 'none' // Substitui a classe prevent-select
                    }}
                  >
                    {header.isPlaceholder ? null : (
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Box>{flexRender(header.column.columnDef.header, header.getContext())}</Box>
                        {header.column.getCanSort() && <HeaderSort column={header.column} />}
                        
                        {/* Grouping Buttom*/}
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
                    <TableCell key={header.id} {...header.column.columnDef.meta}>
                      {header.column.getCanFilter() && <Filter column={header.column} table={table} />}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <Fragment key={row.id}>
              
              <TableRow>
                {row.getVisibleCells().map((cell) => {
                  let bgcolor = 'background.paper';
                  if (cell.getIsGrouped()) bgcolor = 'primary.lighter';
                  if (cell.getIsAggregated()) bgcolor = 'warning.lighter';
                  if (cell.getIsPlaceholder()) bgcolor = 'error.lighter';

                  return (
                    <TableCell key={cell.id} sx={{ bgcolor }}>
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
                        flexRender(cell.column.columnDef.cell, cell.getContext())
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>

              
              {row.getIsExpanded() && row.subRows.map((subRow) => (
                <TableRow key={subRow.id}>
                  {subRow.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </Fragment>
          ))}
        </TableBody>
            <TableFooter>
              {table.getFooterGroups().map((footerGroup) => (
                <TableRow key={footerGroup.id}>
                  {footerGroup.headers.map((footer) => (
                    <TableCell key={footer.id} {...footer.column.columnDef.meta}>
                      {footer.isPlaceholder ? null : flexRender(footer.column.columnDef.header, footer.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableFooter>
          </Table>
        </TableContainer>
      </ScrollX>
    </MainCard>
  );
}

// ==============================|| REACT TABLE - FILTERING ||============================== //

export default function HVACTable({data}) {


  const columns = useMemo(
    () => [
      {
        header: 'Room',
        footer: 'Room',
        accessorKey: 'roomNumber',
        enableSorting: true,
        enableGrouping: true
      },
      {
        header: 'Description',
        footer: 'Description',
        accessorKey: 'roomName',
        enableSorting: false,
        enableGrouping: false
      },
      {
        header: 'Pressure',
        footer: 'Pressure',
        accessorKey: 'pressure',
        enableGrouping: false

      },
      {
        header: 'Adjacent Pressure',
        footer: 'Adjacent Pressure',
        accessorKey: 'adjacentRoomInfo.pressure',
        enableGrouping: false
      },
      {
        header: 'Differential',
        footer: 'Differential',
        accessorKey: 'differential',
        enableGrouping: false

      },
      {
        header: 'Risk',
        footer: 'Risk',
        accessorKey: 'risk',
        enableGrouping: true,

        // Custom sorting function
        sortingFn: (rowA, rowB, columnId) => {
          const order = {
            high: 3,
            medium: 2,
            low: 1,
            '': 0
          };

          // Obtem o valor de cada linha para a coluna 'risk'
          const a = order[rowA.getValue(columnId)] ?? 0;
          const b = order[rowB.getValue(columnId)] ?? 0;
          return a - b;
        },
        cell: (props) => {
          // Renderiza os Chips conforme o valor
          switch (props.getValue()) {
            case 'high':
              return <Chip color="error" label="High" size="small" variant="light" />;
            case 'medium':
              return <Chip color="warning" label="Medium" size="small" variant="light" />;
            case 'low':
              return <Chip color="success" label="Low" size="small" variant="light" />;
            default:
              return null;
          }
        }
      },
      {
        header: 'Adjacent Room',
        footer: 'Adjacent Room',
        accessorKey: 'adjacentRoomInfo.number',
      },
      {
        header: 'Date Time',
        footer: 'Date Time',
        accessorKey: 'dateTime',
        enableGrouping: false
      },
      {
        header: 'Day',
        footer: 'Day',
        accessorKey: 'day',
        enableSorting: true,
        enableGrouping: true

      },
      {
        header: 'Flow',
        footer: 'Flow',
        accessorKey: 'flow',
        enableGrouping: true,
        cell: (props) => {
          // Renderiza os Chips conforme o valor
          switch (props.getValue()) {
            case 'N':
              return <Chip color="primary" label="Top" size="small" variant="light" />;
            case 'E':
              return <Chip color="primary" label="Right" size="small" variant="light" />;
            case 'W':
              return <Chip color="primary" label="Left" size="small" variant="light" />;
            case 'S':
              return <Chip color="primary" label="Bottom" size="small" variant="light" />;
            default:
              return null;
          }
        }
      },
      {
        header: 'CheckSum',
        footer: 'CheckSum',
        accessorKey: 'checkSum',
        enableSorting: false,
        enableColumnFilter: false,
        enableGrouping: false
      },
    ],
    []
  );


  return <ReactTable {...{ data, columns }} />;
}

ReactTable.propTypes = { columns: PropTypes.array, data: PropTypes.array.isRequired };
