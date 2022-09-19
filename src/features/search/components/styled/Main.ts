import { styled } from '@mui/system'

const Main = styled('main')(({ theme }) => ({
	padding: 8,
	height: '100vh',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	boxSizing: 'border-box',
	backgroundColor: theme.palette.background.default
}))

export default Main
