import { SET_THEME, SET_CART_STATUS, SET_ACTIVE_PAGE, SET_SEARCH_REQUEST } from "../action-types";

const setTheme = (theme:string) => ({
    type: SET_THEME,
    theme
});

const setActivePage = (activePage:string) => ({
    type: SET_ACTIVE_PAGE,
    activePage
});

const setCartStatus = (cartPopupStatus: boolean) => ({
    type: SET_CART_STATUS,
    cartPopupStatus
});

const setSearchRequest = (searchRequest:string) => ({
    type: SET_SEARCH_REQUEST,
    searchRequest
});






export { setTheme, setCartStatus, setActivePage, setSearchRequest};