import {IStoreState } from "../../types";
// import "../ModalPost/Modal.css";
import "./ProfileModal.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { logOut, setActionModal, setProfileModalVisibleStatus, setSignInModalVisibleStatus } from "../../redux/action-creators";
import { useEffect } from 'react';
import ModalActionConfirmation from '../ModalActionConfirmation/ModalActionConfirmation';

const ModalProfile = () => {
    const userName = useSelector((state: IStoreState) => state.user.authorizedUser.username);
    const userEmail = useSelector((state: IStoreState) => state.user.authorizedUser.email);
	const dispatch = useDispatch();

	const handleHideModal = (e: any) => {
		if (e.target.className === 'modal' || e.target.className ==='modal__button' || e.target.className ==='ok-button') 
		dispatch(setProfileModalVisibleStatus(false));
    };
    
    const handleLogOut = () => {
		dispatch(logOut());
        dispatch(setProfileModalVisibleStatus(false));
        dispatch(setActionModal({visible:false, message:"",callback:{} }))
        window.location.pathname=`/`
    };
    const handleKeyDown = (e: any) => {
        if (e.key === 'Escape')  dispatch(setProfileModalVisibleStatus(false))
    }
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return ()=>document.removeEventListener('keydown', handleKeyDown)
    },[])

    return ( <>
        <div className="modal" onClick={handleHideModal}>
            <div className="modal__container">
                <div className="profile">
                    <p className="profile__title">Your profile</p>
                    <p className="profile__name">
                        Name:
                        <span>{`${userName.split('_').join(' ')}`}</span>
                    </p>
                    <p className="profile__email">
                        Email:
                        <span>{`${userEmail}`}</span>
                    </p>
                </div>
                <div className="log-out-button" onClick={() => dispatch(setActionModal({visible:true, message:"Are you want to log out?",callback:handleLogOut }))}>Log Out</div>
                <div className="modal__button" onClick={handleHideModal}/>
			</div>
		</div>
    
    </>
        
    )
}
export default ModalProfile