import "./StartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../../types";
import { setRegistrationModalVisibleStatus, setSignInModalVisibleStatus } from "../../redux/action-creators";
import { ModalSignIn } from "../ModalSignIn";
import ModalRegistration from '../ModalRegistration/ModalRegistration';
import { LoaderBook } from "../LoaderBook";
import Loader2 from '../LoaderBook/Loader2';
import ModalError from '../ModalError/ModalError';
import ModalActivation from '../ModalActivation/ModalActivation';
import ModalActivationSuccess from '../ModalActivationSuccess/ModalActivationSuccess';


const StartPage = () => {
	const dispatch = useDispatch();
	const signInModalVisible = useSelector((state:IStoreState)=>state.ui.signInModalVisible)
	const loaderVisible = useSelector((state:IStoreState)=>state.ui.loaderStatus)
	const errorVisible = useSelector((state:IStoreState)=>state.ui.errorVisible)
	const registrationModalVisible = useSelector((state:IStoreState)=>state.ui.registrationModalVisible)
    const activationModalVisible = useSelector((state: IStoreState) => state.ui.activationModalVisible)
    const successModalVisible = useSelector((state: IStoreState) => state.ui.successModalVisible)
    
    return (<>
        <div style={{ position:'absolute', top: '35%', left: '44%', zoom: '1.4' }} >
            <Loader2 />
        </div>
        { errorVisible?<ModalError/>:<></>}
        { loaderVisible?<LoaderBook/>:<></>}
        {signInModalVisible?<ModalSignIn />:<></>}
        {registrationModalVisible?<ModalRegistration />:<></>}
        {activationModalVisible ? <ModalActivation /> : <></>}
        {successModalVisible ? <ModalActivationSuccess /> : <></>}
        
        
        <div className="start">
        <h1 className="start-title">Welcome to IT-books Store!</h1>
		<div className="start-sign-in" onClick={()=>dispatch(setSignInModalVisibleStatus(true))}>
			Sign In
		</div>
        
            <div className="start-sign-in" onClick={() => dispatch(setRegistrationModalVisibleStatus(true))}>
			Registration
		</div>

        </div>
    </>
	);
};

export default StartPage;
