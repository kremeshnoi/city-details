import React from 'react'

import { styled } from '@mui/system'

import { MappedCountry } from 'features/search/types'

import { ListItemText as MUIListItemText } from '@mui/material'

import StyledMUIList from 'components/atom/List/styled/List'
import StyledMUIListItem from 'components/atom/List/styled/ListItem'

const StyledWrapper = styled('div')({
	display: 'flex',
	alignItems: 'center'
})

const StyledImg = styled('img')({
	marginRight: '10px',
	width: '30px',
	height: '100%'
})

// TODO: Make this component atomic
const List = React.forwardRef(({ value }: { value: MappedCountry }, ref) => {
	const { capital, country, flag, subregion, currencies, timeZone, languages } = value
	return (
		<StyledMUIList disablePadding={true}>
			<StyledMUIListItem>
				<MUIListItemText primary={'City'} />
				<MUIListItemText primaryTypographyProps={{ align: 'right' }} primary={capital} />
			</StyledMUIListItem>
			<StyledMUIListItem>
				<MUIListItemText primary={'Country'} />
				<StyledWrapper>
					<StyledImg src={flag} />
					<MUIListItemText primaryTypographyProps={{ align: 'right' }} primary={country} />
				</StyledWrapper>
			</StyledMUIListItem>
			<StyledMUIListItem>
				<MUIListItemText primary={'Subregion'} />
				<MUIListItemText primaryTypographyProps={{ align: 'right' }} primary={subregion} />
			</StyledMUIListItem>
			<StyledMUIListItem>
				<MUIListItemText primary={'Currency(-ies)'} />
				{
					Object.values(currencies).map(({ name, symbol }) => (
						<StyledWrapper key={name}>
							<MUIListItemText primaryTypographyProps={{ align: 'right' }} primary={name} />
							<span> { ',' } </span>
							<MUIListItemText primaryTypographyProps={{ align: 'right' }} primary={symbol} />
						</StyledWrapper>
					))
				}
			</StyledMUIListItem>
			<StyledMUIListItem>
				<MUIListItemText primary={'Timezone(-s)'} />
				<MUIListItemText primaryTypographyProps={{ align: 'right' }} primary={timeZone} />
			</StyledMUIListItem>
			<StyledMUIListItem>
				<MUIListItemText primary={'Language(-s)'} />
				{
					Object.values(languages).map((language) => (
						<StyledWrapper key={language}>
							<MUIListItemText primaryTypographyProps={{ align: 'right' }} primary={language} />
							{
								Object.values(languages)[Object.values(languages).length -1] !== language && (
									<span> { ',' } </span>
								)
							}
						</StyledWrapper>
					))
				}
			</StyledMUIListItem>
		</StyledMUIList>
	)
})

List.displayName = 'List'

export default List
