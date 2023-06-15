import { SET_THEME, SET_CART_STATUS, SET_ACTIVE_PAGE, SET_SEARCH_REQUEST, SET_LOADER_STATUS, SET_PAGINATION_ITEM, SET_PROFILE_MODAL_VISIBLE, SET_REGISTRATION_MODAL_VISIBLE, SET_SIGN_IN_MODAL_VISIBLE, SET_LOADER_VISIBLE, SET_SEARCH_STATUS, SET_SORT_TYPE, SET_SORT_PARAM, SET_ERROR_VISIBLE, SET_ERROR_MESSAGE, SET_ACTIVATION_MODAL_VISIBLE, SET_SUCCESS_MODAL_VISIBLE, SET_ACTION_MODAL, SET_404 } from "../action-types";
import { IAction } from '../../types';

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

const setLoaderStatus = (status: boolean) => ({
    type: SET_LOADER_STATUS,
    status
});

const setPaginationItem = (item: number) => ({
    type: SET_PAGINATION_ITEM,
    item
});

const setProfileModalVisibleStatus = (status:boolean) => ({
    type: SET_PROFILE_MODAL_VISIBLE,
    profileModalVisibleStatus:status
});

const setRegistrationModalVisibleStatus = (status:boolean) => ({
    type: SET_REGISTRATION_MODAL_VISIBLE,
    status
});

const setSignInModalVisibleStatus = (status:boolean) => ({
    type: SET_SIGN_IN_MODAL_VISIBLE,
    status
});

const setLoaderVisibleStatus = (status:boolean) => ({
    type: SET_LOADER_VISIBLE,
    status
});

const setSearchStatus = (status:boolean) => ({
    type: SET_SEARCH_STATUS,
    status
});

const setSortType = (sortType:string) => ({
    type: SET_SORT_TYPE,
    sortType
});

const setSortParam = (sortParam:string) => ({
    type: SET_SORT_PARAM,
    sortParam
});

const setErrorVisible = (errorVisible:boolean) => ({
    type: SET_ERROR_VISIBLE,
    errorVisible
});

const setErrorMessage = (errorMessage:string) => ({
    type: SET_ERROR_MESSAGE,
    errorMessage
});



const setActivationModalVisible = (activationModalVisible:boolean) => ({
    type: SET_ACTIVATION_MODAL_VISIBLE,
    activationModalVisible
});

const setSuccessModalVisible = (successModalVisible:boolean) => ({
    type: SET_SUCCESS_MODAL_VISIBLE,
    successModalVisible
});

const setActionModal = (actionModal:IAction) => ({
    type: SET_ACTION_MODAL,
    actionModal
});



const set404 = (status:boolean) => ({
    type: SET_404,
    status
});







export { setTheme, setCartStatus, setActivePage, setSearchRequest, setLoaderStatus, setPaginationItem, setProfileModalVisibleStatus, setRegistrationModalVisibleStatus, setSignInModalVisibleStatus, setLoaderVisibleStatus, setSearchStatus, setSortType, setSortParam, setErrorVisible, setErrorMessage, setActivationModalVisible, setSuccessModalVisible, setActionModal, set404, };