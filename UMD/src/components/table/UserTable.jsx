import { getCoreRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { useState } from "react"
import { Table, TableCell, TableHead, TableHeader, TableRow, TableBody } from "../ui/table"
import { ArrowUpDownIcon } from "lucide-react"

const UserTable = ({ data, columns }) => {
    const [sorting, setSorting] = useState([])
    const table = useReactTable({
        data,
        columns,
        state: {
            sorting
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel()

    })
    return (
        <div className="rounded-md border">
            <Table >
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} className="bg-blue-200 border-b border-black">
                            {
                                headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} className="cursor-pointer" onClick={header.column.getToggleSortingHandler()}>
                                            
                                            {header.column.columnDef.header}
                                            
                                            {{
                                                asc: " 🔼",
                                                desc: " 🔽",
                                            }[header.column.getIsSorted()] || null}
                                        </TableHead>
                                    )
                                })
                            }
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody className="bg-blue-50">
                    {
                        table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {
                                        row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {cell.getValue()}
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan = {columns.length} className= "text-center">
                                    No Data Found
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>


        </div>
    )
}
export default UserTable