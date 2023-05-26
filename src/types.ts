export interface IStoreState {
	books: IBooksState;
	ui: IUiState;
    user: IUserState;
}

export interface IBooksState {
	newBooks: IBookInfo[];
    searchBooks: IBookInfo[];
    favoritesBooks: IBookInfo[];
    favoritesBooksTotal: number;
    viewedBooks: IBookInfo[];
    viewedBooksTotal: number;
    cartBooks: IBookInCart[],
    cartBooksTotal: number,
	selectedBook: IBookInfo;
	
}

export interface IUiState {
    theme:string,
    cartPopupStatus: boolean,
    activePage: string,
    searchRequest: string,
}

export interface IUserState {
	authorizedUser:IUserData,
}

export interface IBooksResponse{
    total: string,
    page: string,
    books: IBookInfo[]
}

export interface IAuthorizeData {
	uid: any,
	token: any,
}

export interface IBookInfo {
	error: string,
    title: string,
    subtitle: string,
    language:string,
    authors: string,
    publisher: string,
    isbn10: string,
    isbn13: string,
    pages: string,
    year: string,
    rating: string,
    desc: string,
    price: string,
    image: string,
    url: string,
    pdf: any,
}

export interface IBookCard {
    title: string,
    subtitle: string,
    isbn13: string,
    price: string,
    image: string,
}

export interface IBookInCart {
    title: string,
    subtitle: string,
    isbn13: string,
    price: string,
    count: number,
    image: string,
    bookCartStatus?:boolean,
}

export interface IIcon {
	id?: string;
	width: string;
	height: string;
	color: string;
	callback?: Function;
	hoverColor?: string;
}

export interface IUserData {
	name: string;
	email: string;
	password?: string;
	id?:number,
}

export interface IUserAvatar {
	username: string;
	location: string;
}

export interface ITokens {
	access: string;
	refresh: string;
}

export interface ISignIn {
	email: string;
	password: string;
}

export interface IInput {
	type: string;
	id: string;
	name: string;
	value?: string;
	label?: string;
	placeholder?: string;
	isEnable?: boolean;
	isEmpty?: boolean;
	isValid?: boolean;
	isRequired?: boolean;
	error?: string;
	callback: Function;
}