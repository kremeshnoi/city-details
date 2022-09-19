const PROTOCOL = 'https'
const DOMAIN = 'restcountries.com'
const API_VERSION = 'v3.1'

export const CONTRIES_BY_CAPITAL_NAME = (name:string) => `${PROTOCOL}://${DOMAIN}/${API_VERSION}/capital/${name}`
