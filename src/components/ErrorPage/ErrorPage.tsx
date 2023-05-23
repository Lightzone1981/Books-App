import './ErrorPage.css'
import { MainHeader } from "../MainHeader"
import { MainMenu } from "../MainMenu"

const ErrorPage = () => {
    return (
        <div className="page-container">
            <MainHeader />
            <MainMenu/>
            <div className="error-container">
                <span>404</span>    
                <span>ERR_INTERNET_DISCONNECTED</span>
            </div>

        </div>
    )
}

export default ErrorPage