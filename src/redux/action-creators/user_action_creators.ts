import { SET_USER, SIGN_UP,SIGN_IN, ACTIVATE, GET_USER, LOG_OUT, SET_SIGN_UP_DATA, SET_ACTIVATION_LINK } from "../action-types/index";
import { IUserData, IAuthorizeData, ISignIn, ITokens, ISignUpData } from '../../types';
import { takeEvery, put } from 'redux-saga/effects'
import { set404, setActivationModalVisible, setErrorMessage, setErrorVisible, setLoaderVisibleStatus, setRegistrationModalVisibleStatus } from "./ui_action_creators";

const signUp = (user: IUserData) => {
    return {
        type: SIGN_UP,
        user
    }
}

const signIn = (signInData: ISignIn) => {
    return {
        type: SIGN_IN,
        signInData
    }
}

const logOut = () => {
    return {
        type: LOG_OUT,
    }
}

const setUser = (user:IUserData) => ({
    type: SET_USER,
    user
});

const setSignUpData = (data:ISignUpData) => ({
    type: SET_SIGN_UP_DATA,
    data
});

const setActivationLink = (activationLink:string) => ({
    type: SET_ACTIVATION_LINK,
    activationLink
});


const getUser = () => {
    return {
        type: GET_USER,
    }
}


export function* getActualToken():any {
    const accessToken = localStorage.books_access
        
    const verifyResp: Response = yield fetch(`https://studapi.teachmeskills.by/auth/jwt/verify/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            "token": accessToken,
          })
    })
    
    if (verifyResp.status !== 200) {
        const refreshResp: Response = yield fetch(`https://studapi.teachmeskills.by/auth/jwt/refresh/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                "refresh": localStorage.books_refresh,
              })
        })
        const data: { access: string } = yield refreshResp.json()
        const { access } = data
        localStorage.setItem('books_access', access)
        return access
    }
    return accessToken
}

function* getUserData() {
    
    const accessToken:string = yield getActualToken()
    const userResp: Response = yield fetch(`https://studapi.teachmeskills.by/auth/users/me/`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    })
    if (userResp.status === 200) {
        const user: IUserData = yield userResp.json()
        yield put(setUser(user))
        yield put(setLoaderVisibleStatus(true))
        window.location.pathname='/books/new'
    } 
    else {
        if (userResp.status === 404) yield put(set404(true))
        else {
            yield put(setLoaderVisibleStatus(false))
            yield put(setErrorVisible(true))
        }
    }
}

function* signUpUser(action: any) {
    const { user } = action
    yield put(setSignUpData(user))
    const URL = `https://studapi.teachmeskills.by/auth/users/`
    try {
        const resp: Response = yield fetch(URL, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (resp.status === 201) {
            const data: IUserData = yield resp.json()
            yield put(setRegistrationModalVisibleStatus(false))
    
            yield put(setActivationModalVisible(true))
            yield put(setLoaderVisibleStatus(false))
        } else {
    
                yield put(setLoaderVisibleStatus(false))
                const error: IUserData = yield resp.json()
        
                let message = ''
        
                if (error.username) {
                    const arr = error.username
                    for (let i = 0; i < arr.length;i++) message +=arr[i]+' '
                }
        
                if (error.email) {
                    const arr = error.email
                    for (let i = 0; i < arr.length;i++) message +=arr[i]+' '
                }
        
                if (error.password) {
                    const arr = error.password
                    for (let i = 0; i < arr.length;i++) message +=arr[i]+' '
                }
        
                yield put(setErrorMessage(message))
                yield put(setErrorVisible(true))
        } 
    }
    catch (error) {
        yield put(setLoaderVisibleStatus(false))
        yield put(setErrorMessage('404 ERR_INTERNET_DISCONNECTED'))
        yield put(setErrorVisible(true))
    }
    
}

function* signInUser(action: any) {
    const { signInData } = action

    const URL = `https://studapi.teachmeskills.by/auth/jwt/create/`
    try {
    const resp: Response = yield fetch(URL, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signInData)
    });

    if (resp.status === 200){
        const tokens: ITokens = yield resp.json()
        const { access, refresh } = tokens
        localStorage.setItem('books_access', access);
        localStorage.setItem('books_refresh', refresh);

        yield put(getUser())
        yield put(setSignUpData({
            username: '',
            email: '',
            password: ''
        }))

    }
    else {
        yield put(setLoaderVisibleStatus(false))
        yield put(setErrorVisible(true))
    }
    }
    catch (error) {
        yield put(setLoaderVisibleStatus(false))
        yield put(setErrorMessage('404 ERR_INTERNET_DISCONNECTED'))
        yield put(setErrorVisible(true))

    }
    
}


function* watcherUser(){
    yield takeEvery(SIGN_UP, signUpUser)
    yield takeEvery(SIGN_IN, signInUser)
    yield takeEvery(ACTIVATE, fetchActivate)
    yield takeEvery(GET_USER, getUserData)
}

const activate = (auth: IAuthorizeData) => {
    return {
        type: ACTIVATE,
        auth
    }
}


function* fetchActivate(action: any) {

    const URL = `https://studapi.teachmeskills.by/auth/users/activation/`
    const resp: Response = yield fetch(URL, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.auth)
    });
}



export { watcherUser, signUp, activate, signIn, setUser, logOut, setSignUpData, setActivationLink };
    
    
    
    

// andrew12@tempinbox.xyz
// http://studapi.teachmeskills.by//activate/NjQxMQ/bpf1pn-4b9c1880685e0907b954f31742a91ba6

    
    

// {username: "LZ1981", email: "lzolimp1981@gmail.com", id: 6197}
// email
// :
// "lzolimp1981@gmail.com"
// id
// :
// 6197
// username
// :
// "LZ1981"



// {uid: "NjE5Nw", token: "bnbs5u-6d0b38050d3ff358d25db11781c66e8c"}
// token
// : 
// "bnbs5u-6d0b38050d3ff358d25db11781c66e8c"
// uid
// : 
// "NjE5Nw"