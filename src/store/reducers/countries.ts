import {
	FETCH_ERROR,
	FETCH_LOADING,
	FETCH_SUCCESS
} from 'store/actions/types'

import { Country } from 'store/types/countries'

enum Status {
	ERROR = 'error',
	LOADING = 'loading',
	SUCCESS = 'success'
}

const initialState: {countries: Country[], status: Status} = {
	countries: [],
	status: Status.LOADING
}

const reducer = (state = initialState, action: { type:string; payload: Country[] }) => {
	switch (action.type) {
	case FETCH_ERROR:
		return ({
			countries: [],
			status: Status.ERROR
		})
	case FETCH_LOADING:
		return ({
			...state,
			status: Status.LOADING,
		})
	case FETCH_SUCCESS:
		return ({
			countries: action.payload,
			status: Status.SUCCESS
		})
	default:
		return state
	}
}

export default reducer
