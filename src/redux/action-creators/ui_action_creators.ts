import { SET_THEME } from "../action-types";

const setTheme = (theme:string) => ({
    type: SET_THEME,
    theme
});



export { setTheme};