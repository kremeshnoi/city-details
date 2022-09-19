import { Currencies, Languages } from 'store/types/countries'

export type MappedCountry = {
	capital: string
	subregion: string
	currencies: Currencies,
	country: string,
	flag: string
	timeZone: string[],
	languages: Languages
}
