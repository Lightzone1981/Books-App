import { Input } from "../Input";
import { useState, useEffect } from 'react';
import "./ModalSignIn.css";
import { useDispatch, useSelector } from "react-redux";
import {
	setLoaderVisibleStatus,
	setRegistrationModalVisibleStatus,
	setSignInModalVisibleStatus,
	signIn,
} from "../../redux/action-creators";

const ModalSignIn = () => {
	const [emailText, setEmailText] = useState("");
	const [passwordText, setPasswordText] = useState("");
	const dispatch = useDispatch();

	const handleHideModal = (e: any) => {
		if (
			e.target.className === "modal" ||
			e.target.className === "modal__button"
		)
			dispatch(setSignInModalVisibleStatus(false));
	};

	const handleRegistrationClick = (e: any) => {
		dispatch(setSignInModalVisibleStatus(false));
		dispatch(setRegistrationModalVisibleStatus(true));
	};

	const handleKeyDown = (e: any) => {
        if (e.key === 'Escape')  dispatch(setSignInModalVisibleStatus(false))
    }

	useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return ()=>document.removeEventListener('keydown', handleKeyDown)
    },[])

	return (
		<div className="modal" onClick={handleHideModal}>
			<div className="modal__container--sign-in">
				<form className="sign-in-form">
					<Input
						type="email"
						id="input-email"
						name="input-2"
						label="Email"
						placeholder="Your email"
						isRequired={true}
						isEnable={true}
						isEmpty={emailText === "" ? true : false}
						isValid={true}
						callback={(e: any) => setEmailText(e.target.value)}
					/>

					<Input
						type="password"
						id="input-password"
						name="input-3"
						label="Password"
						placeholder="Your password"
						isRequired={true}
						isEnable={true}
						isEmpty={passwordText === "" ? true : false}
						isValid={
							passwordText.length < 8 && passwordText !== "" ? false : true
						}
						callback={(e: any) => setPasswordText(e.target.value)}
					/>

					{passwordText !== "" && emailText !== "" ? (
						<button
							className="button-sign-in"
							onClick={(e: any) => {
								dispatch(setLoaderVisibleStatus(true))
								dispatch(
									signIn({
										email: emailText,
										password: passwordText,
									})
								);
								dispatch(setSignInModalVisibleStatus(false));
							}}>
							Sign In
						</button>
					) : (
						<button className="button-sign-in" disabled>
							Sign Up
						</button>
					)}
				</form>
				<div className="modal__button" onClick={handleHideModal} />
				<div className="modal__footer">
					<span>Don't have account?</span>
					<span
						className="button-registration"
						onClick={handleRegistrationClick}>
						Registration
					</span>
				</div>
			</div>
		</div>
	);
};

export default ModalSignIn;
