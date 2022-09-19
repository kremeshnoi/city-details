type CapitalInfo = {
	latlng: [number, number]
}

type Car = {
	signs: string[],
	side: string
}

type Images = {
	png: string,
	svg: string
}
type Currency = {
	name: string,
	symbol: string
}

export type Currencies = {
	[cur: string]:Currency
}

type Gini = {
	[year: number]: number
}

export type Languages = {
	[language: string]: string
}

type Idd = {
	root: string,
	suffixes: string[]
}

type Maps = {
	[mapProviderName: string]: string
}

type NativeName = {
	[abbr: string]: { common: string, official: string }
}

type CountryName = {
	common: string,
	official: string,
	nativeName: NativeName
}

type PostalCode = {
	format: string,
	regex: string,
}

export type Country = {
	altSpellings: string[]
	area: number
	borders: string[]
	capital:string[]
	capitalInfo: CapitalInfo
	car:Car
	cca2:string
	cca3:string
	ccn3:string
	cioc:string
	coatOfArms:Images
	continents:string[]
	currencies:Currencies
	demonyms: unknown // not sure what is that
	fifa:string
	flag:string
	flags:Images
	gini:Gini
	idd:Idd
	independent:boolean
	landlocked:boolean
	languages:Languages
	latlng:[number, number]
	maps:Maps
	name: CountryName
	population: number
	postalCode:PostalCode
	region:string
	startOfWeek:string
	status:string
	subregion:string
	timezones:string[]
	tld:string[]
	translations:NativeName[]
	unMember:boolean
}
