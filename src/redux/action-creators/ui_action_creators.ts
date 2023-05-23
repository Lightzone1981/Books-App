import { SET_THEME, SET_BURGER_STATUS, SET_ACTIVE_PAGE, SET_SEARCH_REQUEST } from "../action-types";

const setTheme = (theme:string) => ({
    type: SET_THEME,
    theme
});

const setActivePage = (activePage:string) => ({
    type: SET_ACTIVE_PAGE,
    activePage
});

const setBurgerStatus = (status:boolean) => ({
    type: SET_BURGER_STATUS,
    status
});

const setSearchRequest = (searchRequest:string) => ({
    type: SET_SEARCH_REQUEST,
    searchRequest
});






export { setTheme, setBurgerStatus, setActivePage, setSearchRequest};