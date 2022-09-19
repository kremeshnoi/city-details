import './App.css'

import React from 'react'

import { Routes, Route } from 'react-router-dom'

import SearchLayout from './features/search/layout/SearchLayout'

const App = () => (
	<Routes>
		<Route
			path="/"
			element={ <SearchLayout /> }/>
		<Route
			path="/:query"
			element={ <SearchLayout /> }/>
	</Routes>
)

export default App
