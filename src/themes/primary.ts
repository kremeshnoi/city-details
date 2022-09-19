import { createTheme } from '@mui/material/styles'

export const primaryTheme = createTheme({
	palette: {
		background: {
			default: '#efefef'
		},
		primary: {
			main: '#3d435b',
		}
	},
	typography: {
		allVariants: {
			color: '#3d435b'
		}
	},
	components: {
		MuiList: {
			styleOverrides: {
				padding: '0',
			}
		}
	}
})
