import "./ModalActivation.css";
import { useDispatch } from "react-redux/es/exports";
import { setLoaderVisibleStatus, setActivationModalVisible, signIn, setSuccessModalVisible, setActivationLink } from "../../redux/action-creators";
import { useEffect, useState } from 'react';
import Input from '../Input/Input';
import { IStoreState } from '../../types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ModalActivation = () => {
	const [text, setText] = useState("");
    const navigate = useNavigate()
	const dispatch = useDispatch();
    const email = useSelector((store: IStoreState) => store.user.signUpData.email);
    const password = useSelector((store: IStoreState) => store.user.signUpData.password);

	const handleHideModal = (e: any) => {
		if (e.target.className === 'modal__error' || e.target.className ==='modal__button modal__button--error' || e.target.className ==='ok-button') 
		dispatch(setActivationModalVisible(false));
    };

    const handleKeyDown = (e: any) => {
        if (e.key === 'Escape')  dispatch(setActivationModalVisible(false))
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return ()=>document.removeEventListener('keydown', handleKeyDown)
    },[])

    const handleActivationClick = () => {
            dispatch(setActivationLink(text));
            dispatch(setActivationModalVisible(false));
            dispatch(setSuccessModalVisible(true));
    }
    
    
    return (
        <div className="modal__activate" onClick={handleHideModal}>
            <div className="modal__container">
                <p className="activation-message">
                    {`We have sent activation link to ${email}`}
                </p>
                <p className="activation-message">
                    Please enter it and press the activation button
                </p>
                <form className="activation-form">
					<Input
						type="text"
						id="input-activation"
						name="input-1"
						placeholder="Activation link"
						isRequired={true}
						isEnable={true}
						isEmpty={text === "" ? true : false}
						isValid={true}
						callback={(e: any) => setText(e.target.value)}
					/>

					{text !== ""  ? 
						<button
							className="button-activate"
							onClick={handleActivationClick}>
							Activate
						</button>
					 : 
						<button className="button-activate" disabled>
							Activate
						</button>
					}
				</form>
                <div className="modal__button modal__button--error" onClick={handleHideModal}/>
			</div>
		</div>
    )
}
export default ModalActivation