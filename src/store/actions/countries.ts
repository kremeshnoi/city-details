import { Dispatch } from '@reduxjs/toolkit'

import { getCountryByCapitalName } from 'features/search/api/getCountryApi'

import { FETCH_ERROR, FETCH_LOADING, FETCH_SUCCESS } from 'store/actions/types'

export const fetchContriesByCapitalName = (name:string) =>
	(dispatch: Dispatch) => {
		dispatch({
			type: FETCH_LOADING
		})
		getCountryByCapitalName(name).then(res => res.json()).then(data => {
			if (!data.length) {
				dispatch({
					type: FETCH_ERROR,
				})
			} else {
				dispatch({
					type: FETCH_SUCCESS,
					payload: data
				})
			}
		}).catch(error => {
			dispatch({
				type: FETCH_ERROR
			})
		})
	}
