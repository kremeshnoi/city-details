import React from 'react'

import { useAppDispatch } from 'store/hooks'
import { fetchContriesByCapitalName } from 'store/actions/countries'

import TextInput from 'components/atom/TextField'
import Form from 'features/search/components/styled/Form'
import Button from 'components/atom/Button'

const SearchForm = () => {
	const [stringQuery, setStringQuery] = React.useState<string>('')

	const dispatch = useAppDispatch()

	const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => setStringQuery(e.target.value)
	const onSubmitHandler = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(fetchContriesByCapitalName(stringQuery))
	}

	return (
		<Form onSubmit={onSubmitHandler}>
			<TextInput
				id={'search'}
				label={'Сity'}
				variant={'standard'}
				value={stringQuery}
				onChange={onChangeHandler}
				helperText={'The capital of country'}
			/>
			<Button
				type={'submit'}
				variant={'contained'}
			>
				Search
			</Button>
		</Form>
	)
}

export default SearchForm
