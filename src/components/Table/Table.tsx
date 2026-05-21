import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CustomTable = ({ columns, data, tableMeta }) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const table = useReactTable({
    data,
    columns,
    meta: {
      onRowAction: tableMeta?.onRowAction,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      columnPinning: {
        right: ["actions"],
      },
    },
    onGlobalFilterChange: setGlobalFilter,
    state: {
      globalFilter,
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full rounded-xl bg-white overflow-x-auto border border-gray-200">
        <Table>
          <TableHeader className="h-12 bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const isPinned = header.column.getIsPinned();
                  return (
                    <TableHead
                      key={header.id}
                      className={
                        isPinned
                          ? "sticky right-0 z-10 bg-gray-50 shadow-[inset_1px_0_0_0_rgba(0,0,0,0.1)] dark:shadow-[inset_1px_0_0_0_rgba(255,255,255,0.1)] text-[0.8rem] font-bold tracking-wide"
                          : "text-[0.8rem] font-bold tracking-wide"
                      }
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            (
                              header.column.columnDef.header as string
                            ).toUpperCase(),
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="h-16">
                {row.getVisibleCells().map((cell) => {
                  const isPinned = cell.column.getIsPinned();
                  return (
                    <TableCell
                      key={cell.id}
                      className={
                        isPinned
                          ? "sticky right-0 z-10 bg-background shadow-[inset_1px_0_0_0_rgba(0,0,0,0.1)] dark:shadow-[inset_1px_0_0_0_rgba(255,255,255,0.1)]"
                          : ""
                      }
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CustomTable;
