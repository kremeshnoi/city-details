import { CONTRIES_BY_CAPITAL_NAME } from '../../../services/countries'

export const getCountryByCapitalName = async (name:string) => await fetch(CONTRIES_BY_CAPITAL_NAME(name))
