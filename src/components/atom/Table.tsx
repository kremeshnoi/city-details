import React from 'react'

import { Link } from 'react-router-dom'

import { Country } from 'store/types/countries'
import { Order, getComparator } from 'utils/sort'

import MUIPaper from '@mui/material/Paper'
import MUITable from '@mui/material/Table'
import MUITableRow from '@mui/material/TableRow'
import MUITableHead from '@mui/material/TableHead'
import MUITableBody from '@mui/material/TableBody'
import MUITableCell from '@mui/material/TableCell'
import MUITableContainer from '@mui/material/TableContainer'
import MUITablePagination from '@mui/material/TablePagination'

interface EnhancedTableProps {
	order: Order
	orderBy: string
	setOpen: () => void
	data: Country[]
	children: React.ReactNode
	setSelected: React.Dispatch<React.SetStateAction<number>>
}

// TODO: Make this component atomic
const Table = (props:EnhancedTableProps) => {
	const { order, orderBy, data } = props

	const [page, setPage] = React.useState(0)
	const [rowsPerPage, setRowsPerPage] = React.useState(5)

	const handleChangePage = (event:unknown, newPage:number) => setPage(newPage)
	const handleChangeRowsPerPage = (event:React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
	}

	const sortedData = (rawData:Country[]) =>
		rawData.length
			? [...rawData].sort(getComparator(order, orderBy))
			: rawData

	const slicedData = (rawData:Country[]) =>
		rawData?.length
			? rawData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
			: rawData

	const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, capital:string) => {
		props.setSelected(data.findIndex(t => t.capital[0] === capital))
		props.setOpen && props.setOpen()
	}

	// TODO: Improve with ComponentFactory hoc
	return (
		<MUITableContainer component={MUIPaper}>
			<MUITable>
				<MUITableHead>
					<MUITableRow>
						{props?.children}
					</MUITableRow>
				</MUITableHead>
				<MUITableBody>
					{slicedData(sortedData(data)).map((row:Country, index:number) => (
						<MUITableRow key={index}>
							<MUITableCell scope={'row'}>
								<Link to={`/${row?.capital[0]}`} onClick={(e) => onClickHandler(e, row?.capital[0])}>
									{row?.capital[0]}
								</Link>
							</MUITableCell>
							<MUITableCell scope={'row'}>
								{row?.name?.common}
							</MUITableCell>
						</MUITableRow>
					))}
				</MUITableBody>
			</MUITable>
			{data.length > 10 && (
				<MUITablePagination
					component={'div'}
					page={page}
					count={data.length}
					rowsPerPage={rowsPerPage}
					rowsPerPageOptions={[5, 10]}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			)}
		</MUITableContainer>
	)
}

export default Table
