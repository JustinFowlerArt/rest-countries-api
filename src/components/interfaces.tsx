export interface iCountry {
	name: {
		common: string;
		official: string;
		nativeName: iTranslation;
	};
	tld: string[];
	cca2: string;
	ccn3: string;
	cca3: string;
	independent: boolean;
	status: string;
	unMember: boolean;
	currencies: iCurrency;
	idd: {
		root: string;
		suffixes: string[];
	};
	capital: string[];
	altSpellings: string[];
	region: string;
	subregion: string;
	languages: iLanguage;
	translations: iTranslation;
	latlng: number[];
	landlocked: boolean;
    borders?: string[];
	area: number;
	demonyms: iDemonyms;
	flag: string;
	maps: {
		googleMaps: string;
		openStreetMaps: string;
	};
	population: number;
	car: {
		signs: string[];
		side: string;
	};
	timezones: string[];
	continents: string[];
	flags: {
		png: string;
		svg: string;
	};
	coatOfArms: {
		png: string;
		svg: string;
	};
	startOfWeek: string;
	capitalInfo: {
		latlng: number[];
	};
	postalCode: {
		format: string;
		regex: string;
	};
}

export interface iError {
	status: number;
	message: string;
}

interface iTranslation {
	official: string;
	common: string;
}

interface iCurrency {
	name: string;
	symbol: string;
}

interface iDemonyms {
	f: string;
	m: string;
}

interface iLanguage {
	name: string;
}
