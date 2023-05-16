export interface IStoreState {
	books: IBooksState;
	ui: IUiState;
	user: IUserState;
}

export interface IBooksState {
	newBooks: IBookInfo[];
	searchBooks: IBookInfo[];
	selectedBook: IBookInfo;
	
}

export interface IUiState {
	
}

export interface IUserState {
	
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

export interface IUserData {
	username: string;
	email: string;
	password?: string;
	id?:number,
}

export interface ITokens {
	access: string;
	refresh: string;
}

export interface ISignIn {
	email: string;
	password: string;
}
