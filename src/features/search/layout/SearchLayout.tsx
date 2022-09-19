import React from 'react'

import { useParams, Params } from 'react-router-dom'

import { Container } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import MUITableCell from '@mui/material/TableCell'

import { primaryTheme } from 'themes/primary'

import { useAppDispatch, useAppSelector } from 'store/hooks'

import { MappedCountry } from 'features/search/types'

import { fetchContriesByCapitalName } from 'store/actions/countries'

import Modal from 'components/atom/Modal'
import Table from 'components/atom/Table'
import List from 'components/atom/List/index'

import SearchForm from 'features/search/form/SerachForm'
import Main from 'features/search/components/styled/Main'

const SearchLayout = () => {
	const dispatch = useAppDispatch()

	const { query }: Params = useParams()
	const { countries } = useAppSelector(state => state.countries)

	// TODO: Improve modal toggling with useBoolean
	const [isOpen, setIsOpen] = React.useState(false)
	const [pastQuery, setPastQuery] = React.useState<string | undefined>(undefined)
	const [selectedCountry, setSelectedCountry] = React.useState<number>(-1)

	const setOpen = () => setIsOpen(true)
	const setClose = () => setIsOpen(false)

	const mappedCountry = React.useMemo(() => {
		const country = countries[selectedCountry] ?? undefined
		if (!country) return country
		return {
			capital: country.capital[0],
			subregion: country.subregion,
			currencies: country.currencies,
			country: country.name.common,
			flag: country.flags.png,
			timeZone: country.timezones,
			languages: country.languages
		} as MappedCountry
	}, [selectedCountry, countries])

	React.useEffect(() => {
		if (query) {
			dispatch(fetchContriesByCapitalName(query))
			setPastQuery(query)
		}
	}, [])

	React.useEffect(() => {
		if (query) setSelectedCountry(countries.findIndex(t => t.capital[0] === query))
	}, [countries, query])

	React.useEffect(() => {
		if (query !== pastQuery) {
			setOpen()
			setPastQuery(query)
		}
	}, [mappedCountry, query])

	return (
		<ThemeProvider theme={primaryTheme}>
			<Main>
				<Container>
					<SearchForm />
					<Table
						data={countries}
						order={'asc'}
						orderBy={'capital'}
						setOpen={setOpen}
						setSelected={setSelectedCountry}
					>
						<MUITableCell component={'th'} scope={'row'}>City</MUITableCell>
						<MUITableCell component={'th'} scope={'row'}>Country</MUITableCell>
					</Table>
					{mappedCountry && (
						<Modal
							open={isOpen}
							onClose={setClose}
						>
							<List value={mappedCountry}/>
						</Modal>
					)}
				</Container>
			</Main>
		</ThemeProvider>
	)
}

export default SearchLayout
