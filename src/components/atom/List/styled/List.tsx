import { styled } from '@mui/system'
import { List as MUIList } from '@mui/material'

const StyledMUIList = styled(MUIList)(({ theme }) => ({
	width: '100%',
	maxWidth: '600px',
	margin: '10% auto 0 auto',
	textAlign: 'center',
	backgroundColor: theme.palette.background.default
}))

export default StyledMUIList
