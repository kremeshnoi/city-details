import { styled } from '@mui/system'
import { ListItem as MUIListItem } from '@mui/material'

const StyledMUIListItem = styled(MUIListItem)(({ theme }) => ({
	borderBottom: `1px solid ${theme.palette.primary.main}`
}))

export default StyledMUIListItem
