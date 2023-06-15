import "./ModalActivationSuccess.css";
import { useDispatch } from "react-redux/es/exports";
import { setLoaderVisibleStatus, setActivationModalVisible, signIn, setSuccessModalVisible, activate } from "../../redux/action-creators";
import { useEffect, useState } from 'react';
import { IStoreState } from '../../types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ModalActivationSuccess = () => {
    const navigate = useNavigate()
	const dispatch = useDispatch();
    const email = useSelector((store: IStoreState) => store.user.signUpData.email);
    const password = useSelector((store: IStoreState) => store.user.signUpData.password);
    const username = useSelector((store: IStoreState) => store.user.signUpData.username);
	const activationLink = useSelector((store: IStoreState) => store.user.activationLink);
	
	console.log(email);
	console.log(password);

	const getAuthParams = (link: string) => {
		const params = link.split('/')
		return {
			"uid":params[params.length-2],
			"token":params[params.length-1],
		}
	}
	useEffect(() => {
		dispatch(activate(getAuthParams(activationLink)))
	}, [])

    
	const handleHideModal = (e: any) => {
		if (e.target.className === 'modal__activate' || e.target.className === 'button-success') {
			dispatch(setSuccessModalVisible(false));
			dispatch(setLoaderVisibleStatus(true))
			dispatch(signIn({email, password}));
		} 
    };

    const handleKeyDown = (e: any) => {
        if (e.key === 'Escape')  dispatch(setActivationModalVisible(false))
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return ()=>document.removeEventListener('keydown', handleKeyDown)
    },[])
    
    
    return (
        <div className="modal__activate" onClick={handleHideModal}>
            <div className="modal__container">
                <p className="success-message">
                    {`${username}, thank you for registration!`}
                </p>
					<button	className="button-success" onClick={handleHideModal}>
						OK
					</button>
                <div className="modal__button" onClick={handleHideModal}/>
			</div>
		</div>
    )
}
export default ModalActivationSuccess