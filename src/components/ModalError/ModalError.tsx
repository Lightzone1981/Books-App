import {IStoreState } from "../../types";
import "./ModalError.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { logOut, setErrorMessage, setErrorVisible, setProfileModalVisibleStatus, setSignInModalVisibleStatus } from "../../redux/action-creators";
import EmptyListIcon from '../Icons/EmptyListIcon';
import { useEffect } from 'react';

const ModalError = () => {
    const dispatch = useDispatch();
    const message = useSelector((state: IStoreState) => state.ui.errorMessage)

	const handleHideModal = (e: any) => {
		if (e.target.className === 'modal__error' || e.target.className ==='modal__button modal__button--error' || e.target.className ==='ok-button') 
		dispatch(setErrorVisible(false));
		dispatch(setErrorMessage("SERVER ERROR"));
    };

    const handleKeyDown = (e: any) => {
        if (e.key === 'Escape') {
            dispatch(setErrorVisible(false))
		    dispatch(setErrorMessage("SERVER ERROR"));
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return ()=>document.removeEventListener('keydown', handleKeyDown)
    },[])
    
    
    return (
        <div className="modal__error" onClick={handleHideModal}>
            <div className="modal__container">
                <EmptyListIcon width="25" height="25" color="#fff" />
                <p className='error-message'>{`OOPS... ${message}`}</p>
                <div className="modal__button modal__button--error" onClick={handleHideModal}/>
			</div>
		</div>
    )
}
export default ModalError