import { IStoreState} from '../../types';
import "./ModalActionConfirmation.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { setActionModal} from "../../redux/action-creators";
import { useEffect } from 'react';

const ModalActionConfirmation = () => {
    const dispatch = useDispatch();
    const message = useSelector((store: IStoreState) => store.ui.actionModal.message);
    const callback = useSelector((store: IStoreState) => store.ui.actionModal.callback);

    const hideModal = () => dispatch(setActionModal({ visible: false, message: '', callback: {} } ))

    const handleClickModal = (e: any) => {
        if (e.target.className === 'modal' || e.target.className === 'modal__button' || e.target.className === 'ok-button')
            hideModal()
    }
    
    const handleKeyDown = (e: any) => {
        e.stopPropagation()
        if (e.key === 'Escape')  hideModal()
    }

    const handleConfirmClick = () => {
        callback()
        hideModal()
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return ()=>document.removeEventListener('keydown', handleKeyDown)
    },[])

    return (
        <div className="modal" onClick={handleClickModal}>
            <div className="modal__container">
                <p className="modal__message">{message}</p>
                <div className="choice-button" onClick={handleConfirmClick}>YES</div>
                <div className="choice-button" onClick={hideModal}>NO</div>
                <div className="modal__button" />
			</div>
		</div>
    )
}
export default ModalActionConfirmation