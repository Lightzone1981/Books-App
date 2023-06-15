import { Input } from "../Input";
import { useState, useEffect } from 'react';
import "./ModalRegistration.css";
import { useDispatch, useSelector } from "react-redux";
import {
	setLoaderVisibleStatus,
	setRegistrationModalVisibleStatus,
	setSignInModalVisibleStatus,
	signIn,
	signUp,
} from "../../redux/action-creators";

const ModalRegistration = () => {
	const [nameText, setNameText] = useState("");
	const [emailText, setEmailText] = useState("");
	const [passwordText, setPasswordText] = useState("");
	const [passwordConfirmText, setPasswordConfirmText] = useState("");
	const isAllFieldsValid =
		nameText !== "" &&
		emailText !== "" &&
		passwordText.length > 7 &&
		passwordText !== "" &&
		passwordText === passwordConfirmText
			? true
			: false;
	const dispatch = useDispatch();

	const handleHideRegistration = (e: any) => {
		if (
			e.target.className === "modal" ||
			e.target.className === "modal__button"
		)
			dispatch(setRegistrationModalVisibleStatus(false));
	};

	const handleSignInClick = (e: any) => {
		dispatch(setRegistrationModalVisibleStatus(false));
		dispatch(setSignInModalVisibleStatus(true));
	};

	const handleKeyDown = (e: any) => {
        if (e.key === 'Escape')  dispatch(setRegistrationModalVisibleStatus(false))
	}
	
	useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return ()=>document.removeEventListener('keydown', handleKeyDown)
    },[])

	return (
		<div className="modal" onClick={handleHideRegistration}>
			<div className="modal__container--registration">
				<form className="registration-form">
					<Input
						type="text"
						id="input-name"
						name="input-1"
						label="Name"
						placeholder="Your name"
						isRequired={true}
						error="Enter your name"
						isEnable={true}
						isEmpty={nameText === "" ? true : false}
						isValid={true}
						callback={(e: any) => setNameText(e.target.value)}
					/>

					<Input
						type="email"
						id="input-email"
						name="input-2"
						label="Email"
						placeholder="Your email"
						isRequired={true}
						error="Email is not valid"
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
						error="Password must contain at least 8 characters"
						isEnable={true}
						isEmpty={passwordText === "" ? true : false}
						isValid={
							passwordText.length < 8 && passwordText !== "" ? false : true
						}
						callback={(e: any) => setPasswordText(e.target.value)}
					/>

					<Input
						type="password"
						id="input-password-confirm"
						name="input-3"
						label="Confirm Password"
						placeholder="Confirm password"
						error="Confirmation not valid"
						isRequired={true}
						isEnable={true}
						isEmpty={passwordConfirmText === "" ? true : false}
						isValid={
							(passwordText === passwordConfirmText &&
								passwordConfirmText !== "") ||
							passwordConfirmText === ""
								? true
								: false
						}
						callback={(e: any) => setPasswordConfirmText(e.target.value)}
					/>

					{isAllFieldsValid ? (
						<button
							className="button-registration"
							data-active={isAllFieldsValid}
							onClick={(e: any) => {
								e.preventDefault()
								dispatch(setLoaderVisibleStatus(true))
								dispatch(
									signUp({
										username: `${nameText}`,
										email: `${emailText}`,
										password: `${passwordText}`,
									})
								);

								dispatch(setRegistrationModalVisibleStatus(false))
							}}>
							Sign Up
						</button>
					) : (
						<button className="button-registration" disabled>Sign Up</button>
					)}
				</form>

				<div className="modal__button" onClick={handleHideRegistration} />
				<div className="modal__footer">
					<span>Already have registration?</span>
					<span className="button-registration" onClick={handleSignInClick}>
						Sign in
					</span>
				</div>
			</div>
		</div>
	);
};

export default ModalRegistration;
