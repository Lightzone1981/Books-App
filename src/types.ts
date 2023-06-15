export interface IStoreState {
	books: IBooksState;
	ui: IUiState;
    user: IUserState;
}

export interface IBooksState {
	newBooks: IBookInfo[];
    searchBooks: IBookInfo[];
    searchBooksTotal: number;
    favoritesBooks: IBookInfo[];
    favoritesBooksTotal: number;
    viewedBooks: IBookInfo[];
    viewedBooksTotal: number;
    cartBooks: IBookInCart[],
    cartBooksTotal: number,
    selectedBook: IBookInfo;
    myRating:any,
	
}

export interface IUiState {
    theme:string,
    cartPopupStatus: boolean,
    loaderStatus: boolean,
    errorVisible: boolean,
    errorMessage: string,
    status404:boolean,
    activePage: string,
    searchRequest: string,
    paginationItem: number,
    profileModalVisibleStatus: boolean,
    signInModalVisible: boolean,
    registrationModalVisible: boolean,
    activationModalVisible: boolean,
    successModalVisible:boolean,
    actionModal:IAction,
    searchErrorStatus: boolean,
    sortType: string,
    sortParam:string,
}

export interface IUserState {
    authorizedUser: IUserData,
    signUpData: ISignUpData,
    activationLink:string,
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

export interface IRating{
    isbn: string,
    rating: number,
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

export interface ISignUpData{
    email: string,
    password: string,
    username:string,
}

export interface IIcon {
	id?: string;
	width: string;
	height: string;
	color: string;
	callback?: Function;
	hoverColor?: string;
}

export interface IPagination {
	activeItem: number;
	allPostsCount: number;
    callback: Function;
    dotsCallback: Function;
}

export interface IUserData {
	username: string;
	email: string;
	password: string;
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

export interface IAction {
    visible:boolean,
    message: string;
    callback: any;
}