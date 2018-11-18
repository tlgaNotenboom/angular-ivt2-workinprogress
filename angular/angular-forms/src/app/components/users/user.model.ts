export enum Gender {
	'male' = 0,
	'female',
	'unknown' 
}

export enum Title {
	'mr.',
	'ms',
	'miss',
	'mrs',
	'monsieur',
	'madame',
	'mademoiselle',
	'unknown'
}

export class User {

	gender: Gender = Gender.unknown;
	name: {
		title: string;
		first: string;
		last: string
	} = {
		title: '',
		first: '',
		last: ''
	};
	location: {
		street: string;
		city: string;
		state: string;
		postcode: number;
		coordinates: {
			latitude: string;
			longitude: string
		};
		timezone: {
			offset: string;
			description: string
		};
	};
	email: string = '';
	login: {
		uuid: string;
		username: string;
		password: string;
		salt: string;
		md5: string;
		sha1: string;
		sha256: string
	};
	dob: {
		date: string;
		age: number
	};
	registered: {
		date: string;
		age: number
	};
	phone: string;
	cell: string;
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	} = {
		large: "",
		medium: "",
		thumbnail: ""
	};
	nat: string

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}

}