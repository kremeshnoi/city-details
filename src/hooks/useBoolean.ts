import { useState, useCallback } from 'react'

const useBoolean = (initial:boolean) => {
	const [state, setState] = useState(initial)
	const toggle = useCallback(() => {
		setState(a => !a)
	}, [state])
	return [state, toggle]
}

export default useBoolean
